import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CryptoCardComponent } from '../../components/cryptoCard/cryptoCard.component';

@Component({
  selector: 'app-home',
  imports: [CryptoCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    cryptoService = inject(CryptoService);
    cryptoAlgorithms = this.cryptoService.getCryptoAlgorithms();
}
