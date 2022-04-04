import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList, FlatListProps, Platform } from 'react-native';


export const Container = styled.View`
   
   padding: 0 24px;
   background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-top: ${getStatusBarHeight() + 31}px;
`;

export const Steps = styled.View`

   flex-direction: row;   
   align-items: center;
`;

export const Title = styled.Text`
    font-family:    ${({ theme }) => theme.font.secondary_600};
    font-size:      ${RFValue(40)}px;
    color:          ${({ theme }) => theme.colors.title};
    
    margin-top: 60px;
    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_400};
    font-size:      ${RFValue(15)}px;
    color:          ${({ theme }) => theme.colors.text};
    line-height: ${RFValue(25)}px; 

`;

export const Form= styled.View`
   width: 100%;
   margin: 64px 0;
   margin-bottom: 16px;
`;

export const FromTitle = styled.Text`
font-family:    ${({ theme }) => theme.font.secondary_600};
font-size:      ${RFValue(20)}px;
color:          ${({ theme }) => theme.colors.title};
margin-bottom: 24px;
`;

