import WithRoot from './components/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProductHero from './components/modules/views/ProductHero';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

import {Router} from '@reach/router'

function App() {
  return (
    
    <React.Fragment>
      <Router>
        <SignUp path = "/signup"/>
        <SignIn path = "/signin"/>
        <ProductHero path = "/"/>
        <Privacy path = "/privacy"/>
        <Terms path = "/terms"/>
      </Router>
    </React.Fragment>
    
  );
}

export default WithRoot(App);
