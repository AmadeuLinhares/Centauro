import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading';
import { Button } from '../../components/Button';
import { CartItem } from './components/CartItem';
import {
  Container,
  Main,
  ContainerProducts,
  ContainerResume,
  Resume,
  Title,
  Informations,
  Total,
  FinalizeOrder,
  ContainerEmpityState,
  ImageEmpity,
  InfoEmpity,
} from './styles';
import { ReducerInterface } from '../../store';
import { CartInterface } from '../../store/modules/cart/types';

import LogoEmpity from '../../assets/empty_state.png';
import { api } from '../../service/api';

export const Cart: React.FC = () => {
  const history = useHistory();
  const cart = useSelector<ReducerInterface, CartInterface[]>(
    state => state.cart,
  );
  const { show, hide } = useLoading();

  function renderProductsInCart() {
    async function completeOrder() {
      const body = cart.map(val => ({
        id: val.id,
        quantity: val.quantity,
      }));
      try {
        show();
        api.post('/cart', {
          items: body,
        });
      } catch (err) {
        return;
      } finally {
        hide();
      }
    }

    return (
      <Main>
        <ContainerProducts>
          {cart.map(c => (
            <CartItem
              key={c.id}
              image={c.image}
              name={c.name}
              oldPrice={c.oldPrice}
              price={c.price}
              quantity={c.quantity}
              id={c.id}
            />
          ))}
        </ContainerProducts>
        <ContainerResume>
          <Resume>
            <Title>
              <h1>Resumo do pedido</h1>
              <h1>___</h1>
            </Title>
            <Informations>
              <div>
                <h2>Subtotal</h2>
                <p>R$ 160,49</p>
              </div>
              <div>
                <h2>Desconto</h2>
                <p>R$ 160,49</p>
              </div>
              <div>
                <h2>Você está economizando:</h2>
                <p>R$ 160,49</p>
              </div>
            </Informations>
            <Total>
              <h1>Total:</h1>
              <h1>R$ 160,49</h1>
            </Total>
            <FinalizeOrder>
              <Button
                width="176px"
                height="48px"
                onClick={() => completeOrder()}
              >
                Concluir pedido
              </Button>
            </FinalizeOrder>
          </Resume>
        </ContainerResume>
      </Main>
    );
  }

  function renderEmpityState() {
    return (
      <ContainerEmpityState>
        <ImageEmpity>
          <img src={LogoEmpity} alt="emptityState" />
        </ImageEmpity>
        <InfoEmpity>
          <h1>Seu carrinho está vazio...</h1>
          <p>
            São milhares de produtos para você escolher Escolha seus produtos e
            adicione em seu carrinho
          </p>
          <Button width="201px" height="48px" onClick={() => history.push('/')}>
            Comece a comprar
          </Button>
        </InfoEmpity>
      </ContainerEmpityState>
    );
  }

  return (
    <Container>
      {cart.length > 0 ? renderProductsInCart() : renderEmpityState()}
    </Container>
  );
};
