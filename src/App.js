import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideMenu from './components/SideMenu'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'

import AccountIndex from './pages/Account/Index'

import Footer from './components/Footer'

function App() {
  return (
    <div className="App">


      <Router>
        <SideMenu />
        <div className="main">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:name" component={Category} />
            <Route exact path="/product/:name/:id" component={Product} />
            <Route path="/account" component={AccountIndex} />
            <Route path="*">
              <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
