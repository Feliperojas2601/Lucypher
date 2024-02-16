import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css', 
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input({required: true}) goBack: boolean = false;
  @Input({required: true, transform: (path: string) => '/crypto' + path }) path!: string;
}
