import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import icon from '../images/icon.svg';
import text_logo from '../images/text_logo.svg';
import style from "../css/Home.module.css"
function Home() {
  return (
    <>
       <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.logo_section}>
                <img id={style.logo} src={icon}/>
                <img id={style.title} src={text_logo}></img>
            </div>
            <div id={style.text}>comming soon...</div>
        </div>
    </>
  )
}

export default Home
