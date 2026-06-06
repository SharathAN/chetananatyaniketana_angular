import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ClassScheduleComponent } from './pages/class-schedule/class-schedule.component';
import { StudentsCornerComponent } from './pages/students-corner/students-corner.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeeStructureComponent } from './pages/fee-structure/fee-structure.component';
import { LegalComponent } from './pages/legal/legal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Chetana Natya Niketana' },
  { path: 'about', component: AboutComponent, title: 'About — Chetana Natya Niketana' },
  { path: 'courses', component: CoursesComponent, title: 'Courses — Chetana Natya Niketana' },
  { path: 'class-schedule', component: ClassScheduleComponent, title: 'Class Schedule — Chetana Natya Niketana' },
  { path: 'students-corner', component: StudentsCornerComponent, title: 'Students Corner — Chetana Natya Niketana' },
  { path: 'photo-gallery', component: PhotoGalleryComponent, title: 'Photo Gallery — Chetana Natya Niketana' },
  { path: 'awards', component: AwardsComponent, title: 'Awards — Chetana Natya Niketana' },
  { path: 'announcements', component: AnnouncementsComponent, title: 'Announcements — Chetana Natya Niketana' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Chetana Natya Niketana' },
  { path: 'fee-structure', component: FeeStructureComponent, title: 'Fee Structure — Chetana Natya Niketana' },
  { path: 'legal', component: LegalComponent, title: 'Legal — Chetana Natya Niketana' },
  { path: '**', redirectTo: '' },
];
