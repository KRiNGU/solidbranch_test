import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/models/basic';
import { Type } from 'src/models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  @Input() name: string = 'Income';
  @Input() type: Type;
  @Input() count: number = 10;
  @Input() link: ILink;

  constructor() {}

  ngOnInit(): void {}
}
