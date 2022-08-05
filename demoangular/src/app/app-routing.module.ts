import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { EmplistComponent } from './emplist/emplist.component';

// decalre all the links and components here which are required in routing
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mycomponent', component: MycomponentComponent},
  {path: 'emplist', component: EmplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
