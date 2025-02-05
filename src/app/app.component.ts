import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FirstComponent , SecondComponent]
})
export class AppComponent {
  title = 'demo';
}
