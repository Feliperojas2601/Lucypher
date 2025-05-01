import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-lucypher-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './lucypherLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LucypherLayoutComponent { }
