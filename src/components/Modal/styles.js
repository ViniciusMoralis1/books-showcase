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
    width: 55%;
    height: 75vh;
    max-height: 760px;
    max-width: 960px;
    background-color: #FFF;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
  }

  .content {
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 48px;
  }

  .imageContainer {
    margin-right: 64px;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
  }

  .image {
    height: 55vh;
  }

  .infoContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 55vh
  }

  .mainContainer {
    margin-bottom: 24px;

    h1 {
      font-size: 28px;
      line-height: 40px;
      font-weight: 500;
    }

    h2 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      color: #AB2680;
    }
  }

  .secondaryContainer {
    display: flex;
    flex-direction: column;
    margin: 24px 0;

    .infoText {
      margin-bottom: 16px;
    }

    .line {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-right: 24px;
    }

    h3 {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      text-align: right;
      align-self: flex-end;
      color: #999999;
    }
  }

  .descriptionContainer {
    .descriptionTitle {
      font-weight: 500;
      color: #333;
      margin-bottom: 16px;
    }

    .descriptionText {
      display: flex;
      flex-direction: row;
      text-indent: 22px;
      line-height: 20px;
    }

    .quotes {
      position: absolute;
      opacity: .5;
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
      align-self: flex-end;
      color: #999999;
    }
  }
`;
