import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton }  from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';


import { getAccessoryIcon } from '../../utils/getAccessoryIcons';


import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 Acessories,
 Footer,
 RentalPeriod,
 CaledarIcon,
 DateInfo,
 DateTitle,
 DateValue,
 RentalPrice,
 RentalPriceLabel,
 RentalPriceDetails,
 RentalPriceQuota,
 RentalPriceTotal
} from './styles';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../Services/api';
import { Alert } from 'react-native';


interface Params{
  car: CarDTO
  dates: string[];
}
interface RentalPeriod{
  start: string;
  end: string;
}

export function ShedulingDetails(){
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme =            useTheme();
  const navigation =       useNavigation<any>();
  const route =            useRoute();
  const { car, dates } =   route.params as Params;

  const rentTotal = Number(dates.length * car.price);

  async function handleConfrimRental() {
    setLoading(true);
    console.log('ta aqui');

    const schedulesByCar = await api.get(`/cars/${car.id}`); //_bycars
    console.log('api');
    console.log(schedulesByCar);

    const unavailable_detes = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate:   format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    });

     api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_detes
    })
    .then(()  => navigation.navigate("Confrimation", {
                                                      nextScreenRoute: 'Home',
                                                      title:  'Carro alugado!',
                                                      message: `Agora voc?? s?? precisa ir\n at?? a concession??ria da RENTX\n  pegar seu autom??vel.`
                                                     })
          )
    .catch(() => {
      setLoading(false);
      Alert.alert('N??o foi poss??vel confirmar o agendamento')
    })    
  }

  function handleBack(){
    navigation.goBack();
  }

  useEffect(() => {
      setRentalPeriod({
        start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        end:   format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
      })

  },[])

  return (
  <Container>
      <Header>
          <BackButton onPress={handleBack} />
      </Header>
      
      <CarImages>
          <ImageSlider 
            imagesUrl={car.photos} 
         />
      </CarImages>  
      <Content>
         <Details>
           <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
           </Description>

           <Rent>
             <Period>{car.period}</Period>
             <Price>R$ {car.price}</Price>
           </Rent>
         </Details>

         <Acessories> 
           {
             car.accessories.map(accessory =>(
              <Accessory
                 key={accessory.type}   
                 name={accessory.name} 
                 icon={getAccessoryIcon(accessory.type)} />
             ))
           } 
         </Acessories>  

        <RentalPeriod>
          <CaledarIcon>
              <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
              />
          </CaledarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
        

        <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
              />

        <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod> 
      
      <RentalPrice>
        <RentalPriceLabel>TOTAL</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>R$ {car.price} x{dates.length} d??arias</RentalPriceQuota>
          <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
        </RentalPriceDetails>
      </RentalPrice>
      </Content> 

      <Footer>
          <Button 
            title="Alugar Agora" 
            color={theme.colors.success} 
            onPress={handleConfrimRental} 
            enabled={!loading}
            loading={loading}
          />
      </Footer>
  </Container>
  );
}