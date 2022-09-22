import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Vistas/login/login.module').then(m => m.LoginModule)}, 
  { path: 'home', loadChildren: () => import('./Vistas/home/home.module').then(m => m.HomeModule) },
  { path: 'quiensoy', loadChildren: () => import('./Vistas/quien-soy/quien-soy.module').then(m => m.QuienSoyModule) },
  { path: 'registro', loadChildren: () => import('./Vistas/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'chat', loadChildren: () => import('./Vistas/chat/chat.module').then(m => m.ChatModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
