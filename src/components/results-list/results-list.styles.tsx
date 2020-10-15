import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Business } from '../../types';

export const ResultContainer = styled.View`
  margin: 0 0 0 10px;
`;

export const FlatListStyled = styled(FlatList as new () => FlatList<Business>)`
  margin-left: -10px;
`;

export const ResultTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: normal;
`;
