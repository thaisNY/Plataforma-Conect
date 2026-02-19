import s from "./Inforcard.module.scss";

const Inforcard = (props) => {
  return (
    <article className={s.article}>
      <img src={props.image} alt={props.alt} />
      <h2>{props.subtitulo}</h2>
      <p>
        {props.paragrafo}
      </p>
      <p>
        {props.segundoParagrafo}
      </p>
      <button >{props.textoBotao}</button>
    </article>
  )
}

export default Inforcard
