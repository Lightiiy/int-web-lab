import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ProductCard } from '../../models/product-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input()
  housing!: ProductCard;

  @Input()
  variant: string = 'smol';


  constructor() { }

  ngOnInit(): void {

  }

}
 