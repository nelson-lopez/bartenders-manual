import styled from 'styled-components';

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
    color: #843636;
    padding-left: 90px;
  }
  img {
    width: 366px;
    height: 335px;
    box-shadow: 1px 10px 0px 0px rgba(10, 2, 2, 0.5);
  }
  p {
    font-size: 18px;
    line-height: 20px;
    font-weigth: bold;
    color: #fbf1f1;
  }
`;

export default StyledCocktailList;
