import { Autoscale } from 'pages/Autoscale/Autoscale';
import Home from 'pages/Home';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    titlebar: {
      title: '',
      subtitle: '',
    },
  },
  {
    name: 'SimulateurAutoscale',
    path: '/simulateurAutoscale',
    component: Autoscale,
    titlebar: {
      title: '',
      subtitle: '',
    },
  },
];

export default routes;
