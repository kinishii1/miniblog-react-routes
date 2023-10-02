import { styled } from "styled-components";
import notfound from "../../assets/notfound.png";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 548px;
  background-color: #041833;
  color: #fff;
  position: relative;

  & > h1 {
    font-size: 128px;
    font-style: normal;
    font-weight: 700;
    line-height: 128px;
    text-align: center;
    margin: 0;
  }

  & > h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    margin: 0;
  }

  & > h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  & > div > a {
    background-color: #1875E8;
    border: none;
    border-radius: 50px;
    padding: 20px 40px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #041833;
    cursor: pointer;
    text-decoration: none;
  }

  & > div > a:hover {
    background-color: #0F4AA4;
    color: #fff;
  }

  & > div > img {
    width: 400px;
    position:absolute;
    right: 400px;
    top: 408px;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <h4>
        Tem certeza de que era isso que você estava procurando? Aguarde uns
        instantes e recarregue a página, ou volte para a página inicial.
      </h4>
      <div>
        <Link to='/'>Voltar</Link>
        <img src={notfound} alt=""/>
      </div>
    </NotFoundContainer>
  );
  }
