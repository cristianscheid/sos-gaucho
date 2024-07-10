import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessComponent } from './pages/access/access.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
