import { Component, Input, OnInit } from '@angular/core';
import { Seller } from '../../models/seller';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input()
  seller!: Seller;

  constructor() { }

  ngOnInit(): void {
  }

}
