import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css', 
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) path!: string;
}
