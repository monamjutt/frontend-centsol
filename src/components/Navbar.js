import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { Styled } from './styled-components/Common';

export class Navbar extends Component {
  render() {
    const CartButton = Styled.buttons.Button;
    const NavWrapper = Styled.nav.NavWrapper;
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="navbar-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <CartButton>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
            my cart
          </CartButton>
        </Link>
      </NavWrapper>
    )
  }
}


export default Navbar
