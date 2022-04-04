import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';

import { 
  StatusBar, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordImput } from '../../../components/PasswordImput';
import { api } from '../../../Services/api';
import { Confirmation } from '../../Confirmation';

import {
 Container,
 Header,
 Steps,
 Title,
 SubTitle,
 Form,
 FromTitle
} from './styles';

interface Params {
  user: {
        name: string;
        email: string;
        driverLicense: string;
  }
}
  
export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation<any>();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params; 


  function  handleBack() {
    navigation.goBack();    
  }

  async function handleRegister() {
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a configrmação');
    }

    if(password != passwordConfirm){
      return Alert.alert('As senha não são iguais.');
    }
    
    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password 
    })
    .then(() => {
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'SignIn',
        title:  'Conta criada!',
        message: `Agora é so fazer login\n e aproveitar.`
       });
    })
    .catch(() => {      
      Alert.alert('Opa', 'Não foi posível cadastrar');
    })


   
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <Container>
    <Header>
      <BackButton onPress={handleBack}/>
      <Steps>
        <Bullet />
        <Bullet active/>
      </Steps>
    </Header>

    <Title>Crie sua{'\n'}conta</Title>
    <SubTitle>Faça seu cadastro de{'\n'}forma rápida </SubTitle>

    <Form>
      <FromTitle>2. Senhas</FromTitle>
      <PasswordImput 
         iconName='lock'         
         placeholder='Senha'
         onChangeText={setPassword}
         value={password}
      />

      <PasswordImput 
         iconName='lock'        
         placeholder='Repetir senha'
         onChangeText={setPasswordConfirm}
         value={passwordConfirm}
      />
    </Form>

    <Button 
      color={theme.colors.success}
      title='Cadastrar'
      onPress={handleRegister}
      />

  </Container>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}