import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from 'src/models/transaction';

@Pipe({
  name: 'filterTransactions',
})
export class FilterTrancactionsPipe implements PipeTransform {
  transform(transactions: ITransaction[], filterType: string): ITransaction[] {
    return transactions.filter(
      (transaction) =>
        transaction.type.toLowerCase() === filterType.toLowerCase()
    );
  }
}
