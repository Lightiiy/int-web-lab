import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/compononents/navbar/navbar.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { CardComponent } from './shared/compononents/card/card.component';
import { SearchPageComponent } from './modules/search-page/search-page.component';
import { HousesService } from './shared/services/offers.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    LandingPageComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [ HousesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
