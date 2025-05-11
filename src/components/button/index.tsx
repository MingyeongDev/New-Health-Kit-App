import {Pressable} from 'react-native';
import {CustomButtonProps} from '../../types/CustomButtonProps';
import {colors} from '../../config/globalStyle';
import CustomText from '../text';
import {styles} from './styles';

const CustomButton = ({
  size = 'large',
  onPress,
  disabled = false,
  style,
  title,
}: CustomButtonProps) => {
  const sizeProps = {
    small: {
      height: 42,
      fontSize: 16,
    },
    medium: {
      height: 52,
      fontSize: 20,
    },
    large: {
      height: 66,
      fontSize: 20,
    },
  };

  const {height, fontSize} = sizeProps[size];
  const bgColor = disabled ? '#BBBBBB' : '#7BC36F';
  const styleProps = styles({bgColor, height});

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styleProps.container,
        pressed && !disabled && {opacity: 0.8},
        style,
      ]}>
      <CustomText size={fontSize} weight={'bold'} color={colors.white}>
        {title}
      </CustomText>
    </Pressable>
  );
};

export default CustomButton;
