import {flow, makeObservable, observable, action, computed} from 'mobx';

import BaseStore from './base_store';
import {isEmpty} from 'lodash';
import {
  addBookToContinueReadingUrl,
  availableBooksUrl,
  bookDetailsUrl,
  bookReviewAddUrl,
  bookReviewsUrl,
  bookTotalReviewsAndRatingsUrl,
  continueReadingBookDetailsUrl,
  continueReadingBooksListUrl,
  purchasedBooksUrl,
  updateBookLanguageToContinueReadingUrl,
  updateContinueReadingBookPageUrl,
  userAddedReviewUrl,
} from '../networks/api_endpoints';
import Book from '../entities/book';
import BookPage from '../entities/book_page';
import {Alert} from 'react-native';
import axios from 'axios';
import {getData, storeData} from '../lib/utils';
import UserBookReview from '../entities/user_book_review';
class BookStore extends BaseStore {
  @observable currentBook;
  @observable availableBooks = [];
  @observable purchasedBooks = [];
  @observable continueReadingBooks = [];

  @observable offlineAvailableBooks = [];
  @observable offlinePurchasedBooks = [];
  @observable offlineContinueReadingBooks = [];
  @observable offlineData = [];

  @observable reviewObj = {};
  @observable reviewMessage = '';
  @observable visibleModal = false;
  @observable showToast = false;
  @observable bookReadingSwipeDirection = null;
  @observable showReadingActionIcons = true;

  // fetching objects
  @observable isUserLogOutUsed = false;
  @observable fetchingBooks = false;
  @observable isUserBookReviewFetched = false;
  @observable tapIntervalId = null;
  @observable firstOnScreen = true;

  @observable showActionIconIntervalId = true;
  @observable showActionIcon = true;

  constructor(rootStore) {
    super(rootStore, Book);

    makeObservable(this);
  }

  @action
  setIsUserLogOutUsed(store, value) {
    store.isUserLogOutUsed = value;
  }

  @action
  initializeReviewObj(reviewInfo = {}) {
    this.reviewObj = new UserBookReview(
      {
        rating: reviewInfo.rating || '',
        description: reviewInfo.description || '',
      },
      this,
    );
  }

  @computed
  get appStore() {
    return this.rootStore.appStore;
  }

  @computed
  get getAvailableBooks() {
    return this.appStore.isInternetConnected
      ? this.availableBooks
      : this.offlineAvailableBooks;
  }

  @computed
  get getPurchasedBooks() {
    return this.appStore.isInternetConnected
      ? this.purchasedBooks
      : this.offlinePurchasedBooks;
  }

  @computed
  get getContinueReadingBooks() {
    return this.appStore.isInternetConnected
      ? this.continueReadingBooks
      : this.offlineContinueReadingBooks;
  }

  @computed
  get hasPreviousPage() {
    return this.totalPageCompleted - 1 >= 1;
  }

  @computed
  get totalPageCompleted() {
    return this.currentBook.totalPageCompleted;
  }

  @computed
  get hasNextPage() {
    return (
      this.currentBook.totalPageCompleted + 1 <= this.currentBook.totalPages
    );
  }

  formatePages(pages) {
    if (isEmpty(pages)) {
      return;
    }

    return pages.map(
      (page, index) =>
        new BookPage({
          englishPortrait: page.english?.portrait || page.englishPortrait,
          englishLandscape: page.english?.landScape || page.englishLandscape,
          hindiPortrait: page.hindi?.portrait || page.hindiPortrait,
          hindiLandscape: page.hindi?.landScape || page.hindiLandscape,
          hinglishPortrait: page.hinglish?.portrait || page.hinglishPortrait,
          hinglishLandscape: page.hinglish?.landScape || page.hinglishLandscape,
          bookId: page.bookId,
          pageNo: page.pageNo,
          id: page._id || page.id,
          store: this,
        }),
    );
  }

