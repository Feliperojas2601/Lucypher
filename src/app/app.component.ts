import { ApplicationRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lucypher';
  constructor(private _applicationRef:ApplicationRef, private _router:Router) {
    _router.events.subscribe(() => {
      this._applicationRef.tick();
      setTimeout(() => {
        this._applicationRef.tick();
      }, 100);
    });

  }
}
