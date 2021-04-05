/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { MdClose } from 'react-icons/md';
import { ImQuotesLeft } from 'react-icons/im';

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
            <img className="image" src={book.imageUrl} alt="capa do livro" />
          </div>
          <div className="infoContainer">
            <div className="mainContainer">
              <h1>{book.title}</h1>
              <h2>{book.authors[0]}</h2>
            </div>
            <div className="secondaryContainer">
              <h3 className="infoText">INFORMAÇÕES</h3>
              <div className="line">
                <h3>Páginas</h3>
                <span>{book.pageCount} páginas</span>
              </div>
              <div className="line">
                <h3>Editora</h3>
                <span>{book.publisher}</span>
              </div>
              <div className="line">
                <h3>Publicação</h3>
                <span>{book.published}</span>
              </div>
              <div className="line">
                <h3>Idioma</h3>
                <span>{book.language}</span>
              </div>
              <div className="line">
                <h3>Título Original</h3>
                <span>{book.title}</span>
              </div>
              <div className="line">
                <h3>ISBN-10</h3>
                <span>{book.isbn10}</span>
              </div>
              <div className="line">
                <h3>ISBN-13</h3>
                <span>{book.isbn13}</span>
              </div>
            </div>
            <div className="descriptionContainer">
              <h3 className="descriptionTitle">RESENHA DA EDITORA</h3>
              <div className="descriptionText">
                <ImQuotesLeft className="quotes" color="#333" size={18} />
                <h3 className="description">{book.description}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
