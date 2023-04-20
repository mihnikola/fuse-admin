import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import CardedWithSidebarsNormalScrollComponent from '../../user-interface/page-layouts/carded/with-sidebars/CardedWithSidebarsNormalScrollComponent';
import Suggestion from './suggestions/Suggestion';
import SuggestionItem from './suggestions/SuggestionItem';
import Notifications from './notifications/Notifications';


const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
   
    // {
    //   path: 'apps/e-commerce/suggestions',
    //   // element: <Orders />,
    //   // element: <Employees />,
    //   element: <Suggestion />,
    // },
    {
      path: '/apps/e-commerce/suggestions',
      element: <CardedWithSidebarsNormalScrollComponent />,
    },
    
    {
      path: 'apps/e-commerce/suggestions/2',
      element: <SuggestionItem />,
    },
    {
      path: 'apps/e-commerce',
      element: <Navigate to="products" />,
    },
    {
      path: 'obavestenja',
      element: <Notifications />,
    },
    
  ],
};

export default ECommerceAppConfig;
