import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IData, ITransaction, Type } from 'src/models/transaction';
import { numberToFilter } from 'src/utils/utils';

export type Filter = Type | '';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  type: Filter = '';

  transactions: ITransaction[];

  // You can change this variable to control how many transactions will be shown in table.
  // If limit will be 0, than the table will show all filtered transactions.
  limit: number = 5;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((transactions) => {
      this.transactions = transactions.transactions;
    });
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.type = numberToFilter(param.get('tab') as string);
    });
  }
}
