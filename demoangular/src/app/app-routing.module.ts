import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// decalre all the links and components here which are required in routing
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
