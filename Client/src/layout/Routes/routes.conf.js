import { Autoscale } from 'pages/Autoscale/Autoscale';
import Home from 'pages/Home';
 
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    titlebar: {
      title: 'Simulateur',
      subtitle: '',
    },
  },
  {
    name: 'SimulateurAutoscale',
    path: '/simulateurAutoscale',
    component: Autoscale,
    titlebar: {
      title: 'Autoscale',
      subtitle: '',
    },
  },
];
 
export default routes;