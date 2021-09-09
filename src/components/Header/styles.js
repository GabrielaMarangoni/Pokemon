import styled from 'styled-components';

export const Header = styled.header`
  background: #7f0000;
  width: 100vw;
  height: 11vh;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  position: fixed;
  padding: 10px 50px 10px 50px;
  z-index: 999999;
  user-select: none; // não deixa o usuário selecionar nada

  h1{
   color: white;
   font-size: 35px;
   padding-left: 20px;
  }
`;

export const Logo = styled.img`
  height: 9vh;
  @media(max-width: 1440px){
      height: 9vh;
  }
  @media(max-width: 1024px){
      height: 8vh;
  }
`;