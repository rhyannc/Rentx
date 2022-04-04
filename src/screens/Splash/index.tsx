import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, { 
    useAnimatedStyle, 
    useSharedValue, 
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import {
 Container
} from './styles';


export function Splash(){
    const splashAnimation = useSharedValue(0);

    const navigation = useNavigation<any>();

    const brandStyles = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [1, .3, 0], Extrapolate.CLAMP),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [0, -50],
                    Extrapolate.CLAMP
                    )
                }
            ],
        }
    });

    const logoStyles = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1], Extrapolate.CLAMP),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [-50, 0],
                    Extrapolate.CLAMP
                    )
                }
            ],
        }
    });

    function startApp(){
        navigation.navigate('SignIn')
    }

    useEffect(( )=> {
         splashAnimation.value = withTiming(
             50, 
             { duration: 1000 },
             () =>{
                 'worklet' /** volta para a thred de view*/
                 runOnJS(startApp)();
                 }
         );      
    },[]);


  return (
  <Container>
      <Animated.View style={[brandStyles, {position: 'absolute'}]}>
          <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyles, {position: 'absolute'}]}>
          <LogoSvg width={180} height={20} />
      </Animated.View>

  </Container>
  );
}