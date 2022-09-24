import { Component } from '@angular/core';
import { IData } from 'src/models/transaction';
import * as transactions from '../transactions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'solidbranch_test';
  data: IData = JSON.parse(JSON.stringify(transactions));
}
