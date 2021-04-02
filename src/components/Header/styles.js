import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 12vh;
  justify-content: space-around;

  h1 {
    font-size: 16px;
    font-weight: 300;
  }

  h1 > span {
    font-weight: 500;
  }
`;
