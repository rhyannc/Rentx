import React, {useState, useEffect} from "react";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import * as Yup from 'yup';




import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";

import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/CategorySelectButton";



import { PlanSelect } from "../PlanSelect";
import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles';


interface FormData{
    name: string;
    amount: string;
}



export function Register(){
    
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen]  = useState(false);

    const { user } = useAuth(); /** PEGA A ID DO USUARIO  */



    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
});

    type NavigationProps = { navigate:(screen:string) => void; }
    const navigation = useNavigation<NavigationProps>();


    function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true); 
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false); 
    }

    
    /*     EXIBE OS DADOS DO ASYNC ESTORAGE
    useEffect(() => {
        async function loadData(){ const data = await  AsyncStorage.getItem('@gofinances:transactions');
       console.log(JSON.parse(data!));
    }
    loadData();  
    },[]);*/
    

    /*     DELETA TODOS OS DADOS DO ASYNC ESTORAGE
    useEffect(() => {
        async function removeall(){ await  AsyncStorage.removeItem('@gofinances:transactions');       
    }
    removeall();  
    },[]);*/
    

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>

              <Fields>  
  

                 

               <CategorySelectButton title={category.name}  onPress={handleOpenSelectCategoryModal}/>
                
              </Fields> 


                
                
            </Form>    
             
             <Modal visible={categoryModalOpen}>
                 <PlanSelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                 />
             </Modal>

        </Container>
     </TouchableWithoutFeedback>    

    );
}