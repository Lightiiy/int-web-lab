import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CardComponent } from './shared/components/card/card.component';
import { SearchPageComponent } from './modules/search-page/search-page.component';
import { HousesService } from './shared/services/offers.service';
import { SearchService } from './shared/services/search.service';
import { AddOfferComponent } from './modules/add-offer/add-offer.component';
import { OfferComponent } from './shared/components/offer/offer.component';
import { BusinessCardComponent } from './shared/components/business-card/business-card.component';
import { ApiService } from './shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    LandingPageComponent,
    SearchPageComponent,
    AddOfferComponent,
    OfferComponent,
    BusinessCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [HousesService, SearchService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
