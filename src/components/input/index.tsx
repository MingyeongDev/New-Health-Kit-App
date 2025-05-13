import React from 'react';
import {TextInput} from 'react-native';
import {CustomTextInputProps} from '../../types/CustomTextInputProps';
import {styles} from './styles';

const CustomTextInput = ({placeholder}: CustomTextInputProps) => {
  return <TextInput style={styles.container} placeholder={placeholder} />;
};

export default CustomTextInput;
