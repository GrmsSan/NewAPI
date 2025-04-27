import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from './components/menu';

import menuStyle from './components/menu.module.css';
import style from './App.module.css';
import imagemInicial from './assets/goku.gif';
import wallpaper from './assets/dragonBall.avif';

import Req from './Req';

 function Page(){
  const [Video, setVideo] = useState(false)
  const [Botao, setBotao] = useState(false)

  return(
    <>
    <main>
    <section className={style.pageSection}>
        <video autoPlay loop muted playsInline className={style.backgroundVideo}>
            <source src={wallpaper} type="video/mp4"/>
        </video>
        <img className={style.pageImage} src={imagemInicial} alt="imagem principal da page"/>
    
        

        <div className={style.pageInfo}>
          <button className={style.pageButton} onClick={ () => {setBotao(true)}}> Goku firs transformation
         </button>
        </div>

        <div className={style.pageVideo}>
  {Botao && (
    <div>
      <p className={style.pageSlogan}>
        Goku transforms into super Saiyan for the first time after seeing his friend die, awakening a beast within him.
      </p>
      <button className={style.pageButton2} onClick={() => { setVideo(true); }}>
        Click here and see the video
      </button>
    </div>
  )}
  {Video && (
    <iframe
      className={style.videoPlay}
      src="https://www.youtube.com/embed/K8a-aWLMJDw"
      title="Goku First Transformation"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )}
</div>
    </section>
    </main>
    </>
  );
}

export default function App() {
return (
    <>
      <Menu
        option01={<a href="/*" className={menuStyle.navLink}>Início</a>}
        option02={<Link to="/Req" className={menuStyle.navLink}>Dragon Ball API</Link>}
      />
        <Routes>
          <Route path='/*' element={<Page/>} />
          <Route path='./Req' element={<Req/>}/>
        </Routes>
    </>
  )
}