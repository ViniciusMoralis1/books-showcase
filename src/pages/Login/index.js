/* eslint-disable quote-props */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogoIoasys from '../../components/logoIoasys';
import api from '../../services/api';

import {
  Container, LoginContainer, LogoContainer, Placeholder, ErrorMessage,
} from './styles';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  function showAlert(e) {
    e.preventDefault();
    setAlert(true);
    setErrorAlert(false);
  }

  function showErrorAlert() {
    setAlert(false);
    setErrorAlert(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        email,
        'password': senha,
      };

      await api.post('/auth/sign-in', data).then((response) => {
        if (response && response.status >= 200 && response.status < 300) {
          const token = response.headers.authorization;
          const user = response.data;
          localStorage.setItem('@BookShowcase:Token', token);
          localStorage.setItem('@BookShowcase:User', JSON.stringify(user));

          history.push('/listagem');
        }
      });
    } catch (error) {
      showErrorAlert();
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@BookShowcase:Token');
    const user = localStorage.getItem('@BookShowcase:User');

    if (token && user) {
      history.push('/listagem');
    }
  }, []);

  return (
    <Container>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <LogoContainer>
            <LogoIoasys logo="white" />
          </LogoContainer>

          <label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} minLength="1" onInvalid={showAlert} required />
            <Placeholder>Email</Placeholder>
          </label>
          <label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} minLength="1" onInvalid={showAlert} required />
            <Placeholder>Senha</Placeholder>

            <button type="submit"><span>Entrar</span></button>
          </label>

          {errorAlert && (
            <ErrorMessage>
              <span>Email e/ou senha incorretos.</span>
            </ErrorMessage>
          )}

          {alert && (
            <ErrorMessage>
              <span>Preencha todos os campos.</span>
            </ErrorMessage>
          )}

        </form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
