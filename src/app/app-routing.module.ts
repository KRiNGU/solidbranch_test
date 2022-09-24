import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from './components/navigator/navigator.component';

const routes: Routes = [
  { path: 'navigator', component: NavigatorComponent },
  { path: '', redirectTo: 'navigator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
