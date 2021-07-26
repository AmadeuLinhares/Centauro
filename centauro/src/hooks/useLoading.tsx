import { useContext } from 'react';
import { LoadingContext } from '../context/Loading';

interface ReturnType {
  show(): void;
  hide(): void;
}

export const useLoading = (): ReturnType => {
  const { showLoading } = useContext(LoadingContext);

  function show() {
    showLoading(true);
  }
  function hide() {
    showLoading(false);
  }

  return { show, hide };
};
