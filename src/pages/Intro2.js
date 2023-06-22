import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import style from "../css/Intro.module.css"
import { useNavigate } from 'react-router-dom';
function Intro2() {
  const navigate=useNavigate();
  const navigateToinfo=()=>{
    navigate("/info");
  }
  return (
    <div>
      <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.text}>
                <div className={style.t_1}>연애 성향 설문 결과를 바탕으로</div>
                <div className={style.t_1}>대학생 미팅을 주선하는 서비스 입니다</div>
            </div>
            <div id={style.touch} onClick={navigateToinfo}>화면을 터치해 주세요</div>
        </div>
    </div>
  )
}

export default Intro2
