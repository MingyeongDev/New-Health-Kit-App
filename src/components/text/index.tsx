import React from 'react';
import {Text, TextStyle} from 'react-native';
import {CustomTextProps} from '../../types/CustomTextProps';
import {colors} from '../../config/globalStyle';

const CustomText = ({
  size = 14,
  weight = 'medium',
  color = colors.gray,
  children,
}: CustomTextProps) => {
  const textStyle: TextStyle = {
    fontSize: size,
    fontWeight: weight,
    color: color,
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default CustomText;
