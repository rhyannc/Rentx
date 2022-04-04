import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { Load } from '../../components/Load';

import { Car } from '../../components/Car';
import {Car as ModelCar } from '../../database/model/Car';
import { api } from '../../Services/api';

import {
 Container,
 Header,
 Title,
 SubTitle,
 Content,
 Appointments,
 AppointmentTitle,
 AppointmentsQuantity,
 CarWapper,
 CarFooter,
 CarFooterTitle,
 CarFooterPeriod,
 CarFooterDate
} from './styles';



interface DataProps{
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export function MyCars(){
    const [cars, setCars] = useState<DataProps[]>([]);
    const [loading, setLoading] = useState(true);
    const screenIsFocus = useIsFocused();

    const theme = useTheme();
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
      }

    useEffect(() => {
        async function fetchCars(){
            try {
             
               const response = await api.get('/rentals');

               //vai formatar as datas recebidas da api
               const dataFormatted = response.data.map((data: DataProps)=> {
                 return{
                //   id: data:id,
                   car: data.car,
                   start_date: format(parseISO(data.start_date), 'dd/MM/yyyy'),
                   end_date: format(parseISO(data.end_date), 'dd/MM/yyyy')
                 }
               })
               
               setCars(dataFormatted);
            } catch (error) {
                console.log(error);
            }     
            finally{
               setLoading(false); 
            }
        }
        fetchCars();
    }, [screenIsFocus]);

  return (
  <Container>
      <Header>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>

          <BackButton           
          onPress={handleBack} 
          color={theme.colors.shape}
          />

          <Title>
              Seus agendamentos,{'\n'}
              estão aqui.
          </Title>
          <SubTitle>Conforto, seguraça e praticidade</SubTitle>  
              
      </Header>
    { loading ? <Load /> : 
      <Content>
        <Appointments>
          <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>  

        <FlatList 
        data={cars}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CarWapper>
            <Car data={item.car} />
            <CarFooter>
                <CarFooterTitle>Periodo</CarFooterTitle>
                <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign 
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                </CarFooterPeriod>
            </CarFooter>
          </CarWapper> 
        )}
      />
      </Content>
    }
    

  </Container>
  );
}