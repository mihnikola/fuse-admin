import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProjectDashboardApp from './ProjectDashboardApp';

const ProjectDashboardApp = lazy(() => import('./ProjectDashboardApp'));

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/project',
      element: <ProjectDashboardApp />,
    },
  ],
};

export default ProjectDashboardAppConfig;
