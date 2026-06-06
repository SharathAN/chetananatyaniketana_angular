import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './legal.component.html',
})
export class LegalComponent {
  readonly terms = [
    'This site may revise the Terms of Use at any time without notice to you.',
    "Chetana Natya Niketana site may terminate User's access at any time for any reason.",
    'All present content text, images, graphics and video on this site is the exclusive property of Chetana Natya Niketana and should not be copied, reproduced or distributed in any form without permission from Chetana Natya Niketana.',
    'Unauthorized use of the materials appearing on this site may violate copyright.',
    'Chetana Natya Niketana may change or discontinue any aspect of its website at any time.',
  ];
}
