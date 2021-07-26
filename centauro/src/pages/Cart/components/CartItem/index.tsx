import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addQuantityCart,
  removeFromCart,
  removeQuantityCart,
} from '../../../../store/modules/cart/actions';

import { FormattMoney } from '../../../../util/FormatMoney';
import {
  Container,
  Title,
  Quantity,
  AddProduct,
  RemoveProduct,
  UnitPrice,
  TotalPrice,
  MainPrice,
  OldPrice,
} from './styles';

interface CartItemInterface {
  name: string;
  image: string;
  quantity: number;
  price: number;
  oldPrice: number;
  id: string;
}

export const CartItem: React.FC<CartItemInterface> = ({
  image,
  name,
  oldPrice,
  price,
  quantity,
  id,
}) => {
  const dispatch = useDispatch();

  function removeQuantity(productId: string) {
    dispatch(removeQuantityCart(productId));
  }
  function removeProduct(productId: string) {
    dispatch(removeFromCart(productId));
  }

  function addQuantity(productId: string) {
    dispatch(addQuantityCart(productId));
  }
  return (
    <Container>
      <Title>
        <img src={image} alt="product" />
        <p>{name}</p>
      </Title>
      <Quantity>
        <AddProduct>
          <button type="button" onClick={() => removeQuantity(id)}>
            -
          </button>
          <div>
            <p>{quantity}</p>
          </div>
          <button type="button" onClick={() => addQuantity(id)}>
            +
          </button>
        </AddProduct>
        <RemoveProduct>
          <button type="button" onClick={() => removeProduct(id)}>
            X Remover
          </button>
        </RemoveProduct>
      </Quantity>
      <UnitPrice>
        <MainPrice>
          <p>{FormattMoney(price)}</p>
        </MainPrice>
        <OldPrice>
          <p>{FormattMoney(oldPrice)}</p>
        </OldPrice>
      </UnitPrice>
      <TotalPrice>
        <MainPrice>
          <p>{FormattMoney(price * quantity)}</p>
        </MainPrice>
        <OldPrice>
          <p>{FormattMoney(oldPrice * quantity)}</p>
        </OldPrice>
      </TotalPrice>
    </Container>
  );
};
