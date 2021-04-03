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
      console.log(typeof (response.data.data));

      setBooks(response.data.data);
      console.log(books);
      setPage(page + 1);
    });
  }, []);

  return (
    <Container>
      <Header name={user.name} />
      <ul>
        {books && books?.map((book) => (
          <h1 key={book.id}>{book}</h1>
        ))}
      </ul>
    </Container>
  );
};

export default Listagem;
