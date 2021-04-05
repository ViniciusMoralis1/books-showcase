/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

const Modal = ({ book, close }) => {
  return (
    <Container>
      <button className="closeButton" type="button" onClick={() => { close(false); }}>
        <MdClose size={16} color="#000" className="icon" />
      </button>
      <div className="modalContainer">
        <div className="content">
          <div className="imageContainer">
            <img src={book.imageUrl} alt="capa do livro" />
          </div>
          <div className="infoContainer">
            <h1>{book.title}</h1>
            <h2>{book.authors.split(',')}</h2>
            <h3>{book.pageCount}</h3>
            <h3>{book.publisher}</h3>
            <h3>{book.published}</h3>
            <h3>{book.language}</h3>
            <h3>{book.title}</h3>
            <h3>{book.isbn10}</h3>
            <h3>{book.isbn13}</h3>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
