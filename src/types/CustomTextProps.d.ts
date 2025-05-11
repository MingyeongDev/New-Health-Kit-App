import {TextStyle} from 'react-native';

export type CustomTextProps = {
  size?: number;
  weight?: TextStyle['fontWeight'];
  color?: string;
  children: React.ReactNode;
};
