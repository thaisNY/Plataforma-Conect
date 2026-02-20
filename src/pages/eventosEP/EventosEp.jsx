import Inforcard from "../../components/infocard/Inforcard";
import empdJovens from "../../assets/imagens/empdJovens.png";
import tecTransf from "../../assets/imagens/tecTransf.png";
import primeiroEmp from "../../assets/imagens/primeiroEmp.png";
import s from "../Style.module.scss";
import styles from "./EventosEp.module.scss";

const EventosEp = () => {
  return (
    <main className={`${s.main} ${styles.eventosMain}`}>
        <h1>Eventos & Palestras</h1>
        <section>
          <article>
            <Inforcard
              image= {empdJovens}
              alt= "Mãoes gesticulando sobre relatorios e gráficos"
              subtitulo= "Empoderando Jovens para o Futuro"
              paragrafo= "Atividade: Palestra motivacional sobre liderança jovem e transformação social."
              segundoParagrafo= "Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {tecTransf}
              alt= "Pessoas compartilhando conhecimento em uma reunião"
              subtitulo= "Tecnologia que Transforma"
              paragrafo= "Atividade: Workshop de introdução à programação e inovação digital."
              segundoParagrafo= "Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
              textoBotao= "Quero participar"
            />
          </article>

          <article>
            <Inforcard
              image= {primeiroEmp}
              alt= "Mulher acompanhando o desenvolvimento de um jovem em um ambiente de trabalho"
              subtitulo= "Carreira e Primeiro Emprego"
              paragrafo= "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
              segundoParagrafo= "Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
              textoBotao= "Quero participar"
            />
          </article>
        </section>
    </main>
  )
}

export default EventosEp
