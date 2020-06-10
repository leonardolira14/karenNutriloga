import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './shared/heder/heder.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KarenComponent } from './pages/karen/karen.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    FooterComponent,
    HomeComponent,
    KarenComponent,
    ConsultasComponent,
    FaqsComponent,
    ContactoComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
