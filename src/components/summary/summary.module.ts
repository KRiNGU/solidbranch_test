import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent, TransactionComponent],
  imports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class SummaryModule {}
