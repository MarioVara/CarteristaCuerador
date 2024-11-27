import { Routes } from '@angular/router';
import path from 'path';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'contacto', component: ContactoComponent},
];
