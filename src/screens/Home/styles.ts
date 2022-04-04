import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../dtos/CarDTO';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width:  100%;
    height: 113px;
    background-color: ${({ theme }) => theme.colors.header};  
    justify-content:  flex-end;
    padding: 32px 24px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;

export const TotalCars = styled.Text`
    font-family: ${({ theme }) => theme.font.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(
    FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>)
.attrs({
    contentContainerStyle: {
        padding: 12
    },
    showsVerticalScrollIndicator: false
})``;

export const MyCarsbutton = styled(RectButton)`
    width: 60px ;
    height: 60px;
    
    background-color: ${({theme}) => theme.colors.main};
    border-radius: 30px;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 22px;
    right: 22px;
`;