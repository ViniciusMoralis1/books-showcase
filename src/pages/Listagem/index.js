/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container } from './styles';

const Listagem = () => {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  async function loadBooks() {
    await api.get('books', {
      params: {
        page,
        amount: 12,
        category: 'biographies',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
      setPage(page + 1);
    });
  }

  useEffect(() => {
    setToken(localStorage.getItem('@BookShowcase:Token'));
    setUser(JSON.parse(localStorage.getItem('@BookShowcase:User')));

    loadBooks();
  }, []);

  return (
    <Container>
      <Header name={user.name} />
    </Container>
  );
};

export default Listagem;
