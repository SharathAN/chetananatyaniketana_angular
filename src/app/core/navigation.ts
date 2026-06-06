export interface NavItem {
  label: string;
  path: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Schedule', path: '/class-schedule' },
  { label: 'Students', path: '/students-corner' },
  { label: 'Gallery', path: '/photo-gallery' },
  { label: 'Awards', path: '/awards' },
];
