import WithRoot from './components/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProductHero from './components/modules/views/ProductHero';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import {Router} from '@reach/router'
import PostDetails from './components/modules/views/PostDetails';
import PostForm from './components/PostForm';
import About from './components/About';

function App() {
  return (
    
    <React.Fragment>
      <Router>
        <SignUp path = "/signup"/>
        <SignIn path = "/signin"/>
        <ProductHero path = "/"/>
        <PostDetails path = "/details"/>
        <Privacy path = "/privacy"/>
        <PostForm path= "/new"/>
        <About path= "/about"/>
        <Terms path = "/terms"/>
      </Router>
    </React.Fragment>
    
  );
}

export default WithRoot(App);
