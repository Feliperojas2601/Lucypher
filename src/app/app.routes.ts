import { Routes } from '@angular/router';
import { LucypherLayoutComponent } from './layouts/lucypherLayout/lucypherLayout.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: LucypherLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: '**',
                redirectTo: 'home',
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
    }
];
