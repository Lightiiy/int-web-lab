import { Component, ElementRef,  Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Input()
  showButton: boolean = true;


  constructor(private renderer: Renderer2,
     private el: ElementRef,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    if( this.variant === 'smol')
    this.renderer.setAttribute(this.el.nativeElement, 'variant', 'smol')
  }

  onReroute(){
    this.router.navigate([ this.housing.id], {relativeTo: this.route});
  }

}
 