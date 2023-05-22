import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private api: ApiService){}

  title = 'evilla';

  ngOnInit() {
    this.api.getHouseOfferingsFromApi$().subscribe( test => console.log(test));
    this.api.getAuthorsFromApi$().subscribe( test => console.log(test));
  }
}
