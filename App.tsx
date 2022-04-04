import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'; 
import {AppProvider} from './src/hooks';
import{ 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium 
} from '@expo-google-fonts/inter';
import{ 
  Archivo_400Regular, 
  Archivo_500Medium, 
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import { Routes } from './src/routes';

import theme from './src/styles/theme';


export default function App() {
  /**CARREGA AS FONTES */
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium, 
    Archivo_600SemiBold
  });

  /** VERIFICA SE AS FONTES JA FORAM CARREGADAS OU SEGURA NA TELA DE SPLASH */
  if(!fontsLoaded){
    return <AppLoading />
  }


  return  (
    <ThemeProvider theme={theme}>
       <AppProvider>
         <Routes />
      </AppProvider>
     </ThemeProvider>   
  )
  }


