import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CryptoAlgorithm } from '../../interfaces/cryptoAlgorithm.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crypto-card',
  imports: [RouterLink],
  templateUrl: './cryptoCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoCardComponent {
    algorithm = input.required<CryptoAlgorithm>();
}
