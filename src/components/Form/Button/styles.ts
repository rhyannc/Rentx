import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export const Container = styled(RectButton)`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.shape};
    
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.font.primary_500} ;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text}; 
`;

