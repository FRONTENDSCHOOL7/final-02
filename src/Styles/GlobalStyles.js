import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts.css';

const GlobalStyles = createGlobalStyle` 
  ${reset}
  
  *{
    font-family: "Pretendard-Medium", sans-serif
  }

    html{
    background-color: aliceblue;
    }

    #root{
    width: 390px;
    margin: 0 auto;
    min-height: 100vh;
    background-color: var(--gray-100);
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    :root {
  --light-purple: #F2F2FF;
  --main-purple: #B29AFF;
  --dark-purple: #471BB2;
  --light-blue: #F2F4FF;
  --medium-blue: #D2D8FA;
  --light-green: #E2FFFB;
  --medium-green: #AFEEE3;
  --light-pink: #FDEAEC;
  --medium-pink: #FFD2D9;
  --light-orange: #FCF2E8;
  --medium-orange: #FFC7A7;
  --dark-orange: #FF6C6C;
  --danger-color: #FF7474;
  --gray-100: #F8F8F8;
  --gray-200: #D9D9D9;
  --gray-300: #FFFFFF;
  --gray-400: #EFEFEF;
  --gray-500: #646464;
  --white: #FFFFFF;
  --black: #000000;

  --font-xs-size:1.0rem;
  --font-sm-size:1.2rem;
  --font-base-size:1.3rem;
  --font-md-size:1.4rem;
  --font-lg-size:2.0rem;
}
`;

export default GlobalStyles;