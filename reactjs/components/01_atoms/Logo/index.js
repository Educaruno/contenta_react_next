import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { Link } from '../../../routes';

const Logo = () => (
    <Link to="/">
      <a className="logo">
        <img src="/static/logo.png" alt="Home" rel="index" />
      </a>
    </Link>
);

export default Logo;
