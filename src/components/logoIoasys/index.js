import React from 'react';
import PropTypes from 'prop-types';

import whiteLogoImg from '../../assets/WhiteLogo.svg';
import darkLogoImg from '../../assets/DarkLogo.svg';

import { Title } from './styles';

const LogoIoasys = ({ logo }) => (
  <>
    {logo === 'white'
      ? (
        <img width={104} height={36} src={whiteLogoImg} alt="logo ioasys" />
      )
      : (
        <img width={104} height={36} src={darkLogoImg} alt="logo ioasys" />
      )}
    <Title>Books</Title>
  </>
);

LogoIoasys.propTypes = {
  logo: PropTypes.string,
};

LogoIoasys.defaultProps = {
  logo: '../../assets/WhiteLogo.svg',
};

export default LogoIoasys;
