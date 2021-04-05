import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: url("/img/list-bg.png") no-repeat center center fixed;
  background-color: #F5F5F5;
  color: #333;
  flex-direction: column;
  background-size: cover;
  align-items: stretch;

  padding: 0 5%;

  .pagesContainer {
    display: flex;
    align-self: flex-end;
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
  };

  .pagesContainer > p {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px;
  };

  .pagesContainer > p > span {
    font-weight: 500;
  };

  .buttonsContainer > button {
    border-radius: 25px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    height: 32px;
    width: 32px;
    padding: 6px;
    background: transparent;
    margin-left: 8px;
    transition: filter .5s;

    &:disabled {
      border: 1px solid rgba(51, 51, 51, 0.1);
      cursor: auto;
    };
  };

  @media (max-width: 1000px){
    .pagesContainer {
      align-self: center;
    };
  };
`;

export const BooksContainer = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 0.25fr);
    grid-gap: 16px;
    list-style: none;
  };

  ul > li {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    padding: 16px;
    border-radius: 4px;
    position: relative;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    cursor: pointer;
  };

  .imageContainer {
    margin-right: 24px;
  };

  .imageContainer > img {
    width: 95px;
    height: 140px;
    filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  };

  .bookInfo {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    line-height: 20px;
  };

  .mainInfoContainer > h1 {
    font-size: 14px;
    font-weight: 500;
  };

  .mainInfoContainer > h2 {
    font-size: 12px;
    font-weight: 400;
    color: #AB2680;
  };

  .otherInfoContainer > h3 {
    font-weight: 400;
    font-size: 12px;
    color: #999;
  };

  @media (max-width: 1250px){
    ul {
      grid-template-columns: repeat(3, 0.33fr);
    };
  };

  @media (max-width: 1000px){
    ul {
      grid-template-columns: repeat(2, 0.5fr);
    };
  };

  @media (max-width: 650px) and (min-width: 451px){
    ul > li {
      justify-content: space-between;
      padding: 24px;
    };

    .imageContainer {
      margin: 0;
    };

    .imageContainer > img {
      width: 130px;
      height: 180px;
      filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
    };

    .bookInfo {
      width: 60%;
    }

    .mainInfoContainer > h1 {
      font-size: 16px;
      font-weight: 500;
    };

    .mainInfoContainer > h2 {
      font-size: 14px;
      font-weight: 400;
      color: #AB2680;
    };

    .otherInfoContainer > h3 {
      font-weight: 400;
      font-size: 14px;
      color: #999;
    };

    ul {
      grid-template-columns: repeat(1, 1fr);
    };
  };

  @media (max-width: 450px){
    ul > li {
      justify-content: space-between;
      padding: 24px;
    };

    .imageContainer {
      margin: 0;
    };

    .imageContainer > img {
      width: 95px;
      height: 140px;
      filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
    };

    .bookInfo {
      width: 58%;
    }

    .mainInfoContainer > h1 {
      font-size: 14px;
      font-weight: 500;
    };

    .mainInfoContainer > h2 {
      font-size: 12px;
      font-weight: 400;
      color: #AB2680;
    };

    .otherInfoContainer > h3 {
      font-size: 12px;
      font-weight: 400;
      color: #999;
    };

    ul {
      grid-template-columns: repeat(1, 1fr);
    };
  };
`;
