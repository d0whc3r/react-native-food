import React from 'react';
import { Text } from 'react-native';
import { Business } from '../../types';
import { BusinessContainer, BusinessImage, TitleText } from './business-detail.styles';

interface BusinessDetailProps {
  detail: Business;
}

const BusinessDetail: React.FC<BusinessDetailProps> = ({ detail }) => {
  const noImage = 'https://www.allianceplast.com/wp-content/uploads/no-image-300x300.png';
  const { rating, review_count, image_url } = detail;
  return (
    <BusinessContainer>
      <BusinessImage source={{ uri: image_url || noImage }} />
      <TitleText>{detail.name}</TitleText>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </BusinessContainer>
  );
};

export default BusinessDetail;
