import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction } from 'src/models/transaction';

export type IShuffledTransactions = {
  income: number;
  outcome: number;
  loan: number;
  investment: number;
};

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  transactions: ITransaction[];
  countedTransactions: IShuffledTransactions;
  count: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((transactions) => {
      this.transactions = transactions.transactions;
      this.countedTransactions = this.shuffleTransactions(
        transactions.transactions
      );
      let key: keyof IShuffledTransactions;
      for (key in this.countedTransactions) {
        this.count += this.countedTransactions[key];
      }
    });
  }

  private shuffleTransactions(
    transactions: ITransaction[]
  ): IShuffledTransactions {
    const result: IShuffledTransactions = {
      income: 0,
      outcome: 0,
      loan: 0,
      investment: 0,
    };
    for (const transaction of transactions) {
      result[transaction.type]++;
    }
    return result;
  }

  handleNavigate(link: string, params: object) {
    console.log(link, params);
    console.log(this.router);
    this.router.navigate([link, params]);
  }
}
