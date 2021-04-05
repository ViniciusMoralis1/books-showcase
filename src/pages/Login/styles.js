/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: url("/img/bg.png") no-repeat center center fixed;
  background-size: cover;
  align-items: stretch;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;

  width: 100%;
  max-width: 600px;

  align-items: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  };

  input {
    height: 60px;
    width: 360px;
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.32);
    border: none;
    border-radius: 4px;
    color: #FFF;
    backdrop-filter: blur(2px);
    margin-bottom: 16px;
    transition: .5s;

    &::placeholder{
      color: #F5F5F5;
    }

    &:focus, &:valid{
      padding-top: 12px;
    }
  }

  label {
    position: relative;
    display: inline-block;
  }

  label > input {
    width: 360px;
    align-items: center;
  }

  label > button {
    position: absolute;
    background: #FFFFFF;
    color: #B22E6F;
    height: 36px;
    width: 84px;
    align-self: center;
    margin-left: -96px;
    margin-top: 12px;
    border-radius: 44px;
    border: 0;
    transition: filter .3s;

    &:hover {
    filter: brightness(92%);
    };
    &:active {
      filter: opacity(80%);
    };
  }

  label > button > span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Placeholder = styled.p`
  position: absolute;
  top: 18px;
  margin-left: 16px;
  transition: .5s;

  label > input:focus ~ &,
  label > input:valid ~ & {
    top: 4px;
    opacity: 0.5;
  };
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const InputButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  margin-top: 14px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  color: #FFF;
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    top: -20px;
    left: 16px;
    border-bottom-color: rgba(255, 255, 255, 0.4);
  }
`;
