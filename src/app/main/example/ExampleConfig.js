import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import Example from './Example';
import CardedWithSidebarsNormalScrollComponent from '../user-interface/page-layouts/carded/with-sidebars/CardedWithSidebarsNormalScrollComponent';
import EmployeeContent from '../apps/employees/EmployeeContent';
import Employees from '../apps/e-commerce/employees/Employees';
import Benefit from '../apps/e-commerce/benefits/Benefit';
import BenefitAll from '../apps/e-commerce/benefits/BenefitAll';
import AddCategory from '../apps/e-commerce/benefits/AddCategory';
import EditCategory from '../apps/e-commerce/benefits/EditCategory';
import EditCategoryBenefit from '../apps/e-commerce/benefits/EditCategoryBenefit';
import PreviewBenefit from '../apps/e-commerce/categories/PreviewBenefit';
import CreateBenefit from '../apps/e-commerce/benefits/CreateBenefit';
import EditBenefit from '../apps/e-commerce/benefits/EditBenefit';
import CreateBenefitEmployees from '../apps/e-commerce/benefits/CreateBenefitEmployees';
import EditBenefitEmployees from '../apps/e-commerce/benefits/EditBenefitEmployees';
import EditCB from '../apps/e-commerce/benefits/EditCB';
import EditNotification from '../apps/e-commerce/notifications/EditNotification';
import CreateNotification from '../apps/e-commerce/notifications/CreateNotification';
import ChooseGroupNotification from '../apps/e-commerce/notifications/ChooseGroupNotification';
import UpdateNotification from '../apps/e-commerce/notifications/UpdateNotification';
import ChooseEditGroupNotification from '../apps/e-commerce/notifications/ChooseEditGroupNotification';
import CardedHome from '../user-interface/page-layouts/carded/with-sidebars/CardedHome';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pocetna',
      element: <CardedHome />,
    },
    {
      path: 'example2',
      element: <Example />,
    },
    {
      path: 'example3',
      element: <Example />,
    },
    {
      path: 'apps/e-commerce/employees',
      // element: <Orders />,
      element: <Employees />,
    },
    {
      path: '/apps/e-commerce/suggestions',
      element: <CardedWithSidebarsNormalScrollComponent />,
    },
    
    {
      path: 'example6',
      element: <Example />,
    },
    {
      path: 'example7',
      element: <Example />,
    },
    {
      path: 'example8',
      element: <Example />,
    },
    {
      path: 'apps/e-commerce/employees',
      element: <Employees />,
    },
    // {
    //   path: 'example10',
    //   element: <Example />
    // },
    {
      path: 'kategorijeBenefita',
      element: <BenefitAll />
    },
    {
      path: 'unknownBenefits',
      element: <Benefit />,
    },
    {
      path: 'novaKategorija',
      element: <AddCategory />
    },
    {
      path: 'izmeniKategorijuBenefit',
      element: <EditCategoryBenefit />
    },
    {
      path: 'izmeniKategoriju',
      element: <EditCategory />
    },
    {
      path: 'izmeniKategoriju2',
      element: <EditCB />
    },
    {
      path: 'pregledKompanije',
      element: <PreviewBenefit />
    },
    {
      path: 'noviBenefit',
      element: <CreateBenefit />
    },
    {
      path: 'izmeniBenefit/2',
      element: <EditBenefit />
    },
    {
      path: '/kreirajBenefitZaposlene',
      element: <CreateBenefitEmployees />
    },
    {
      path: 'izmeniBenefitZaposlene/123',
      element: <EditBenefitEmployees />
    },
    {
      path: 'prikaziSacuvanu',
      element: <EditNotification />
    },
    {
      path: 'prikaziNadolazecu',
      element: <EditNotification btnIcon="nadolazeca" />

    },
    {
      path: 'novoObavestenje',
      element: <CreateNotification />

    },
    {
      path: 'novoObavestenjeDalje',
      element: <ChooseGroupNotification />
    },
    {
      path: 'izmeniObavestenje',
      element: <UpdateNotification />
    },
    {
      path: 'izmeniObavestenjeDalje',
      element: <ChooseEditGroupNotification />
    }
    
  ],
};

export default ExampleConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