  formateContinueReadingPages(pages, language, bookId) {
    if (isEmpty(pages)) {
      return;
    }

    return pages.map(
      (page, index) =>
        new BookPage({
          [`${language}Portrait`]: page.portrait,
          [`${language}Landscape`]: page.landScape,
          bookId: page.bookId,
          pageNo: page.pageNo,
          id: page._id || page.id,
          store: this,
        }),
    );
  }

  formateBookData(book) {
    return {
      id: book._id || book.id,
      title: book.title,
      description: book.description,
      rating: book.rating,
      english: book.english,
      hindi: book.hindi,
      hinglish: book.hinglish,
      pagesId: this.formatePages(book.pagesId),
      coverImage: book.coverImage,
      author: book.author,
      totalRatings: book.totalRatings,
      totalReviews: book.totalReviews,
      reviews: book.reviews,
      createdAt: book.createdAt,
      totalPages: book.totalPages,
      category: book.category,
      bookUrl: book.websiteUrl,
    };
  }

  parseBooksData(books) {
    return books.map(data => this.formateBookData(data));
  }

  formatContinueReadingData(bookData) {
    const continueReadingBookId =
      bookData?._id || bookData.continueReadingBookId;
    const bookId = bookData.bookId?._id || bookData.bookId?.id || bookData.id;
    const requestedBook = this.getById(this.getPurchasedBooks, bookId);
    // const langBookData = this.getById(langData, bookId);

    const data = {
      continueReadingBookId: continueReadingBookId,
      totalPageCompleted: bookData.pageno - 1 || bookData.totalPageCompleted,
      totalPages: bookData.totalpages - 1 || bookData.totalPages,
      selectedReadingLanguage:
        bookData?.language || bookData?.selectedReadingLanguage,
    };

    if (!isEmpty(requestedBook)) {
      requestedBook.update(data);
    }
    return requestedBook;
  }

  @action
  setIsInternetConnected(val) {
    this.appStore.updateAttributeValue('isInternetConnected', val);

    if (!val) {
      this.restoreOfflineData();
    }
  }

  @action
  updateDataOnBackToApp() {
    if (
      isEmpty(this.offlineAvailableBooks) &&
      isEmpty(this.offlineAvailableBooks) &&
      isEmpty(this.continueReadingBooks)
    ) {
      this.restoreOfflineData();
    }

    if (this.appStore.isInternetConnected) {
      getData('offlinePageData').then(res => {
        if (!isEmpty(res)) {
          JSON.parse(res)?.forEach(data => {
            this.updatePagesAPI(data.id, data.pageNo);
          });
        }
      });
    }
  }

  @flow
  *updatePagesAPI(bookId, pageNo) {
    const response = yield this.sendApiCall(
      updateContinueReadingBookPageUrl(),
      {
        bookId: bookId,
        pageno: pageNo,
      },
    );

    if (response?.status === 401) {
      this.isUserLogOut = true;
    } else {
      if (response?.status === 200) {
        this.updateTotalPagesCompleted(pageNo);
        storeData('offlinePageData', null);
      }
    }
  }

  @action
  updateBooksData(
    availableBooksData,
    purchasedBooksData,
    continueReadingBooksData,
  ) {
    if (availableBooksData?.status === 200) {
      this.updateAttributeValue('availableBooks', []);
      this.parseBooksData(availableBooksData.data.data).forEach(element => {
        this.availableBooks.push(new Book(element, this));
      });
    }

    if (purchasedBooksData?.status === 200) {
      this.updateAttributeValue('purchasedBooks', []);
      this.parseBooksData(purchasedBooksData.data.data).forEach(element => {
        this.purchasedBooks.push(new Book(element, this));
      });
    }

    if (continueReadingBooksData?.status === 200) {
      this.updateAttributeValue('continueReadingBooks', []);
      continueReadingBooksData.data.data.forEach(element => {
        const data = this.formatContinueReadingData(element);
        if (!isEmpty(data)) {
          this.continueReadingBooks.push(data);
        }
      });
    }
    this.updateAttributeValue('fetchingBooks', false);
  }

