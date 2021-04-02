import React from 'react';
import LogoIoasys from '../../components/logoIoasys';

import {
  Container, LoginContainer, LogoContainer,
} from './styles';

const Login = () => (
  <Container>
    <LoginContainer>
      <form>
        <LogoContainer>
          <LogoIoasys logo="white" />
        </LogoContainer>

        <input placeholder="E-mail" />
        <label>
          <input placeholder="Senha" type="password" />
          <button type="submit"><span>Entrar</span></button>
        </label>

      </form>
    </LoginContainer>
  </Container>
);

export default Login;
