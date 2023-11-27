import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Platform} from 'react-native';
import {API_KEY_URL} from './environmentVars';
import {Dimensions} from 'react-native';
import RNFS from 'react-native-fs';
import Device from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';

const apiBaseURL = () => API_KEY_URL;

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert(error);
  }
};

const getData = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    Alert.alert(error);
  }
};

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

const isIosPlatform = () => Platform.OS === 'ios';

const isTablet = () => Device.isTablet();

// const isLeftSwiped = (coordinate) => {
//   isPortrait() ? coordinate
// }

// const isRightSwiped = (coordinate) => {

// }

const downloadImage = (imageURL, name, screenMode) => {
  let ext = getExtention(imageURL);
  const fileName = `/${name}.${ext}`;

  const promise = RNFS.downloadFile({
    fromUrl: imageURL,
    toFile: `${RNFS.DocumentDirectoryPath}/${name}.${ext}`,
  });

  return {promise: promise, fileName: fileName, screenMode: screenMode};
};

const getExtention = filename => {
  // To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const hasNotch = () => DeviceInfo.hasNotch();

export {
  apiBaseURL,
  getData,
  isIosPlatform,
  storeData,
  isPortrait,
  isLandscape,
  downloadImage,
  isTablet,
  hasNotch,
};
