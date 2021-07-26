import styled from 'styled-components';
import { GlobalContainer } from '../../components/Container';

export const BannerContainer = styled(GlobalContainer)`
  min-height: 581px;
  background: ${({ theme }) => theme.colors.gray_300};
`;
export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 24px;
  img {
    width: 1197px;
    height: 249px;
  }
`;
export const PromotionContainer = styled(GlobalContainer)`
  margin-top: -15%;
`;
export const Promotions = styled.div`
  display: grid;
  row-gap: 32px;
  width: auto;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.black_800};
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & > div {
    margin-right: 32px;
    margin-bottom: 32px;
  }
`;
