import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  //Login path -- dashboard component
  {
    path:'',component:LoginComponent
  },
  //dashboard
  {
    path:'Dashboard',component: DashBoardComponent
    
  },
  {
    path:'Register', component:RegisterComponent
  },
  {
    path:'transaction', component:TransactionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
