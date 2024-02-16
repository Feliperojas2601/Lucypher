import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from './components/button/button.component';
import { RouterLink } from '@angular/router';
import { CryptoService } from './services/crypto.service';
import { CodeComponent } from './components/code/code.component';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    CodeComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterLink,
  ], 
  exports: [
    CardComponent,
    ButtonComponent,
    CodeComponent,
  ]
})
export class SharedModule { }
