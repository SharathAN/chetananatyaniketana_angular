import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './awards.component.html',
})
export class AwardsComponent {
  readonly awards = [
    'Nadu Prabu Kempegowda — 2011',
    'Nritya Kala Ratna 2009 & 2010',
    'Basava Jayanthi — 2009',
    'Mayura — 2008',
    'Chetana Shri — 2007',
    'Indirapriyadarshini — 2005',
  ];
}
