import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Accessory } from '../../components/Accessory';

import { Button } from '../../components/Button';

import { BackButton }  from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {getAccessoryIcon} from '../../utils/getAccessoryIcons';


import { Feather } from '@expo/vector-icons';

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
 About,
 Acessories,
 Footer
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';

interface Params{
   car :CarDTO
}

export function CarDetails(){
  const navigation =  useNavigation<any>();
  const route =       useRoute();
  const { car } =     route.params as Params;
  console.log(car.photos);

  function handleConfrimRental() {
    navigation.navigate("Scheduling", { car })
  }

  function handleBack(){
    navigation.goBack();
  }

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
             <Price>R${car.price}</Price>
           </Rent>
         </Details>

         <Acessories> 
           {
             car.accessories.map(accessory =>(
               <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
               />
             ))
           }
 
         </Acessories>  

         <About>
         {car.about}
         </About>

      </Content> 

      <Footer>
          <Button title="Escolher período do aluguel" onPress={handleConfrimRental}/>
      </Footer>
  </Container>
  );
}