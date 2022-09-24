import { Filter } from 'src/components/navigator/navigator.component';
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

export const filterToNumber = (filter: Type): number | null => {
  switch (filter) {
    case 'income':
      return 0;
    case 'outcome':
      return 1;
    case 'loan':
      return 2;
    case 'investment':
      return 3;
    default:
      return null;
  }
};
