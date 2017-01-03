import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from '../app.component';
import { StarWarsComponent } from '../components/star-wars/star-wars.component';

const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'starwars',
        component: StarWarsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);