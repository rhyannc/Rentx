import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { 
  StatusBar, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert
} from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Imput';
import * as Yup from 'yup';

import {
 Container,
 Header,
 Steps,
 Title,
 SubTitle,
 Form,
 FromTitle
} from './styles';
import { useAuth } from '../../../hooks/auth';

export function SignUpFirstStep(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation<any>();
  const {user } = useAuth();
  console.log(user);

  function handleBack() {
    navigation.goBack();    
  }

 async function handleNextStep(){
    try {

      const schema = Yup.object().shape({
        driverLicense:  Yup.string()
        .required('A CNH é obrigatória'),

        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-email válido'),

        name: Yup.string()
          .required('Nome obrigatorio')
        
        
      });

      const data = {name, email, driverLicense};  
      await schema.validate(data);
      navigation.navigate("SignUpSecondStep", {user: data} );

    } catch (error) {

      if(error instanceof Yup.ValidationError)
       {
         return Alert.alert('Opa', error.message);
       }
    }
    
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <Container>
    <Header>
      <BackButton onPress={handleBack}/>
      <Steps>
        <Bullet active/>
        <Bullet />
      </Steps>
    </Header>

    <Title>Crie sua{'\n'}conta</Title>
    <SubTitle>Faça seu cadastro de{'\n'}forma rápida </SubTitle>

    <Form>
      
      <FromTitle>1. Dados</FromTitle>
      <Input 
         iconName='user'
         placeholder='Nome'
         onChangeText={setName}
         value={name}
      />

      <Input 
         iconName='mail'
         placeholder='Email'
         keyboardType='email-address'
         autoCapitalize='none'
         onChangeText={setEmail}
         value={email}
      />

     <Input 
         iconName='phone'
         placeholder='Telefone'
         keyboardType='numeric'
         onChangeText={setDriverLicense}
         value={driverLicense}
         
      />


      <Input 
         iconName='credit-card'
         placeholder='CNH'
         keyboardType='numeric'
         onChangeText={setDriverLicense}
         value={driverLicense}
         
      />

      <Input 
         iconName='credit-card'
         placeholder='RG'
         keyboardType='numeric'
         onChangeText={setDriverLicense}
         value={driverLicense}
         
      />

     <Input 
         iconName='credit-card'
         placeholder='CPF'
         keyboardType='numeric'
         onChangeText={setDriverLicense}
         value={driverLicense}
         
      />

      

    </Form>

    <Button 
      title='Proximo' 
      onPress={handleNextStep}
    />

  </Container>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}