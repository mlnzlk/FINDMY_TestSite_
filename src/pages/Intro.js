import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import style from "../css/Intro.module.css"
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate=useNavigate();
  const navigateTointro2=()=>{
    navigate("/intro2");
  }
  return (
    <div>
        <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.text}>
                <div className={style.t_1}>안녕하세요</div>
                <div className={style.t_1}>대학생 미팅 서비스</div>
                <span id={style.t_2}>내꺼찾기</span><span class="t_1">입니다.</span>
            </div>
            <div id={style.touch} onClick={navigateTointro2}>화면을 터치해 주세요</div>
        </div>
    </div>
  )
}

export default Intro
