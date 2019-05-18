import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="wrapper">
            <header>
                <nav>
                    <div className="menu-icon"> 
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="logo">
                        <a href="index">CPmobile</a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="index">Home</a></li>
                            <li><a href="index">Curso</a></li>
                            <li><a href="index">Depoimentos</a></li>
                            <li><a href="index">Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
  }
}

export default Header;