import {TextStyle} from 'react-native';

export type CustomButtonProps = {
  size?: 'small' | 'medium' | 'large';
  onPress: () => void;
  disabled?: boolean;
  style?: TextStyle;
  title: string;
};
