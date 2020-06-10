import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KarenComponent } from './pages/karen/karen.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'karen',
    component: KarenComponent
  },
  {
    path: 'consultas-retos',
    component: ConsultasComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
