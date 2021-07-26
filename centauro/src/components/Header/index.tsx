import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdShoppingCart } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  ContainerHeader,
  Logo,
  Search,
  Cart,
  Count,
  ContainerOptions,
  Option,
} from './styles';
import LogoImg from '../../assets/logo.png';
import { GlobalContainer } from '../Container';
import { searchRequest } from '../../store/modules/search/actions';
import { ReducerInterface } from '../../store';
import { CartInterface } from '../../store/modules/cart/types';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector<ReducerInterface, CartInterface[]>(
    state => state.cart,
  );
  const [searchBar, setSearchBar] = useState('');

  const options = [
    {
      title: 'Esportes',
      href: '/',
      selected: false,
    },
    {
      title: 'Homens',
      href: '/',
      selected: false,
    },
    {
      title: 'Mulheres',
      href: '/',
      selected: false,
    },
    {
      title: 'Crianças',
      href: '/',
      selected: false,
    },
    {
      title: 'Roupas',
      href: '/',
      selected: false,
    },
    {
      title: 'Acessórios',
      href: '/',
      selected: false,
    },
    {
      title: 'Equipamentos',
      href: '/',
      selected: false,
    },
    {
      title: 'Marcas',
      href: '/',
      selected: false,
    },
    {
      title: 'Suplementos',
      href: '/',
      selected: false,
    },
    {
      title: 'Outlet',
      href: '/',
      selected: true,
    },
  ];

  function searchProducts() {
    dispatch(
      searchRequest({
        filter: 'relevance',
        productName: searchBar,
      }),
    );
    history.push('/search');
  }

  return (
    <>
      <Container>
        <ContainerHeader>
          <Logo
            src={LogoImg}
            alt="logo"
            width={140}
            height={20}
            onClick={() => history.push('/')}
          />
          <Search>
            <input
              type="text"
              onChange={val => setSearchBar(val.target.value)}
              value={searchBar}
            />
            <button
              type="button"
              onClick={() => searchProducts()}
              disabled={searchBar === ''}
            >
              <BiSearch size={20} />
            </button>
          </Search>
          <Cart onClick={() => history.push('/cart')}>
            {cart.length > 0 && (
              <Count>
                <p>{cart.length}</p>
              </Count>
            )}

            <MdShoppingCart size={28} />
          </Cart>
        </ContainerHeader>
      </Container>
      <GlobalContainer>
        <ContainerOptions>
          {options.map(opt => (
            <Option type="button" key={opt.title} selected={opt.selected}>
              {opt.title}
            </Option>
          ))}
        </ContainerOptions>
      </GlobalContainer>
    </>
  );
};
