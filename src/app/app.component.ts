import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-starter';

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.http
        .get('https://algo-trade-va5l.onrender.com')
        .subscribe((r) => console.log('Hitting...'));
    }, 1000);
  }
}
