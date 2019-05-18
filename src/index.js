import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListaClientes from './assets/components/pages/Clientes/ListaClientes';
import AdicionaCliente from './assets/components/pages/Clientes/AdicionaCliente';
import EditaCliente from './assets/components/pages/Clientes/EditaCliente';
//import Header from './assets/components/headerComponent';
//import Footer from './assets/components/footerComponent';

ReactDOM.render(
<BrowserRouter>
    <div>
        <App/>
    </div>
    <Switch>
        <Route path="/" exact={true} component={ListaClientes}/>
        <Route path="/clientes/" exact={true} component={AdicionaCliente}/>
        <Route path="/clientes/:id" exact={true} component={EditaCliente}/>
    </Switch>
</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();