import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// design screen size
const designBaseWidth = 430;
const designBaseHeight = 932;

const scale = (size: number) => {
	return (width / designBaseWidth) * size;
};

const verticalScale = (size: number) => (height / designBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const paddingIOS = Platform.OS === 'ios' ? 'padding' : '';

export { scale, verticalScale, moderateScale, paddingIOS };
