export type Type = 'income' | 'outcome' | 'loan' | 'investment';

export interface IData {
  total: number;
  data: ITransaction[];
}

export interface ITransaction {
  type: Type;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
