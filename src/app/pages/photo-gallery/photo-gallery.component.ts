import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './photo-gallery.component.html',
})
export class PhotoGalleryComponent {}
