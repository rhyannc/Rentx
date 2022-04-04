import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {CarDetails} from '../screens/CarDetails';
import {Scheduling} from '../screens/Scheduling';
import {ShedulingDetails} from '../screens/ShedulingDetails';
import {Confirmation} from '../screens/Confirmation';
import {MyCars} from '../screens/MyCars';


const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
    return(
    <Navigator  initialRouteName="Home"
    screenOptions={{
      headerShown: false   
    }}
    >
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