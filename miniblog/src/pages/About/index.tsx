import PageModel from "../../components/PageModel";
import { styled } from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    width: 50%;
  }

  & > div:last-child {
    width: 40%;
  }

  & h5 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: justify;
    color: #444;
    margin-bottom: 30px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: #444;
`;

function About() {
  return (
    <PageModel title="Sobre Mim" imgSource="./about-me.png">
      <>
        <StyledTitle>Olá, eu sou o Kin!</StyledTitle>

        <FlexDiv>
          <div>
            <h5>
              Oi, tudo bem? Sou estudante de programação iniciante e estou feliz
              em te ver por aqui.
            </h5>
            <h5>
              Minha jornada na programação começou enquanto eu trabalhava no
              Japão, em uma fábrica, e tive a chance de conhecer funcionários
              que trabalhavam na área de programação. Desde então, me apaixonei
              por esse campo. Meu primeiro contato foi com Python, através de um
              curso online na plataforma <b>Udacity.</b> Aprendi conceitos de
              lógica de programação e o básico de Python, mas não aprofundei
              muito na época. Embora a programação não tenha sido minha primeira
              escolha de carreira, eu realmente gostava de estudá-la.
            </h5>
            <h5>
              Cheguei a cursar dois semestres de Gestão Financeira na
              instituição <b>Saint Paul</b>, onde conheci pessoas que já eram
              formadas ou trabalhavam na área de tecnologia, muitas delas
              realizando uma segunda formação. Após sair da faculdade, decidi
              que queria trabalhar com programação e comecei a estudar por conta
              própria. Foi quando descobri a <b>Alura</b> e a <b>Trybe</b>, e me
              encantei com suas plataformas e a forma como os instrutores
              ensinavam. Iniciei meus estudos em HTML, CSS e JavaScript, e agora
              estou me aprofundando no mundo do React.
            </h5>
            <h5>
              Até o momento, não possuo experiência profissional na área, mas
              estou em busca de uma oportunidade para aplicar tudo o que venho
              aprendendo. Sei que devo ter paciencia e consistência, e que o
              caminho é longo, mas estou disposto a enfrentar os desafios que
              surgirem.
            </h5>
            <h5>
              No entanto, isso não me impede de desenvolver diversos projetos
              para colocar em prática meus conhecimentos e continuar aprendendo.
              Neste blog, você encontrará diversos projetos que desenvolvi
              durante minha jornada de estudos.
            </h5>
            <h5>
              Acredito que todos os dias são uma oportunidade de aprender algo
              novo, e estou sempre em busca de novos conhecimentos e desafios.
              Meu objetivo é evoluir e ser melhor do que fui ontem.
            </h5>
          </div>
          <div>
            <img src="./about-me-img.png" alt="" />
          </div>
        </FlexDiv>
      </>
    </PageModel>
  );
}

export default About;
