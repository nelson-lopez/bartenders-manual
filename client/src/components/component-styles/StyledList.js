import styled from "styled-components";

const StyledCocktailList = styled.div`
  min-width: 81vw;
  min-height: 100vh;
  background-color: #0d1635;
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 30px;
  }
  .cocktail-category {
    padding-left: 90px;
  }
  h2 {
    width: 252px;
    height: 98px;
    font-size: 36px;
    text-align: left;
    font-weigth: bold;
    color: #f5f5f5;
    padding-left: 90px;
    line-height: initial;
  }
  img {
    width: 366px;
    height: 335px;
    box-shadow: 1px -1px 7px 13px rgba(10, 2, 2, 0.5);
    cursor: pointer;
  }
  p {
    font-size: 18px;
    line-height: 20px;
    font-weigth: bold;
    color: #4b73ff;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default StyledCocktailList;
