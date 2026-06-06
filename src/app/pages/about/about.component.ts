import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly motto = ['Bharathanatyam', 'Carnatic Vocal', 'Veena', 'Mrudangam', 'Keyboard'];
  readonly performances = [
    'Doordarshan Chandana Channel',
    'Iskcon heritage fest',
    'Udupi Sri Krishna Temple',
    'Raghavendra Aradhane, Mysore',
    "World's Dance Day",
    'Gurvayur Temple, Kerala',
    '500th Hampi Utsava, Hampi',
    'Golden Temple, Vellore',
    'Kaiwara Utsava, Chinthamani, etc.',
  ];
}
