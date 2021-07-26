import React, { useState } from 'react';

import { BsStarFill, BsStar } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import {
  Container,
  Header,
  Discount,
  Picture,
  Informations,
  Name,
  Price,
  RealPrice,
  OldPrice,
  Ranking,
  Starts,
  Assessments,
  Colors,
  ContainerButton,
  FreeShipping,
} from './styles';
import { addCartRequest } from '../../store/modules/cart/actions';

interface PromotionInterface {
  name: string;
  image: string;
  formattedPrice: string;
  formattedOldPrice: string;
  price: number;
  oldPrice: number;
  rate?: number;
  reviews: number;
  freeShipping: boolean;
  discount: number;
  id: string;
  colors: number;
  isAdded?: boolean;
}

export const Card: React.FC<PromotionInterface> = ({
  name,
  image,
  price,
  oldPrice,
  rate,
  reviews,
  freeShipping,
  discount,
  id,
  colors,
  isAdded,
  formattedPrice,
  formattedOldPrice,
}) => {
  const dispatch = useDispatch();
  const [mouseIn, setMouseIn] = useState(false);

  function adicionarCart() {
    dispatch(
      addCartRequest({
        name,
        image,
        price,
        oldPrice,
        formattedPrice,
        formattedOldPrice,
        id,
        quantity: 1,
      }),
    );
  }

  function rankingProduct() {
    switch (rate) {
      case 1: {
        return (
          <>
            <BsStarFill size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
          </>
        );
      }
      case 2: {
        return (
          <>
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
          </>
        );
      }
      case 3: {
        return (
          <>
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
          </>
        );
      }
      case 4: {
        return (
          <>
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
          </>
        );
      }
      case 5: {
        return (
          <>
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
            <BsStarFill size={13} color="#E30000" />
          </>
        );
      }
      default: {
        return (
          <>
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
            <BsStar size={13} color="#E30000" />
          </>
        );
      }
    }
  }

  return (
    <Container
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      show={mouseIn}
    >
      <Header>
        {!!discount && (
          <Discount>
            <span>{discount}%</span>
          </Discount>
        )}
      </Header>
      <Picture>
        <img src={image} alt="product" />

        <FreeShipping isFree={freeShipping}>
          {freeShipping && <p>Frete Grátis</p>}
        </FreeShipping>
      </Picture>
      <Informations>
        <Name>
          <h1>{name}</h1>
        </Name>
        <Price>
          <RealPrice>
            <p>{formattedOldPrice}</p>
          </RealPrice>
          <OldPrice>
            <p>{formattedPrice}</p>
          </OldPrice>
        </Price>
        <Ranking>
          <Starts>{rankingProduct()}</Starts>
          <Assessments>
            <span>({reviews})</span>
          </Assessments>
        </Ranking>
        <Colors>
          <div>
            <p>
              {colors} {colors > 1 ? 'cores' : 'cor'}
            </p>
          </div>
        </Colors>
      </Informations>
      <ContainerButton show={isAdded || mouseIn}>
        <Button width="100%" onClick={() => adicionarCart()} disabled={isAdded}>
          {isAdded ? 'Adicionado' : 'Adicionar'}
        </Button>
      </ContainerButton>
    </Container>
  );
};
