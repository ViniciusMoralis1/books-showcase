import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .closeButton {
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 25px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    height: 32px;
    width: 32px;
    padding: 6px;
    background: #FFF;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .modalContainer {
    width: 60%;
    height: 80vh;
    background-color: #FFF;
  }
`;
