import CardPost from "../../components/CardPost";
import posts from "../../json/posts.json";
import { styled } from "styled-components";

const StyledHome = styled.main`
  width: 90%;
  margin: -6rem auto 0 auto;
  padding: 20px 0;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function Home() {
  return (
    <StyledHome>
      <ul>
        {posts.map((post) => (
         <li key={post.id} onClick={() => window.scrollTo(0, 0)}>
         <CardPost titulo={post.titulo} id={post.id} imagem={`./posts/${post.id}/capa.png`} />
       </li>
        ))}
      </ul>
    </StyledHome>
  );
}

export default Home;
