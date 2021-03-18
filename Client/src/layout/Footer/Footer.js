import React from 'react';
import { Footer } from '@axa-fr/react-toolkit-all';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';

import './Footer.scss';

const FooterApp = () => (
  <Footer
    icon={logo}
    copyright={'Groupe ASC02 - Equipe Gro-Ops - © 2021 AXA All Rights Reserved'}
  />
);

export default FooterApp;
