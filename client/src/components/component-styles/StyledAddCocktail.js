import styled from "styled-components";

const StyledAddCocktail = styled.div`
  min-width: 81vw;
  min-height: 100vh;
  background-color: #0d1635;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 456px;
    height: 446px;
    background-color: #303030;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 200px;
    box-shadow: 1px 10px 0px 0px rgba(10, 2, 2, 0.5);
  }
  .input {
    width: 300px;
    height: 65px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    text-decoration: underline;
  }
  h2 {
    font-size: 32px;
    width: 650px;
    height: 17px;
    line-height: 24px;
    font-weight: bold;
    text-align: left;
    color: #fef8f8;
  }
  .submit-button {
    border: none;
    color: #fef8f8;
    background-color: #303030;
    font-size: 16px;
    height: 28px;
    padding: 0;
  }
`;

export default StyledAddCocktail;
