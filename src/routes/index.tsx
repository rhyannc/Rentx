import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { StackRoutes } from './stack.routes';

export function Routes(){
  const {user} = useAuth();

  return (
    <NavigationContainer>      
      { user ? <AppTabRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  );
}
/** <StackRoutes />*/