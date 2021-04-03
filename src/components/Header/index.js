/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { Container } from './styles';
import LogoIoasys from '../logoIoasys';

const Header = ({ name }) => {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('@BookShowcase:Token');
    localStorage.removeItem('@BookShowcase:User');
    history.push('/');
  }

  return (
    <Container>
      <LogoIoasys />
      <div>
        <h1>
          Bem vindo, <span>{name}!</span>
        </h1>
        <button type="button" onClick={handleLogout}>
          <FiLogOut size={16} color="#000" />
        </button>
      </div>
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
