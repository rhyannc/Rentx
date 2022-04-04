import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  StatusBar, 
  KeyboardAvoidingView, 
  
  Keyboard, 
  Alert ,
  Modal
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


import { Button } from '../../components/Button';
import { Input } from '../../components/Imput';
import { PasswordImput } from '../../components/PasswordImput';

import theme from '../../styles/theme';
import { useAuth } from '../../hooks/auth';

import * as Yup from 'yup';

import {
 Container,
 Header,
 Title,
 SubTitle,
 Form,
 Footer
} from './styles';
import { PlanSelect } from '../PlanSelect';
import { CategorySelectButton } from '../../components/CategorySelectButton';


export function SignIn(){
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  const {signIn, } = useAuth();

  function handleNewAccount(){    
    navigation.navigate("SignUpFirstStep");
  }

  const [categoryModalOpen, setCategoryModalOpen]  = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
});

  function handleOpenSelectPlanModal(){
    setCategoryModalOpen(true);
  }

  
  function handleCloseSelectPlanModal(){
    setCategoryModalOpen(false);
  }

  async function handleSignIn(){
     try{
          const schema = Yup.object().shape({
            email: Yup.string()
            .required('E-mail obrigatorio'),
             password:  Yup.string()
            .required('A senha é obrigatória')
          });
 
          await schema.validate({ email, password });
          
          //FAZ O LOGIN
          signIn({email: email, password: password});

         
        }catch(error)
         {
           if(error instanceof Yup.ValidationError)
            {
              return Alert.alert('Opa', error.message);
            }else{
             Alert.alert('Erro na autenticação', 'verifique as credenciais');
            }
         }
  }


  return (
  <KeyboardAvoidingView behavior="position" enabled>  
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
   <Container>
     <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Header>
      <Title>
        Estamos{'\n'}
        quase lá.
      </Title>
      <SubTitle>Faça seu login para começar {'\n'}
       uma experiência incrível.</SubTitle>
    </Header>
    
    <Form>
      <Input  
          iconName="mail" 
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={setEmail}
          value={email}
         />

      <PasswordImput  
          iconName="lock" 
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={setPassword}
          value={password}
         />
    </Form>

    <Footer>
      <Button
          title="Login"
          onPress={handleSignIn }
          enabled={true}
          loading={false}
      /> 

      <Button
          title="Criar Conta"
          color={theme.colors.background_secondary}
          light
          onPress={handleNewAccount}
          enabled={true}
          loading={false}
      />    
          </Footer>



  </Container>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}