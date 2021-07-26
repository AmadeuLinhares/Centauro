export const FormattMoney = (val: number): string => {
  if (!Number.isNaN(val)) {
    return val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  return 'R$ 0,00';
};
