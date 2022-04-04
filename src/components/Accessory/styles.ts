import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`

  min-width: 26%;
  flex: 1;

  margin-right: 8px;
  margin-bottom: 8px;
  /** */

   width: 109px;
   height: 92px;

   justify-content: center;
   align-items: center;

   background-color: ${({ theme }) => theme.colors.background_primary};

   padding: 16px;
   margin-bottom: 8px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.font.primary_500};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text};
`;

