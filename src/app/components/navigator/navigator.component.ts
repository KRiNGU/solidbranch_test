import { Component, Input, OnInit } from '@angular/core';
import { IData, ITransaction, Type } from 'src/models/transaction';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  type: Type = 'income';
  @Input() transactions: ITransaction[];
}
