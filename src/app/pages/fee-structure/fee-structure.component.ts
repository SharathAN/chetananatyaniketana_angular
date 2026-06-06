import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-fee-structure',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './fee-structure.component.html',
})
export class FeeStructureComponent {
  readonly fees = [
    { name: 'Bharathanatyam', admission: '2000/-', monthly: '800/-' },
    { name: 'Carnatic vocal', admission: '2000/-', monthly: '600/-' },
    { name: 'Veena', admission: '2000/-', monthly: '900/-' },
    { name: 'Keyboard', admission: '2000/-', monthly: '900/-' },
  ];
}