  restoreOfflineData() {
    getData('offlineBookData').then(response => {
      if (!isEmpty(response)) {
        const data = JSON.parse(response);
        data.availableBooks?.forEach(value => {
          this.offlineAvailableBooks.push(
            new Book(this.formateBookData(value)),
          );
        });

        data.continueReadingBooks?.forEach(value => {
          const result = this.formatContinueReadingData(value);
          if (!isEmpty(result)) {
            this.offlineContinueReadingBooks.push(result);
          }
        });

        data.purchasedBooks?.forEach(value => {
          this.offlinePurchasedBooks.push(
            new Book(this.formateBookData(value)),
          );
        });

        this.offlineData = JSON.stringify(data.offlineData);
      }
    });
    getData('accessToken').then(response => {
      if (response) {
        this.rootStore.userStore.setCurrentUser(response);
      }
    });
  }

  @action
  setCurrentBook(bookId) {
    this.currentBook = this.getById(this.getContinueReadingBooks, bookId);
  }

  @flow
  *fetchBooks() {
    if (this.appStore.isInternetConnected) {
      this.updateAttributeValue('fetchingBooks', false);
      try {
        if (!this.fetchingBooks) {
          this.updateAttributeValue('fetchingBooks', true);

          // if (this.firstOnScreen) {
          //   this.updateAttributeValue('availableBooks', []);
          //   this.updateAttributeValue('purchasedBooks', []);
          //   this.updateAttributeValue('continueReadingBooksData', []);
          //   // this.availableBooks = [];
          //   // this.purchasedBooks = [];
          //   // this.continueReadingBooksData = [];
          // }

          let request = [];
          request.push(yield this.client.get(availableBooksUrl()));
          request.push(yield this.client.get(purchasedBooksUrl()));
          request.push(yield this.client.get(continueReadingBooksListUrl()));

          Promise.all(request)
            .then(data => {
              this.updateAttributeValue('fetchingBooks', false);
              this.updateAttributeValue('firstOnScreen', false);
              this.updateBooksData(data[0], data[1], data[2]);
            })
            .catch(function (a) {
              Alert.alert(a);
              this.updateAttributeValue('fetchingBooks', false);
            });
        }
      } catch (e) {
        this.updateAttributeValue('fetchingBooks', false);
        if (e.response.status === 401) {
          this.isUserLogOut = true;
        } else {
          Alert.alert(e);
        }
      }
    } else {
      if (!this.fetchingBooks) {
        this.restoreOfflineData();
      }
    }
  }

  formateBookReviewsData(reviews) {
    return reviews.map(review => ({
      id: review._id || review.id,
      bookId: review.bookId,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      description: review.description,
      name: review.name,
      rating: review.rating,
    }));
  }

  @action
  updateTotalPagesCompleted(bookId, pageNo) {
    let book = null;
    // book = this.getById(this.purchasedBooks, bookId);
    // if (book) {
    //   book.totalPageCompleted = pageNo;
    // }

    // book = this.getById(this.continueReadingBooks, bookId);
    // if (book) {
    //   book.totalPageCompleted = pageNo;
    // }

    book = this.getById(this.offlineContinueReadingBooks, bookId);
    if (book) {
      book.totalPageCompleted = pageNo;
    }

    book = this.getById(this.offlinePurchasedBooks, bookId);
    if (book) {
      book.totalPageCompleted = pageNo;
    }
  }

  @action
  setOfflineBookToCurrent(bookId) {
    this.currentBook = this.getById(this.offlinePurchasedBooks, bookId);
  }

