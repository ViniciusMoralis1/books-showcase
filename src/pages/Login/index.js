/* eslint-disable quote-props */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LogoIoasys from '../../components/logoIoasys';
import api from '../../services/api';

import {
  Container, LoginContainer, LogoContainer,
} from './styles';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        email,
        'password': senha,
      };

      await api.post('/auth/sign-in', data).then((response) => {
        if (response && response.status >= 200 && response.status < 300) {
          console.log(response);
          const token = response.headers.authorization;
          const user = response.data;
          localStorage.setitem('@BookShowcase:Token', token);
          localStorage.setitem('@BookShowcase:User', JSON.stringify(user));

          history.push('/listagem');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <LogoContainer>
            <LogoIoasys logo="white" />
          </LogoContainer>

          <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>
            <input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button type="submit"><span>Entrar</span></button>
          </label>
        </form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
