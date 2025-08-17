import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { unauthGuard } from './core/guards/unauth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        loadChildren: () => import('./modules/videos/videos.module').then(mod => mod.VideosModule)
    },
    {
        path: 'auth',
        canActivate: [unauthGuard],
        component: AuthLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
    }
];
