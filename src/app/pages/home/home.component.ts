import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly disciplines = [
    'Bharathanatyam',
    'Carnatic Vocal',
    'Veena',
    'Keyboard',
    'Fine Arts',
  ];
}
