import React from 'react';
import LottieView from 'lottie-react-native';
import loadanimated from '../../assets/load_animated.json';

import {
 Container
} from './styles';

export function LoadAnimation(){
  return (
  <Container>
      <LottieView
      source={loadanimated}
      style={{ height: 200 }}
      resizeMode="contain"  /** Garante tamhno  */
      autoPlay
      loop
     />
  </Container>
  );
}