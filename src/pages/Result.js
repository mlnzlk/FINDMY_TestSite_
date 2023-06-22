import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import result_img from '../images/result.svg'
import style from "../css/Result.module.css"
import { useNavigate } from 'react-router-dom';

function Result()  {
  const navigate=useNavigate();
  const navigateTokakaostart=()=>{
    navigate("/kakaostart");
  }
  return (
    <div>
        <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.small_t}>당신이 운명의 상대를 만날 장소는...</div>
            <div id={style.big_t}>조용하지만 힙한 동네, 성수</div>
            <img id={style.result_img} src={result_img}/>
            <div id={style.result}>
                <li id={style.result_t}>
                당신은 시끄러운 노래 보다는 어쩌구 당신은 어쩌구 저쩌구 시끄러운 노래 보다는 조용한 재즈바에서 데이트한다면 성공확률이 높을거예요.
                </li>
                <li id={style.result_t}>
                당신은 시끄러운 노래 보다는 어쩌구 당신은 어쩌구 저쩌구 시끄러운 노래 보다는 조용한 재즈바에서 데이트한다면 성공확률이 높을거예요.
                </li>
                <li id={style.result_t}>
                당신은 시끄러운 노래 보다는 어쩌구 당신은 어쩌구 저쩌구 시끄러운 노래 보다는 조용한 재즈바에서 데이트한다면 성공확률이 높을거예요.
                </li>
            </div>
            <button id={style.match_btn} onClick={navigateTokakaostart}>
            성수에서 데이트하러 가기
            </button>

        </div>
    </div>
  )
}

export default Result
