
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
    background-color: ${({ theme }) => theme.colors.success};
`;

export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showsVerticalScrollIndicator: false 
})``;

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 36px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_500};
    font-size:      ${RFValue(10)}px;
    color:          ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_500};
    font-size:      ${RFValue(25)}px;
    color:          ${({ theme }) => theme.colors.title};
    text-transform: uppercase;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_500};
    font-size:      ${RFValue(10)}px;
    color:          ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;`;

export const Price = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_500};
    font-size:      ${RFValue(25)}px;
    color:          ${({ theme }) => theme.colors.main};
    text-transform: uppercase;
`;


export const About = styled.Text`
    font-family:    ${({ theme }) => theme.font.primary_400};
    font-size:      ${RFValue(14)}px;
    color:          ${({ theme }) => theme.colors.text};
    text-align: justify;
    margin-top: 23px;
    line-height: 20px;
`;

export const Acessories = styled.View`
    width: 100%;
    
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
    
`;