  @action
  updateSelectedBookData(
    bookId,
    details,
    totalReviewAndRating,
    bookReviews,
    userAddedReview,
  ) {
    const data = {
      totalRatings: totalReviewAndRating.data.rating,
      totalReviews: totalReviewAndRating.data.reviews,
      rating: details.data.data.rating,
      totalPages: details.data.data.pagesId.length - 1,
      reviews: this.formateBookReviewsData(bookReviews.data.data),
    };

    const finalData = {...details.data.data, ...data};
    const requestedBook = this.getById(this.purchasedBooks, bookId);

    const updatedData = {
      ...requestedBook.objectEntities,
      ...this.formateBookData(finalData),
    };
    requestedBook.update(updatedData);

    this.currentBook = requestedBook;
    this.updateBookReview(userAddedReview.data.data);
  }

  @flow
  *fetchBook(bookId) {
    if (this.appStore.isInternetConnected) {
      axios
        .all([
          yield this.client.get(bookDetailsUrl(bookId)),
          yield this.client.get(bookTotalReviewsAndRatingsUrl(bookId)),
          yield this.client.get(bookReviewsUrl(bookId)),
          yield this.sendApiCall(userAddedReviewUrl(), {bookId: bookId}),
        ])
        .then(
          axios.spread(
            (firstResponse, secondResponse, thirdResponse, fourthResponse) => {
              this.updateSelectedBookData(
                bookId,
                firstResponse,
                secondResponse,
                thirdResponse,
                fourthResponse,
              );
            },
          ),
        )
        .catch(function (a) {
          Alert.alert(a);
        });
    } else {
      this.setOfflineBookToCurrent(bookId);
    }
  }

  @flow
  *addBookReview() {
    if (this.appStore.isInternetConnected) {
      const response = yield this.sendApiCall(bookReviewAddUrl(), {
        bookId: this.currentBook.id,
        rating: this.reviewObj.rating,
        description: this.reviewObj.description,
      });

      if (response?.status === 201) {
        this.reviewObj = this.reviewObj;
        this.reviewMessage = response.data.message;
      }
    }
  }

  // @action
  // storeSelectedLangInLocal(bookId, language) {
  //   getData('continueReadingData').then(res => {
  //     let result = [];
  //     if (isEmpty(res)) {
  //       result.push({id: bookId, language: language});
  //     } else {
  //       result = JSON.parse(res);
  //       const bookData = this.getById(result, bookId);
  //       if (isEmpty(bookData)) {
  //         result.push({id: bookId, language: language});
  //       } else {
  //         bookData.language = language;
  //       }
  //     }

  //     storeData('continueReadingData', JSON.stringify(result));
  //   });
  // }

  @action
  storePageInfoToLocal(bookId, pageNo) {
    getData('offlinePageData').then(res => {
      let result = [];
      if (isEmpty(res)) {
        result.push({id: bookId, pageNo: pageNo});
      } else {
        result = JSON.parse(res);
        const bookData = this.getById(result, bookId);
        if (isEmpty(bookData)) {
          result.push({id: bookId, pageNo: pageNo});
        } else {
          bookData.pageNo = pageNo;
        }
      }

      storeData('offlinePageData', JSON.stringify(result));
    });
  }

  @flow
  *addNewBookToContinueReading(language) {
    if (this.appStore.isInternetConnected) {
      const requestedBook = this.getById(
        this.continueReadingBooks,
        this.currentBook.id,
      );
      if (isEmpty(requestedBook)) {
        const response = yield this.sendApiCall(addBookToContinueReadingUrl(), {
          bookId: this.currentBook.id,
          language: language,
        });

        if (response?.status === 201) {
          // this.storeSelectedLangInLocal(this.currentBook.id, language);
          this.reviewMessage = response.data.message;
        }
      } else {
        // this.storeSelectedLangInLocal(this.currentBook.id, language);
      }

      this.currentBook.update({selectedReadingLanguage: language});
    }
  }

