import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  height: 96px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  box-sizing: border-box;
  border-radius: 4px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 64px;
    height: 64px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.black_800};
    margin-left: 15px;
    width: 176px;
  }
`;
// ======= Add quantity =========
export const Quantity = styled.div``;
export const AddProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 20px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray_300};
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    box-sizing: border-box;
    border-radius: 0px 2px 2px 0px;
    font-style: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black_900};
    font-size: 14px;
    line-height: 100%;
  }

  div {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    p {
      font-style: normal;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.black_900};
      font-size: 14px;
    }
  }
`;
export const RemoveProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  button {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_800};
  }
`;
// ======= Add quantity =========
export const UnitPrice = styled.div`
  width: 124px;
`;
export const TotalPrice = styled.div`
  width: 124px;
`;
export const MainPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black_800};
  }
`;
export const OldPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
