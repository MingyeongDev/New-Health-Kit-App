import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export const navigate = (name: string, params?: object) =>
  navigationRef.current?.navigate(name, params);
