import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './component/login/login.component';
import { PdfFormComponent } from './component/pdf-form/pdf-form.component';

const routes: Routes = [{ path: 'form', component: FormComponent },
{ path: 'login', component: LoginComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'pdf', component: PdfFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
