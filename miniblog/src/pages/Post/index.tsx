import { useParams } from "react-router-dom";
import PageModel from "../../components/PageModel";
import posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";

type PostType = {
  id: number;
  titulo: string;
  texto: string;
}

function Post() {
  const { id } = useParams<{ id?: string }>();
  const post: PostType | undefined = posts.find((post) => post.id === Number(id));
 
  if (!post) {
    return <h1>Post não encontrado!</h1>;
  }

  return (
    <PageModel
      title={post.titulo}
      imgSource={`/posts/${post.id}/capa.png`}
    >
      <ReactMarkdown>
        {post.texto}
      </ReactMarkdown>
    </PageModel>
  );
}

export default Post;
