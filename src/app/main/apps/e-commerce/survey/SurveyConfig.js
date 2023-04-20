import SurveyPage from './Survey';
import SurveyStatement from './SurveyStatement';

const SurveyConfig = {
  settings: {
    layout: {
      config: {
        footer: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: 'anketa',
      element: <SurveyPage />,
    },
    {
      path: 'rezultatiAnkete',
      element: <SurveyStatement />,
    },
  ],
};

export default SurveyConfig;