import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TodasComponent } from './components/todas/todas.component';
import { IndividualComponent } from './components/individual/individual.component';
import { CarterasComponent } from './components/carteras/carteras.component';
import { MonederosComponent } from './components/monederos/monederos.component';
import { OtrosComponent } from './components/otros/otros.component';
import { ExclusivoComponent } from './components/exclusivo/exclusivo.component';


export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'individual/:objeto', component: IndividualComponent},
    {path: 'todas/:categoria', component: TodasComponent},
    {path: 'carteras/:categoria', component: CarterasComponent},
    {path: 'monederos/:categoria', component: MonederosComponent},
    {path: 'otros/:categoria', component: OtrosComponent},
    {path: 'exclusivo/:titulo', component: ExclusivoComponent},



];
