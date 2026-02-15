import s from  "./header.module.scss"
import { Link} from "react-router-dom"
import logo from "../../assets/icones/logo.png"

const Header = () => {
  return (
    <>
      <>
        <header className={s.header}>
          <Link to={"/"}>
            <img className={s.imgLogo} src={logo} alt="Imagem de logo do site CONNECT sendo representada por umam mão segurando um coração, simbolizando apoio" />
          </Link>
          
          <nav className={s.nav}>
            <Link className={s.link} to={"/doacao"}>Doação</Link>
            <Link className={s.link} to={"/voluntariado"}>Voluntariado</Link>
            <Link className={s.link} to={"/mentoria"}>Mentoria</Link>
            <Link className={s.link} to={"/eventosEP"}>Eventos</Link>
          </nav>
          <img className={s.imgUser} src="https://avatars.githubusercontent.com/u/71556315?v=4" alt="Imagem de usuario"/>
        </header>
      </>

      <nav className={s.navUser}>
        <Link>Thais Rodrigues</Link>
        <Link>Meu Voluntariado</Link>
        <Link>Configurações da conta</Link>
        <Link>Sair</Link>
      </nav>
    </>
  )
}

export default Header
