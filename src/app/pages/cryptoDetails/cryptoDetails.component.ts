import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';
import { GistComponent } from '../../components/gist/gist.component';
@Component({
  selector: 'app-crypto-details',
  imports: [GistComponent],
  templateUrl: './cryptoDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDetailsComponent {
    activatedRoute = inject(ActivatedRoute);
    cryptoService = inject(CryptoService);

    algorithmName = this.activatedRoute.snapshot.params['algorithmName'];
    algorithm = this.cryptoService.getCryptoAlgorithmDetails(this.algorithmName);
    
    isLoading = signal<boolean>(false);
}
