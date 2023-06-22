import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import style from "../css/kakaostart.module.css"
import { useNavigate } from 'react-router-dom';


function Kakaostart()  {
    const navigate=useNavigate();
    const navigateToKakaoLogin=()=>{
      navigate("/kakaoLogin");
    }
    return (
        <div>
            <img id={style.background} src={background}/>
            <img id={style.background_2} src={background2}/>

            <div id={style.view}>
                <div id={style.big_t}>상대 매칭을 위해 회원가입을 해주세요!</div>            <div id={style.small_t}>당신이 운명의 상대를 만날 장소는...</div>
                <div id={style.small_t}>카카오로 시작하기</div>
                <button id={style.login_btn} onClick={navigateToKakaoLogin}>
                카카오 로그인
                </button>
            </div>
        </div>

    )
    }
    
    export default Kakaostart