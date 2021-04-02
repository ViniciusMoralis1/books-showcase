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
        {/* <Route path="/cadastro" component={NewUser} />
        <Route path="/administradores" component={Administrators} />
        <Route path="/Produto/novo" component={NewProducts} />
        <Route path="/produto/detalhe" component={EditProduct} />
        <Route path="/pedidos" component={Orders} /> */}
      </Switch>
    </BrowserRouter>
  );
}
