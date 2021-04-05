/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable wrap-iife */
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Header from '../../components/Header';
import api from '../../services/api';

import Modal from '../../components/Modal';

import { Container, BooksContainer } from './styles';

const Listagem = () => {
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('@BookShowcase:Token');
  const user = JSON.parse(localStorage.getItem('@BookShowcase:User'));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  async function loadBooks() {
    await api.get('books', {
      params: {
        page: actualPage,
        amount: 16,
        category: 'biographies',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTotalPages(Math.round(response.data.totalPages));

      setBooks(response.data.data);
    });
  }

  useEffect(() => {
    loadBooks();
  }, [actualPage]);

  function lastPage() {
    setActualPage(actualPage - 1);
  }

  function nextpage() {
    setActualPage(actualPage + 1);
  }

  function handleModal(item) {
    setIsModalVisible(true);
    setModalInfo(item.book);
  }

  return (
    <Container>
      <Header className="header" name={user.name} />
      <BooksContainer>
        <ul>
          {books && books?.map((book) => (
            <li key={book.id} onClick={() => handleModal({ book })}>
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

        <div className="buttonsContainer">
          <button className="backButton" type="button" disabled={actualPage === 1} onClick={lastPage}>
            <MdChevronLeft size={16} color="#000" className="icon" />
          </button>

          <button className="forwardButton" type="button" disabled={actualPage === totalPages} onClick={nextpage}>
            <MdChevronRight size={16} color="#000" />
          </button>
        </div>
      </div>
      { isModalVisible && (
        <Modal book={modalInfo} close={setIsModalVisible} />
      )}
    </Container>
  );
};

export default Listagem;
