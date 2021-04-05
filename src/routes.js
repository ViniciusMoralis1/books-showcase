import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Listagem from './pages/Listagem';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/listagem" component={Listagem} />
      </Switch>
    </BrowserRouter>
  );
}
