import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/componentes/home/home.component';
import { Page01Component } from "./components/componentes/page01/page01.component";
import { Page02Component } from "./components/componentes/page02/page02.component";
import { Page03Component } from "./components/componentes/page03/page03.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'page01', component: Page01Component },
    { path: 'page02', component: Page02Component },
    { path: 'page03', component: Page03Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
  
  
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);