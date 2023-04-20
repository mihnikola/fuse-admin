import ExampleConfig from '../example/ExampleConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import HomeAppConfig from './e-commerce/dashboards/HomeAppConfig';
import EmployeeAppConfig from './employees/EmployeeAppConfig';


const appsConfigs = [
  HomeAppConfig,
  EmployeeAppConfig,
  ECommerceAppConfig,
  ExampleConfig
 
];

export default appsConfigs;
