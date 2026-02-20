import Inforcard from "../../components/infocard/Inforcard";
import aulasTec from "../../assets/imagens/aulasTec.png";
import esporteInc from "../../assets/imagens/esporteInc.png";
import multiraoRec from "../../assets/imagens/multiraoRec.png";
import s from "../Style.module.scss";

const Voluntariado = () => {
  return (
    <main className={s.main}>
        <h1>Voluntariado</h1>
        <section>
          <article>
            <Inforcard
              image= {multiraoRec}
              alt= "Pessoas segurando caixas de reciclagem"
              subtitulo= "Mutirão de reciclagem"
              paragrafo= "Coletar materiais recicláveis e orientar sobre descarte consciente."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {aulasTec}
              alt= "Alunos em uma aula de informática"
              subtitulo= "Aulas de Tecnologia"
              paragrafo= "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {esporteInc}
              alt= "Alunos em uma aula de ginastica"
              subtitulo= "Esporte e Inclusão"
              paragrafo= "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
              textoBotao= "Quero participar"
            />
          </article>
        </section>
    </main>
  )
}

export default Voluntariado
