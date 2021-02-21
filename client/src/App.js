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
import Contact from './components/Contact';
import About from './components/About';
import CategoryPosts from './components/modules/views/CategoryPosts';

function App() {
  return (
    
    <React.Fragment>
      <Router>
        <SignUp path = "/signup"/>
        <SignIn path = "/signin"/>
        <ProductHero path = "/"/>
        <CategoryPosts path = "/category/posts"/>
        <PostDetails path = "/details"/>
        <Privacy path = "/privacy"/>
        <PostForm path= "/new"/>
		    <Contact path = "/contact"/>
        <About path= "/about"/>
        <Terms path = "/terms"/>
      </Router>
    </React.Fragment>
    
  );
}

export default WithRoot(App);
