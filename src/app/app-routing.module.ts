import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ConfBasComponent } from './conf-bas/conf-bas.component';
import { DeleteCuenComponent } from './conf-bas/delete-cuen/delete-cuen.component';




const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'ConfiguracionBasica', component: ConfBasComponent },
  { path: 'ConfiguracionBasica', children: [
    { path: 'EliminarWit', component: DeleteCuenComponent }
  ]},
 
];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
