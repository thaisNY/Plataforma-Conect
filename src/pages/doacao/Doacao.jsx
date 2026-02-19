import Inforcard from "../../components/infocard/Inforcard";
import igFamilia from "../../assets/imagens/igFamilia.png";
import igJovem from "../../assets/imagens/igJovem.png";
import projEscola from "../../assets/imagens/projEscola.png";

const Doacao = () => {
  return (
    <main>
        <h1>Pagina de Doação</h1>
        <section>
          <article>
            <Inforcard
              image= {igFamilia}
              alt= "Uma pessoa segurando uma caixa de alimentos"
              subtitulo= "Instituto grande familia"
              paragrafo= "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
              textoBotao= "Quero Doar"
            />
          </article>

          <article>
            <Inforcard
              image= {projEscola}
              alt= "Livros empilhados em uma mesa"
              subtitulo= "Projeto Futuro na Escola"
              paragrafo= "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
              textoBotao= "Quero Doar"
            />
          </article>

          <article>
            <Inforcard
              image= {igJovem}
              alt= "Pessoas consertando computadores"
              subtitulo= "Instituto Conecta Jovem"
              paragrafo= "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
              textoBotao= "Quero Doar"
            />
          </article>
        </section>
    </main>
  )
}

export default Doacao
