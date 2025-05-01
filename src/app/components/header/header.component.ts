import { ChangeDetectionStrategy, Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    router = inject(Router);
    el = inject(ElementRef);
    renderer = inject(Renderer2);

    ngAfterViewInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            const letters = this.el.nativeElement.querySelectorAll('.header-letter');
            letters.forEach((letter: HTMLElement) => {
                this.renderer.removeClass(letter, 'header-letter');
                void letter.offsetWidth;
                this.renderer.addClass(letter, 'header-letter');
            });
        });
    }
}
