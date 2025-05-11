import {StyleSheet} from 'react-native';

export const styles = (typeProps: {bgColor: string; height: number}) =>
  StyleSheet.create({
    container: {
      backgroundColor: typeProps.bgColor,
      height: typeProps.height,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
