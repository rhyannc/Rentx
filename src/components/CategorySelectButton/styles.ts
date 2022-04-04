import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton).attrs({
   activeOpacity :0.7
})`
    background-color:       ${({ theme }) => theme.colors.main};
    border-radius:          5px;
    flex-direction:         row;
    justify-content:        space-between;
    align-items:            center;
    padding: 18px 16px;
    margin-top: 35px;
    width: 100%;
`;

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.font.primary_400};
    font-size: ${RFValue(14)}px;
    color:       ${({ theme }) => theme.colors.shape_dark};
    
    
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color:       ${({ theme }) => theme.colors.text};
`;

