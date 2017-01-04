import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { StarWarsComponent } from '../components/star-wars/star-wars.component';
import { NavResolver } from '../resolvers/nav.resolver';

const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'starwars',
        component: StarWarsComponent,
        resolve: {
          navList: NavResolver
        }
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