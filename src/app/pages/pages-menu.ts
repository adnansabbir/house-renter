import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Properties',
    icon: 'map-outline',
    link: '/properties',
    home: false,
  },
  {
    title: 'Configurations',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'City',
        link: '/configurations/city',
      },
    ]
  }
];
