import style from './menu.module.css';
import logo from '../assets/logoDragon.webp';

export const Menu = (props) => {
    return(
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navbar}`}>
      <div className="container-fluid">
      <img src={logo} alt="logo da nav" height={"40px"} width={"auto"}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`navbar-nav ${style.navbarNav}`}>
            {props.option01}
            {props.option02}
          </div>
        </div>
      </div>
    </nav>
    </>
    )
}