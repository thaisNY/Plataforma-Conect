import s from "./Inforcard.module.scss";
import Swal from 'sweetalert2'

const Inforcard = (props) => {

    const mostrarAlerta = () => {
      const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Inscrito com sucesso!"
    });
  }

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
      <button onClick={mostrarAlerta}>{props.textoBotao}</button>
    </article>
  )
}

export default Inforcard
