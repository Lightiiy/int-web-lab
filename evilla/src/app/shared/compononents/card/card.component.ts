import { Component, ElementRef,  Input, OnInit, Renderer2 } from '@angular/core';
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


  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    if( this.variant === 'smol')
    this.renderer.setAttribute(this.el.nativeElement, 'variant', 'smol')
  }

}
 