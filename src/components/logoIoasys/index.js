import React from 'react';
import PropTypes from 'prop-types';

import whiteLogoImg from '../../assets/WhiteLogo.svg';
import darkLogoImg from '../../assets/DarkLogo.svg';

import { Container } from './styles';

const LogoIoasys = ({ logo }) => (
  <Container>
    {logo === 'white'
      ? (
        <img width={104} height={36} src={whiteLogoImg} alt="logo ioasys" />
      )
      : (
        <img width={104} height={36} src={darkLogoImg} alt="logo ioasys" />
      )}
    <h1>Books</h1>
  </Container>
);

LogoIoasys.propTypes = {
  logo: PropTypes.string,
};

LogoIoasys.defaultProps = {
  logo: '../../assets/WhiteLogo.svg',
};

export default LogoIoasys;
