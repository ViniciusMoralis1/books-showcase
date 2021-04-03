/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
/* eslint-disable wrap-iife */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, BooksContainer } from './styles';

const Listagem = () => {
  // eslint-disable-next-line no-unused-vars
  const [actualPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('@BookShowcase:Token');
  const user = JSON.parse(localStorage.getItem('@BookShowcase:User'));

  useEffect(() => {
    api.get('books', {
      params: {
        page: actualPage,
        amount: 12,
        category: 'biographies',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.data);
      console.log(response.data);
      setTotalPages(Math.round(response.data.totalPages));

      setBooks(response.data.data);
    });
  }, []);

  return (
    <Container>
      <Header name={user.name} />
      <BooksContainer>
        <ul>
          {books && books?.map((book) => (
            <li key={book.id}>
              <div className="imageContainer">
                <img src={book.imageUrl} alt="capa do livro" />
              </div>
              <div className="bookInfo">
                <div className="mainInfoContainer">
                  <h1>{book.title}</h1>
                  <h2>{book.authors[0]}</h2>
                </div>

                <div className="otherInfoContainer">
                  <h3>{book.pageCount} páginas</h3>
                  <h3>Editora {book.publisher}</h3>
                  <h3>Publicado em {book.published}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BooksContainer>
      <div className="pagesContainer">
        <p>Página <span>{actualPage}</span> de <span>{totalPages}</span></p>
      </div>
    </Container>
  );
};

export default Listagem;
