import styled from "styled-components";

const StyledCocktail = styled.div`
  min-width: 81vw;
  min-height: 100vh;
  background-color: #0d1635;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 611px;
    height: 418px;
  }
  h2 {
    width: 252px;
    height: 113px;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    color: #f5efef;
    line-height: initial;
  }
  h3 {
    font-weight: bold;
    font-size: 18px;
    width: 618px;
    height: 66px;
    line-height: 27px;
    letter-spacing: 3px;
    text-align: center;
    color: #f3f3f3;
  }
  .ingredients {
    width: 173px;
    height: 40px;
    font-size: 24px;
    line-height: 20px;
    text-align: left;
    font-weight: bold;
  }
  .ingredient-items {
    width: 202px;
    height: 151px;
    font-size: 24px;
    text-align: left;
    line-height: 25px;
    font-weight: bold;
  }
  .data-container {
    display: flex;
    flex-direction: row;
    padding-bottom: 5em;
  }
  .ingredients-container {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  .directions-container {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
  .directions {
    width: 173px;
    height: 40px;
    font-size: 24px;
    line-height: 20px;
    text-align: left;
    font-weight: bold;
  }
  .direction-items {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    paragraph-spacing: 4px;
    text-align: left;
    align: middle;
    letter-spacing: 2px;
    width: 207px;
    height: 160px;
  }

  p {
    color: #fef9f9;
  }
  .buttons-container {
    display: flex;
    padding-top: 5em;
    padding-bottom: 5em;
  }
  .cocktail-buttons {
    width: 125px;
    height: 47px;
    color: FBFBFB;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
  .star {
    padding-top: 20px;
    color: #fef9f9;
    height: 27px;
    width: 65px;
  }

  .black-star {
    padding-top: 20px;
    color: black;
    height: 27px;
    width: 65px;
  }
`;

export default StyledCocktail;
