/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { GlobalContainer } from '../../components/Container';

interface ShowMenu {
  show: boolean | string;
}

export const Container = styled(GlobalContainer)`
  margin-top: 24px;
`;

export const Main = styled.div`
  width: 940px;
  margin: 0 auto;
`;
export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const FoundItems = styled.div`
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black_800};
  span {
    font-weight: normal;
  }
  p {
    font-weight: bold;
  }
`;
export const Filter = styled.div`
  width: 150px;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 8px;
  position: relative;
`;
export const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input[type='text'] {
    border: none;
    outline: none;
    width: 80%;
    &:disabled {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const Options = styled.div<ShowMenu>`
  display: ${({ show }) => (show ? 'grid' : 'none')};
  position: absolute;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  left: 0px;
  top: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  row-gap: 5px;
  div {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.black_800};
      padding: 8px;
    }
  }
`;

export const ArrowIcon = styled(IoIosArrowDown).attrs<ShowMenu>(
  ({ theme }) => ({
    color: theme.colors.gray_800,
    size: 14,
  }),
)<ShowMenu>`
  ${({ show }) =>
    show
      ? css`
          transition: 0.5s;
          transform: rotate(180deg);
        `
      : css`
          transition: 0.5s;
          transform: rotate(0deg);
        `}
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 32px;
`;
