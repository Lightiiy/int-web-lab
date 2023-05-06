import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardComponent } from "src/app/shared/compononents/card/card.component";

@NgModule({
  declarations: [
    LandingPageComponent,
    CardComponent
  ],
  imports: [ CommonModule
  ],
  providers: [],
})
export class LandingPageModule{ }