  @flow
  *updateLanguageBookToContinueReading(language) {
    if (this.appStore.isInternetConnected) {
      const requestedBook = this.getById(
        this.continueReadingBooks,
        this.currentBook.id,
      );

      if (isEmpty(requestedBook)) {
        const response = yield this.sendApiCall(
          updateBookLanguageToContinueReadingUrl(),
          {
            bookId: this.currentBook.id,
            language: language,
          },
        );

        if (response?.status === 201) {
          // this.storeSelectedLangInLocal(this.currentBook.id, language);
          this.reviewMessage = response.data.message;
        }
      } else {
        // this.storeSelectedLangInLocal(this.currentBook.id, language);
      }

      this.currentBook.update({selectedReadingLanguage: language});
    }
  }

  @flow
  *updateNextPage(completedPage) {
    if (this.appStore.isInternetConnected) {
      // if (this.hasNextPage) {
      const completedPages = completedPage + 1;
      const response = yield this.sendApiCall(
        updateContinueReadingBookPageUrl(),
        {
          bookId: this.currentBook.id,
          pageno: completedPages,
        },
      );

      if (response?.status === 200) {
        this.updateTotalPagesCompleted(this.currentBook.id, completedPage);
      }
      // }
    } else {
      if (this.hasNextPage) {
        const completedPages = this.currentBook.totalPageCompleted + 1;
        this.storePageInfoToLocal(this.currentBook.id, completedPages);
        this.updateTotalPagesCompleted(this.currentBook.id, completedPages);
      }
    }
  }

  @flow
  *updatePreviousPage(completedPage) {
    if (this.appStore.isInternetConnected) {
      // if (this.hasPreviousPage) {
      const completedPages = completedPage + 1;
      const response = yield this.sendApiCall(
        updateContinueReadingBookPageUrl(),
        {
          bookId: this.currentBook.id,
          pageno: completedPages,
        },
      );

      if (response?.status === 401) {
        this.isUserLogOut = true;
      } else {
        if (response?.status === 200) {
          this.updateTotalPagesCompleted(this.currentBook.id, completedPage);
        }
      }
      // }
    } else {
      if (this.hasPreviousPage) {
        const completedPages = this.currentBook.totalPageCompleted - 1;
        this.storePageInfoToLocal(this.currentBook.id, completedPages);
        this.updateTotalPagesCompleted(this.currentBook.id, completedPages);
      }
    }
  }

  formatUserBookReviewData(data) {
    return {
      id: data._id,
      bookId: data.bookId,
      rating: data.rating,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }

  @action
  updateBookReview(data) {
    if (isEmpty(data)) {
      return;
    }

    this.reviewObj = new UserBookReview(this.formatUserBookReviewData(data));
  }

  @action
  updateContinueReadingBookPageDetails(book, bookData) {
    book.pagesId = this.formateContinueReadingPages(
      bookData.data?.data?.pages,
      book.selectedReadingLanguage,
      book.id,
    );
    this.updateAttributeValue('fetchingBooks', false);
  }

  @flow
  *fetchContinueReadingBookDetails(bookId) {
    this.updateAttributeValue('fetchingBooks', false);
    if (this.appStore.isInternetConnected) {
      const requestedBook = this.getById(this.continueReadingBooks, bookId);
      if (isEmpty(requestedBook.pagesId)) {
        this.updateAttributeValue('fetchingBooks', true);
        try {
          axios
            .all([
              yield this.client.get(
                continueReadingBookDetailsUrl(
                  requestedBook.continueReadingBookId,
                ),
              ),
            ])
            .then(
              axios.spread(firstResponse => {
                this.updateContinueReadingBookPageDetails(
                  requestedBook,
                  firstResponse,
                );
              }),
            )
            .catch(function (a) {
              Alert.alert(a);
            });
        } catch (e) {
          Alert.alert(e);
        }
      }
    } else {
      this.setOfflineBookToCurrent(bookId);
    }
  }
}

export default BookStore;
