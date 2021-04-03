/* eslint-disable func-names */
/* eslint-disable wrap-iife */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container } from './styles';

const Listagem = () => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('@BookShowcase:Token');
  const user = JSON.parse(localStorage.getItem('@BookShowcase:User'));

  useEffect(() => {
    api.get('books', {
      params: {
        page,
        amount: 12,
        category: 'biographies',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.data);

      setBooks(response.data.data);
      setPage(page + 1);
    });
  }, []);

  return (
    <Container>
      <Header name={user.name} />
      <ul>
        {books && books?.map((book) => (
          <li key={book.id}>
            <h1>{book.title}</h1>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Listagem;
