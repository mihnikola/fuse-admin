import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Employees from '../e-commerce/employees/Employees';


const EmployeeAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
   
    {
        path: 'apps/e-commerce/employees',
        element: <Employees />,
      },
  ],
};

export default EmployeeAppConfig;
