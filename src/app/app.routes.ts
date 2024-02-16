import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CryptoComponent } from './crypto/crypto.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  }, 
  {
    path: 'crypto/:name',
    component: CryptoComponent,
  }, 
  {
    path: '**',
    redirectTo: 'home'
  },
];
