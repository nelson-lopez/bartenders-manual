import styled from "styled-components";

const StyledNav = styled.div`
  min-width: 19vw;
  background-color: #05071a;
  display: flex;
  flex-direction: column;
  ul {
    list-style-type: none;
    li {
      padding-bottom: 24px;
      width: 150px;
      height: 66px;
      font-size: 18px;
      color: #f5f5f5;
      font-weight: bold;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  h2 {
    text-align: center;
    color: #9e1e59;
    width: 218px;
    height: 139px;
    line-height: 30px;
    font-size: 24px;
    text-align: left;
    letter-spacing: 1px;
    font-weight: bold;
    padding-left: 30px;
    padding-top: 20px;
  }
`;

export default StyledNav;
