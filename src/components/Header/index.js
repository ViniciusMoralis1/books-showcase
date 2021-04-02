/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import LogoIoasys from '../logoIoasys';

const Header = ({ name }) => {
  return (
    <Container>
      <LogoIoasys />
      <h1>
        Bem vindo, <span>{name}!</span>
      </h1>
    </Container>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: 'Usuário',
};

export default Header;
