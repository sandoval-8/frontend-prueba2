import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppGuardianGuard } from './guardian/app-guardian.guard';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AppGuardianGuard] }, //Le pasamos el guardian a la ruta.
  { path: 'login', component: LoginComponent },
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
