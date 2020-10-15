import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { BusinessDetail, NavigationRoute, RootStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import Api from '../../api';
import { DetailContainer, ImageStyled } from './detail.styles';

const DetailScreen: React.FC<StackScreenProps<RootStackParamList, NavigationRoute.DETAIL>> = ({ route }) => {
  const { id } = route.params;
  if (!id) {
    return null;
  }

  const [detail, setDetail] = useState<BusinessDetail | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const getDetail = (id: string) => {
    Api.get<BusinessDetail>(`/${id}`)
      .then((response) => {
        setDetail(response);
      })
      .catch((err) => {
        if ('error' in err) {
          setErrorMessage(err.error.description);
        } else {
          setErrorMessage(err.toString());
        }
      });
  };

  useEffect(() => {
    getDetail(id);
  }, []);

  if (!detail) {
    return null;
  }

  return (
    <DetailContainer>
      <Text>{errorMessage}</Text>
      <Text>{detail.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={detail.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <ImageStyled source={{ uri: item }} />}
      />
    </DetailContainer>
  );
};

export default DetailScreen;
