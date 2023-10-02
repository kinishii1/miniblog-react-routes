import {styled } from "styled-components";
import { Link } from "react-router-dom";

interface CardPostProps {
  titulo: string;
  imagem: string;
  id: number;
}

const StyledCardPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  gap: 10px;
  margin: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  img {
    width: 100%;
    padding: 0 0 10px 0;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 30px 0;
    text-align: center;
  }

  button {
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #1875E8;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 30px;
  }
  `

export default function CardPost(props: CardPostProps) {
  return (
 <Link to={`/posts/${props.id}`}>
    <StyledCardPost>
      <img src={props.imagem} alt="" />
      <h1>{props.titulo}</h1>
      <button>Ler</button>
    </StyledCardPost>
    </Link>
  )
}

