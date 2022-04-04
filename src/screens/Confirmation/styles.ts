import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.header};
   padding-top: 96px;
`;

export const Content = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;

   padding-bottom: 80px;
`;
export const Title = styled.Text`
   font-family: ${({ theme }) => theme.font.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};

    margin-top: 40px;
`;
export const Mnessage = styled.Text`
   font-family: ${({ theme }) => theme.font.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    line-height: ${RFValue(25)}px;;
    text-align: center;
    margin-top: 16px;
`;

 
 export const Footer = styled.View`
    width:  100%;
    align-items: center;
    margin: 80px 0;
    
`;

 