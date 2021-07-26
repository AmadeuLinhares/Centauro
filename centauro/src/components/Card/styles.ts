import styled from 'styled-components';

interface ShowButton {
  show: boolean;
}
interface isFreeShipping {
  isFree: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<ShowButton>`
  padding: 30px 28px;
  transition: all 0.3s ease 0.15s;
  box-shadow: ${({ show }) => show && '0px 12px 10px rgba(0, 0, 0, 0.2)'};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 208px;
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  min-height: 445px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Discount = styled.div`
  width: 31px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.red_500};
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.red_500};
  }
`;
export const Picture = styled.div`
  img {
    width: 152px;
    height: 152px;
  }
`;
// eslint-disable-next-line prettier/prettier
export const FreeShipping = styled.div<isFreeShipping>`
  margin-top: 20px;
  background: ${({ theme, isFree }) =>
    isFree ? theme.colors.gray_800 : theme.colors.white};
  border-radius: 2px;
  height: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Informations = styled.div``;
//
export const Name = styled.div`
  height: 36px;
  overflow: hidden;
  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black_800};
  }
`;
export const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const RealPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.black_800};
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }
`;
export const OldPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 20px;
    text-decoration-line: line-through;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray_800};
  }
`;
//
export const Ranking = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Starts = styled.div`
  svg {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
export const Assessments = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
  span {
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray_800};
  }
`;
//
export const Colors = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  div {
    padding: 4px;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray_300};
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.gray_800};
    }
  }
`;
// eslint-disable-next-line prettier/prettier
export const ContainerButton = styled.div<ShowButton>`
  transition: all 0.3s ease 0.15s;
  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};
  justify-content: center;
  align-items: center;
`;
