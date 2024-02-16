import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CryptoService } from '../shared/services/crypto.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      CommonModule,
      SharedModule, 
      NgFor,
    ]
})
export class HomeComponent implements OnInit {
  
  public cards!: any[];

  constructor(
    private cryptoServive: CryptoService,
  ) {}

  ngOnInit(): void {
    this.cards = this.cryptoServive.getCryptoList();
  }
}
