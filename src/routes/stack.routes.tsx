import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {CarDetails} from '../screens/CarDetails';
import {Scheduling} from '../screens/Scheduling';
import {ShedulingDetails} from '../screens/ShedulingDetails';
import {Confirmation} from '../screens/Confirmation';
import {MyCars} from '../screens/MyCars';
import {Splash} from '../screens/Splash';

import {SignIn} from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';


const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
    return(
    <Navigator  initialRouteName="Splash"
    screenOptions={{
      headerShown: false   
    }}
    >
        <Screen 
          name="Splash"
          component={Splash}
        />

        <Screen 
          name="SignIn"
          component={SignIn}
        />
        <Screen 
          name="SignUpFirstStep"
          component={SignUpFirstStep}
        />
        <Screen 
          name="SignUpSecondStep"
          component={SignUpSecondStep}
        />
        <Screen 
          name="Home"
          component={Home}
          options={{ /** garante que no ios nao vai volta para tela anteriro */
            gestureEnabled: false,            
          }}
        />        
        <Screen 
          name="CarDetails"
          component={CarDetails}
        />

        <Screen 
          name="Scheduling"
          component={Scheduling}
        />

        <Screen 
          name="ShedulingDetails"
          component={ShedulingDetails}
        />

        <Screen 
          name="Confirmation"
          component={Confirmation}
        />

        <Screen 
          name="MyCars"
          component={MyCars}
        />
    </Navigator>
    )
}