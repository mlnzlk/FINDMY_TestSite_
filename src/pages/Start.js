import React from 'react';
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import icon from '../images/icon.svg';
import text_logo from '../images/text_logo.svg';
import style from '../css/Start.module.css'
import { useNavigate } from 'react-router-dom';
function Start() {
  const navigate=useNavigate();
  const navigateTointro=()=>{
    navigate("/intro");
  }
  return (
    <>
      <img id={style.background} src={background}/>
      <img id={style.background_2} src={background2}/>
      <div id={style.view}>
          <img id={style.icon} src={icon}/>
          <img id={style.text_logo} src={text_logo}/>
          <div id={style.intro}>대학생 커플 매칭 시스템</div>
          <button id={style.start_btn} onClick={navigateTointro}>
            테스트 하러 가기
          </button>
      </div>
    </>
  )
}

export default Start;
