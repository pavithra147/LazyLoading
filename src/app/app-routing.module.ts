import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  //For lazy loading no need to import any component in the app.module.ts

const routes: Routes = [
  {path:'admin',                                                           //for lazy loading we configuring route for admin module for that lazy loading syntax uses  "path" and "loadchildren" followed by function that uses the browser's built-in import('..."") for dynamic imports
  loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule) //here in then block  like "AdminModule" you can have any name
},
{
  path:'user',
  loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
