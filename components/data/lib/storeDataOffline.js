import {Alert} from 'react-native';
import {downloadImage, getData, isIosPlatform, storeData} from './utils';
import {isEmpty, each, sortBy, split, map, difference} from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';

const updateData = (offlineData, baseStore) => {
  const {userStore, bookStore} = baseStore;
  let newObject = {offlineData: []};

  newObject.user = userStore?.currentUser?.objectEntities;
  newObject.purchasedBooks = bookStore.purchasedBooks.map(
    element => element.objectEntities,
  );

  newObject.availableBooks = bookStore.availableBooks.map(
    element => element.objectEntities,
  );

  newObject.continueReadingBooks = bookStore.continueReadingBooks.map(
    element => element.objectEntities,
  );

  const bookData = bookStore.getById(
    JSON.parse(bookStore.offlineData),
    offlineData.id,
  );

  if (isEmpty(bookData)) {
    newObject.offlineData.push(offlineData);
  } else {
    // offlineData.images = {
    //   portrait: (offlineData.images.portrait)
    // }
    if (!isEmpty(offlineData.images.landscape)) {
      const remainingImages = difference(
        bookData.images?.landscape,
        offlineData.images?.landscape,
      );
      if (remainingImages.length !== 0) {
        bookData.images.landscape.push(remainingImages);
      }
    }
    if (!isEmpty(offlineData.images?.portrait)) {
      const remainingImages = difference(
        bookData.images?.portrait,
        offlineData.images?.portrait,
      );
      if (remainingImages.length !== 0) {
        bookData.images.portrait.push(remainingImages);
      }
    }
    const selectedData = baseStore.getById(bookStore.offlineData, bookData.id);
    if (!isEmpty(selectedData)) {
      selectedData.images = bookData.images;
    } else {
      newObject.offlineData.push(bookData);
    }
  }
  storeData('offlineBookData', JSON.stringify(newObject));
};

// const moveImageToCorrectFolder = (res, fileName) => {
//   const baseDir = RNFetchBlob.fs.dirs.PictureDir;
//   const path = `${baseDir}/${fileName}`;
//   RNFetchBlob.fs.writeFile(path, res.data, 'uri');

//   return path;
// };

const generateImageName = (id, lang, mode, index) =>
  `${id}_${lang}_${mode}_index_${index}`;

const unDownloadedImages = (offlineCurrentBookData, formattedData) => {
  let newData = formattedData;
  if (isEmpty(offlineCurrentBookData)) {
    return newData;
  } else {
    const portraitDataIndexes = map(
      offlineCurrentBookData.images?.portrait,
      item => getIndexFromUrl(item),
    );

    const landscapeDataIndexes = map(
      offlineCurrentBookData.images?.landscape,
      item => getIndexFromUrl(item),
    );
    newData.portraitData = formattedData.portraitData.filter(
      item => !portraitDataIndexes.includes(item.pageNo.toString()),
    );

    newData.landscapeData = formattedData.landscapeData.filter(
      item => !landscapeDataIndexes.includes(item.pageNo.toString()),
    );
  }
  return newData;
};

const downloadImagesToLocal = (
  baseStore,
  selectedReadingLanguage,
  offlineData,
  offlineCurrentBookData,
) => {
  const {bookStore} = baseStore;
  const promisesCollection = [];
  const {pagesId, id} = bookStore.currentBook;
  const result = unDownloadedImages(
    offlineCurrentBookData,
    formatPageData(pagesId, selectedReadingLanguage),
  );
  each(result.landscapeData, pageImage => {
    promisesCollection.push(
      downloadImage(
        pageImage.url,
        generateImageName(
          id,
          selectedReadingLanguage,
          'landscape',
          pageImage.pageNo,
        ),
        'landscape',
      ),
    );
  });

  each(result.portraitData, pageImage => {
    promisesCollection.push(
      downloadImage(
        pageImage.url,
        generateImageName(
          id,
          selectedReadingLanguage,
          'portrait',
          pageImage.pageNo,
        ),
        'portrait',
      ),
    );
  });

  Promise.all(promisesCollection)
    .then(response => {
      const offlineFilePaths = {};
      const totalRes = response.length;

      response.forEach((resData, index) => {
        const screenMode = resData.screenMode;
        const fileName = resData.fileName;
        resData.promise.promise.then(
          function (value) {
            let modeData = isEmpty(offlineFilePaths[screenMode])
              ? []
              : offlineFilePaths[screenMode];
            modeData.push(fileName);

            offlineFilePaths[screenMode] = modeData;
            const fileCount = Object.values(offlineFilePaths).reduce(
              (o, m) => m.concat(o),
              [],
            ).length;

            if (fileCount === totalRes) {
              updateData({id: id, images: offlineFilePaths}, baseStore);
            }
          },
          screenMode,
          fileName,
        );
      });
    })
    .catch(function (error) {
      Alert.alert(error);
    });
};

const startDownloadingAndOfflineData = (data, store) => {
  const {currentBook} = store.bookStore;
  if (isEmpty(data)) {
    downloadImagesToLocal(store, currentBook.selectedReadingLanguage, data);
  } else {
    const offlineBookData = store.bookStore.getById(
      data.offlineData,
      currentBook.id,
    );
    if (
      true ||
      isEmpty(offlineBookData) ||
      offlineBookData.images.length - 1 !== currentBook.totalPages
    ) {
      downloadImagesToLocal(
        store,
        currentBook.selectedReadingLanguage,
        data,
        offlineBookData,
      );
    } else {
      updateData({...data}, store);
    }
  }
};

const storeDataOffline = store => {
  // storeData('offlineBookData', '');
  getData('offlineBookData').then(response => {
    const data = isEmpty(response) ? {} : JSON.parse(response);
    startDownloadingAndOfflineData(data, store);
  });
};

const formatPageData = (pages, lang) => {
  let langData = [];
  let langData1 = [];
  const sortedPages = sortBy(pages, ['pageNo']);
  each(sortedPages, val => {
    langData.push({url: val[`${lang}Portrait`], pageNo: val.pageNo});
    langData1.push({url: val[`${lang}Landscape`], pageNo: val.pageNo});
  });
  return {portraitData: langData, landscapeData: langData1};
};

const getIndexFromUrl = item => {
  const splitedValue = split(item, 'index_');
  return split(splitedValue[1], '.')[0];
};

const getOfflineSortedPageImageData = data => {
  return sortBy(data, item => [getIndexFromUrl(item)]);
};

export {storeDataOffline, formatPageData, getOfflineSortedPageImageData};
