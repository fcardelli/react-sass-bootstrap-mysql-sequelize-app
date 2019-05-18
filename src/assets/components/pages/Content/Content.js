import React, { Component } from 'react';
//Importando itens do bootstrap para o nav menu
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
//Adicionando componentes de Clientes
//import ListaClientes from '../pages/Clientes/ListaClientes';
//import AdicionaCliente from '../pages/Clientes/AdicionaCliente';
//import DetalheCliente from './Clientes/EditaCliente';
//import EditaCliente from './Clientes/EditaCliente';

class Content extends Component {
  render() {
    return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">MERN Stack CRUD Operations</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/">Inicio</Link>
              </NavItem>
              <NavItem>
                <Link to="/clientes/">Adiciona Cliente</Link>
              </NavItem>
            </Nav>
          </Navbar>
        
        {/*
        <div>
          
            <Route exact path='/clienteRelacionamento/clientes' Component={ListaClientes}/>
            <Route path='/clienteRelacionamento/' Component={AdicionaCliente}/>
          </Switch> 
        </div>
        */}
        </div>
    );
  }
}

export default Content;