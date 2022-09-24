import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IData } from 'src/models/transaction';
import { NavigatorComponent } from '../components/navigator/navigator.component';
import * as transactions from '../transactions.json';
import { SummaryComponent } from '../components/summary/summary.component';

const data: IData = JSON.parse(JSON.stringify(transactions));

const routes: Routes = [
  {
    path: 'navigator',
    component: NavigatorComponent,
    data: { transactions: data.data },
  },
  { path: '', component: SummaryComponent, data: { transactions: data.data } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
