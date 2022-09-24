import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FilterTrancactionsPipe } from './pipes/filter-transactions.pipe';

@NgModule({
  declarations: [AppComponent, NavigatorComponent, FilterTrancactionsPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
