import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReducerInterface } from '../../store';
import { SearchInterface } from '../../store/modules/search/types';

import { Card } from '../../components/Card';

import {
  Container,
  Main,
  SearchHeader,
  FoundItems,
  Filter,
  SelectedOption,
  CardsContainer,
  ArrowIcon,
  Options,
} from './styles';
import { FormattMoney } from '../../util/FormatMoney';
import { searchRequest } from '../../store/modules/search/actions';

interface FilterInterface {
  label: string;
  value: 'lowestPrice' | 'highestPrice' | 'highestDiscount' | 'relevance';
}
interface OptionsFilterInterface {
  options: FilterInterface[];
}

export const SearchPag: React.FC = () => {
  const dispatch = useDispatch();

  const search = useSelector<ReducerInterface, SearchInterface[]>(
    state => state.search,
  );

  const optionsFilter: OptionsFilterInterface = {
    options: [
      {
        label: 'Relevância',
        value: 'relevance',
      },
      {
        label: 'Menor preço',
        value: 'lowestPrice',
      },
      {
        label: 'Maior preço',
        value: 'highestPrice',
      },
      {
        label: 'Maior desconto',
        value: 'highestDiscount',
      },
    ],
  };

  const [showOptionsFilter, setShowOptionsFilter] = useState(false);
  // eslint-disable-next-line prettier/prettier
  const [selectedFilter, setSelectedFilter] = useState({} as FilterInterface);

  function choiceFilter(filter: FilterInterface): void {
    dispatch(
      searchRequest({
        filter: filter.value,
        productName: '',
      }),
    );
    setSelectedFilter(filter);

    setShowOptionsFilter(false);
  }

  return (
    <Container>
      <Main>
        <SearchHeader>
          <FoundItems>
            <p>
              <span>Econtramos </span>
              {search.length} produtos
            </p>
          </FoundItems>
          <Filter>
            <SelectedOption>
              <input type="text" value={selectedFilter.label} disabled />
              <button
                type="button"
                onClick={() => setShowOptionsFilter(!showOptionsFilter)}
              >
                <ArrowIcon show={showOptionsFilter} />
              </button>
            </SelectedOption>
            <Options show={showOptionsFilter}>
              {optionsFilter.options.map(val => (
                <button
                  type="button"
                  key={val.value}
                  onClick={() => choiceFilter(val)}
                >
                  <p>{val.label}</p>
                </button>
              ))}
            </Options>
          </Filter>
        </SearchHeader>
        <CardsContainer>
          {search.length > 0 &&
            search.map(prod => (
              <Card
                key={prod.id}
                colors={prod.colors}
                discount={prod.discount}
                freeShipping={prod.freeShipping}
                id={prod.id}
                image={prod.image}
                name={prod.name}
                oldPrice={prod.oldPrice ?? 0}
                price={prod.price ?? 0}
                formattedOldPrice={FormattMoney(prod.oldPrice ?? 0)}
                formattedPrice={FormattMoney(prod.price ?? 0)}
                reviews={prod.reviews}
                rate={prod.rate}
              />
            ))}
        </CardsContainer>
      </Main>
    </Container>
  );
};
