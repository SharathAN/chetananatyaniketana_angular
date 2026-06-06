import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
})
export class PageLayoutComponent {
  @Input({ required: true }) sidebarImage!: string;
  @Input() sidebarAlt = 'Chetana Natya Niketana';
  @Input() showSidebar = true;
}
