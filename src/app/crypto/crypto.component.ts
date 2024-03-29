import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../shared/services/crypto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent implements OnInit {
  public crypto = {
    title: '',
    description: '',
    path: '',
    gistUrl: '',
  };

  constructor(
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cryptoServiceResponse = this.cryptoService.getCryptoByPath("/" + params["name"]);
      if (cryptoServiceResponse) {
        this.crypto = cryptoServiceResponse;
      }
    });
  }
}
