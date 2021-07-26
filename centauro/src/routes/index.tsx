import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { SearchPag } from '../pages/Search';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/search" component={SearchPag} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
