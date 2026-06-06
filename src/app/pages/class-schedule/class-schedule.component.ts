import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layout/page-layout/page-layout.component';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './class-schedule.component.html',
})
export class ClassScheduleComponent {
  readonly schedule = [
    { name: 'Bharathanatyam', duration: 'Weekly 2 days & 1 hr duration.' },
    { name: 'Carnatic vocal', duration: 'Weekly 2 days & 1 hr duration.' },
    { name: 'Veena', duration: 'Weekly 2 days & 1 hr duration.' },
    { name: 'Keyboard', duration: 'Weekly 2 days & 1 hr duration.' },
    { name: 'Fine Arts', duration: 'Weekly 2 days & 1 hr duration.' },
  ];

  readonly rules = [
    'Dance & Music classes will be held weekly two days, as per the days given to a student.',
    'Student has to attend the class 5 minutes early with her notebook & compulsory with her neat uniform.',
    'Students have to compulsory wear the ID card and enter.',
    'Parents must take care of making a child to practice daily at home.',
    'We are making uniform compulsory for dance-salwar & music-long skirt.',
    'Kindly pay the fees in time to avoid the fine.',
    '20th is the last date of every month to pay the fees (without fine).',
    'We have eight class in a month in this if a child attends one class also they have to pay full month fees.',
    'A student can take more than two classes if they are interested by paying more fees.',
    'Parents are not allowed inside during the class hour.',
    'A student has to have a interest of learning & must not be by force.',
    'Parent\'s are requested to "please" obey the above given rules and regulations.',
    'Students should wear the provided uniform for dance & music i.e. Salwar & Skirt compulsory.',
    'Girls must wear bindi & bangles compulsory during Dance & Music class hours.',
  ];
}
