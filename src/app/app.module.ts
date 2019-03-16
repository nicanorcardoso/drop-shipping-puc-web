import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID   } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule} from '@angular/forms';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersService } from './customers-list/customers.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule

  ],
  providers: [
    CustomersService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }