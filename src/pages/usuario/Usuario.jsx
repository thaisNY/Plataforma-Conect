import s from "./usuario.module.scss";
import { IoLocationOutline } from "react-icons/io5";

const Usuario = () => {
  return (
    <main className={s.main}>
       <section>
        <img src="https://avatars.githubusercontent.com/u/71556315?v=4" alt="Foto de perfil do usuário" />
        <div className={s.div}>
          <h1>Thais Rodrigues</h1>
          <h2>Voluntária Ativa</h2>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
      
          <ul>
            <li> <IoLocationOutline />Caruaru - PE</li>
            <li>thais@email.com</li>
            <li>Membro desde Janeiro 2022</li>
          </ul>

          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>

        </div>
       </section>
    </main>
  )
}

export default Usuario
