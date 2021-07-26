import styled from 'styled-components';
import { GlobalContainer } from '../../components/Container';

export const Container = styled(GlobalContainer)`
  padding-top: 32px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 90px;
`;
export const ContainerProducts = styled.div`
  display: grid;
  row-gap: 16px;
  grid-auto-rows: min-content;
  overflow-y: scroll;
  max-height: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
export const ContainerResume = styled.div`
  width: 368px;
  height: 450px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  box-sizing: border-box;
  border-radius: 4px;
`;
export const Resume = styled.div`
  padding: 48px 24px;
  display: grid;
  row-gap: 24px;
`;
export const Title = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  grid-auto-rows: min-content;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black_900};
  }
`;
export const Informations = styled.div`
  display: grid;
  row-gap: 16px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.black_800};
    }
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.black_800};
    }
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  width: 320px;
  height: 74px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  box-sizing: border-box;
  border-radius: 4px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.black_800};
  }
`;
export const FinalizeOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerEmpityState = styled.div`
  width: 629px;
  height: 296px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;
  padding: 64px;
  display: flex;
  margin: 0 auto;
`;
export const ImageEmpity = styled.div`
  margin-right: 48px;
  img {
    width: 140px;
    height: 140px;
  }
`;
export const InfoEmpity = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 16px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.black_900};
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.black_900};
    width: 313px;
    height: 40px;
  }
`;
