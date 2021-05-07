import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* import { AddComponent } from './Personal/add/add.component';
import { EditComponent } from './Personal/edit/edit.component';
import { ListarComponent } from './Personal/listar/listar.component'; */
import { IndexComponent } from './index/index.component'

const routes: Routes = [
  {path:'index', component:IndexComponent}
/*  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
