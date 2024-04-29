import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');

export const deviceWidth = () => Dimensions.get('window').width;
export const deviceHeight = () => Dimensions.get('window').height;

export const scale = (scaleWidth: number) => {
  const DESIGN_WIDTH = 360;
  return Math.round(
    PixelRatio.roundToNearestPixel(scaleWidth * (width / DESIGN_WIDTH)),
  );
};

export const currencyConverter = (amount: number, withoutRp?: boolean) => {
  const _amount = amount < 0 ? 0 : amount;

  return `${withoutRp ? '' : 'Rp '}${String(_amount).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  )}`;
};

export const capitalizeEachWords = (sentences: string) => {
  let string = sentences
    ?.split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return string;
};

export const capitalizeFirstLetter = (sentences: string) => {
  return sentences.charAt(0).toUpperCase() + sentences.slice(1);
};

/**
 * @param stringDate ''
 * @param format 'YYYY-MM-DD'
 * @returns Output: string eg: 2022-10-17 00:00:00 GMT
 */

export const addPrefixFile = (path: string): string => {
  let filePath = `file://${path}`;
  return filePath;
};

export const getUrlImage = (dataHtml: string) => {
  const regex = /src=["'](https:\/\/[^"']+)["']/;
  const match = dataHtml.match(regex);

  if (match && match[1]) {
    return match[1];
  }
};
