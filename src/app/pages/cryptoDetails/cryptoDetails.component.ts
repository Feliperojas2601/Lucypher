import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoService } from '../../services/crypto.service';
import { GistComponent } from '../../components/gist/gist.component';
import { CryptoAlgorithm, CryptoAlgorithmName } from '../../interfaces/cryptoAlgorithm.interface';

@Component({
  selector: 'app-crypto-details',
  imports: [GistComponent],
  templateUrl: './cryptoDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDetailsComponent implements OnInit {
    router = inject(Router);
    activatedRoute = inject(ActivatedRoute);
    cryptoService = inject(CryptoService);

    algorithmName: CryptoAlgorithmName | null = null;
    algorithm: CryptoAlgorithm | null = null;
    isLoading = signal<boolean>(false);

    ngOnInit() {
        const name = this.activatedRoute.snapshot.params['algorithmName'];
        try {
            this.algorithmName = name as CryptoAlgorithmName;
            if (this.algorithmName) {
                this.algorithm = this.cryptoService.getCryptoAlgorithmDetails(this.algorithmName);
            } else {
                this.router.navigate(['/']);
            }
        } catch (error) {
            this.router.navigate(['/']);
        }
    }
}
