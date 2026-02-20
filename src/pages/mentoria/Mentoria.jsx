import Inforcard from "../../components/infocard/Inforcard";
import mentoria from "../../assets/imagens/mentoria.png";
import compartilhar from "../../assets/imagens/compartilhar.png";
import acompanhar from "../../assets/imagens/acompanhar.png";
import s from "../Style.module.scss";

const Mentoria = () => {
  return (
    <main className={s.main}>
        <h1>Mentoria</h1>
        <section>
          <article>
            <Inforcard
              image= {mentoria}
              alt= "Mãoes gesticulando sobre relatorios e gráficos"
              subtitulo= "Mentoria de Carreira e Emprego"
              paragrafo= "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {compartilhar}
              alt= "Pessoas compartilhando conhecimento em uma reunião"
              subtitulo= "Compartilhe Experiência"
              paragrafo= "Oriente jovens e profissionais iniciantes em sua área."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {acompanhar}
              alt= "Mulher acompanhando o desenvolvimento de um jovem em um ambiente de trabalho"
              subtitulo= "Acompanhamento"
              paragrafo= "Participe como guia em jornadas de aprendizado e desenvolvimento."
              textoBotao= "Quero participar"
            />
          </article>
        </section>
    </main>
  )
}

export default Mentoria
