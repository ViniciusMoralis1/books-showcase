import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;

  h1 {
    font-size: 16px;
    font-weight: 300;
  };

  h1 > span {
    font-weight: 500;
  };

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      margin-right: 10px;
    };

    button {
      border-radius: 25px;
      border: 1px solid rgba(51, 51, 51, 0.2);
      height: 32px;
      width: 32px;
      padding: 6px 8px;
      background: transparent;
    };
  };

  @media(max-width: 1000px){
    margin: 24px 0;

    h1 {
      font-size: 20px;
    }
  };

  @media(max-width: 650px){
    margin: 40px 0;

    h1 {
      font-size: 24px;
    }

    .welcomeText {
      display: none;
    }
  };
`;
