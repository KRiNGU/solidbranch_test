import { Filter } from 'src/app/components/navigator/navigator.component';
import { Type } from 'src/models/transaction';

export const randomAmount = () => Math.random() * 4000;

export const numberToFilter = (num: string): Filter => {
  switch (num) {
    case '0':
      return 'income';
    case '1':
      return 'outcome';
    case '2':
      return 'loan';
    case '3':
      return 'investment';
    default:
      return '';
  }
};
