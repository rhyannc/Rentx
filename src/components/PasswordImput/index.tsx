import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import {
 Container,
 IconContainer,
 InputText
} from './styles';


interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string;
}

export function PasswordImput({
    iconName, 
    value,
    ...rest
    }: Props ){
     const [ isPasswordVisible, setIsPasswordVisible] = useState(true);

     function handlePasswordvisibleChange() {
        setIsPasswordVisible(prevState => !prevState); 
     }

     const [isFocused, setIsFocused] = useState(false);
     const [isFilled, setIsFilled] = useState(false);

     const theme = useTheme();

     function handleInputFocus() {  
         setIsFocused(true);     
     }

     function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);      
    }

     

  return (
  <Container >
     <IconContainer isFocused={isFocused}>
      <Feather 
         name={iconName}
         size={24}
         color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
         />
     </IconContainer>  
     
     <InputText 
        secureTextEntry={isPasswordVisible}   
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        {...rest} 
     />

     <BorderlessButton onPress={handlePasswordvisibleChange}>
       <IconContainer isFocused={isFocused}>
          <Feather 
             name={isPasswordVisible ? 'eye' : 'eye-off'}
             size={24}
             color={theme.colors.text_detail}
             
          />
       </IconContainer>    
     </BorderlessButton>

  </Container>
  );
}