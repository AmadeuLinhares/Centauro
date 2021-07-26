import React, { useState, useEffect } from 'react';
import { FormattMoney } from '../../util/FormatMoney';
import { api } from '../../service/api';
import { Card } from '../../components/Card';

import {
  BannerContainer,
  Banner,
  PromotionContainer,
  Promotions,
  Title,
  ContainerCards,
} from './styles';

import BannerPhoto from '../../assets/banner.png';
import { useLoading } from '../../hooks/useLoading';

interface PromotionInterface {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rate: number;
  reviews: number;
  freeShipping: boolean;
  discount: number;
  id: string;
  colors: number;
}

interface DataResponse {
  data: PromotionInterface[];
}

export const Home: React.FC = () => {
  // eslint-disable-next-line prettier/prettier
  const [promotions, setPromotions] = useState([] as PromotionInterface[]);
  const { show, hide } = useLoading();
  async function loadPromotions(): Promise<void> {
    try {
      show();
      const { data }: DataResponse = await api.get('/promotions');
      if (data.length) {
        setPromotions(data);
      }
    } catch (err) {
      return;
    } finally {
      hide();
    }
  }

  useEffect(() => {
    loadPromotions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BannerContainer>
        <Banner>
          <img src={BannerPhoto} alt="Banner" />
        </Banner>
      </BannerContainer>
      <PromotionContainer>
        <Promotions>
          <Title>
            <h1>Promoções em destaque</h1>
          </Title>
          <ContainerCards>
            {!!promotions.length &&
              promotions.map(val => (
                <Card
                  key={val.id}
                  colors={val.colors}
                  discount={val.discount}
                  freeShipping={val.freeShipping}
                  id={val.id}
                  image={val.image}
                  name={val.name}
                  oldPrice={val.oldPrice ?? 0}
                  price={val.price ?? 0}
                  formattedOldPrice={FormattMoney(val.oldPrice)}
                  formattedPrice={FormattMoney(val.price)}
                  reviews={val.reviews}
                  rate={val.rate}
                />
              ))}
          </ContainerCards>
        </Promotions>
      </PromotionContainer>
    </>
  );
};
