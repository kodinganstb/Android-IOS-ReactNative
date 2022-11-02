import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#EC2028', // Red
  // secondary: "#606d87",   // Gray

  // colors
  black: '#1E272E',
  white: '#FFFFFF',
  lightGray: '#E4E5EA',
  gray: '#747D8C',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  paddingHorizontal: 20,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
