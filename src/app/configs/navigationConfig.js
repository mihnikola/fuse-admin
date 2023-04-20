import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Početna',
    translate: 'Početna',
    type: 'item',
    icon: 'heroicons-outline:home',
    url: 'pocetna',
  },
  {
    id: 'example-component2',
    title: 'Obaveštenja',
    translate: 'Obaveštenja',
    type: 'item',
    icon: 'heroicons-outline:speakerphone',
    url: 'obavestenja',
  },
  {
    id: 'example-component3',
    title: 'Anketa',
    translate: 'Anketa',
    type: 'item',
    icon: 'heroicons-outline:pencil-alt',
    url: 'anketa',
  },
  {
    id: 'example-component4',
    title: 'Predlozi',
    translate: 'Predlozi',
    type: 'item',
    icon: 'heroicons-outline:light-bulb',
    url: '/apps/e-commerce/suggestions',
  },
  {
    id: 'example-component5',
    title: 'Benefiti',
    translate: 'Benefiti',
    type: 'item',
    icon: 'heroicons-outline:tag',
    url: 'kategorijeBenefita',
  },
  {
    id: 'example-component6',
    title: 'Prirucnik',
    translate: 'Prirucnik',
    type: 'item',
    icon: 'heroicons-outline:book-open',
    url: 'example6',
  },
  {
    id: 'example-component7',
    title: 'Organizacija',
    translate: 'Organizacija',
    type: 'collapse',
    icon: 'heroicons-outline:user-group',
    children:[{
      id: 'example-component9',
      title: 'Zaposleni',
      type: 'item',
      icon: 'heroicons-outline:users',
      // url: 'apps/e-commerce/orders',
      url: 'apps/e-commerce/employees',  
    },
    {
      id: 'example-component10',
      title: 'Grupe',
      type: 'item',
      icon: 'heroicons-outline:user-group',
      url: 'example10',
    },
  ]
  },
  {
    id: 'example-component8',
    title: 'Nagradne igre',
    translate: 'Nagradne_igre',
    type: 'item',
    icon: 'heroicons-outline:gift',
    url: 'example8',
  },
];

export default navigationConfig;
