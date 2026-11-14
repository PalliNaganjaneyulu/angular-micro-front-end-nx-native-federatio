
import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
    {
        path: 'dashboard',
        loadComponent: () =>
            loadRemoteModule('dashboard', './Component').then((m) => m.App),
    },
    {
        path: 'users',
        loadComponent: () =>
            loadRemoteModule('user-management', './Component').then((m) => m.App),
    },
    {
        path: 'reports',
        loadComponent: () =>
            loadRemoteModule('reports', './Component').then((m) => m.App),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
];
