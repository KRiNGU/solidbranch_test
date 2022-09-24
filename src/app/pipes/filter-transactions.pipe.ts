import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from 'src/models/transaction';

@Pipe({
  name: 'filterTransactions',
})
export class FilterTrancactionsPipe implements PipeTransform {
  transform(
    transactions: ITransaction[],
    filterType: string,
    limit: number
  ): ITransaction[] {
    console.log(filterType);
    let filteredTransactions = transactions;
    if (filterType) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) =>
          transaction.type.toLowerCase() === filterType.toLowerCase()
      );
    }
    return limit === 0
      ? filteredTransactions
      : filteredTransactions.slice(0, limit);
  }
}
