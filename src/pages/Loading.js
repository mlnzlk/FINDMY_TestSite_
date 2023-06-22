import React from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import loading from '../images/loading_icon.svg'
import style from  "../css/Loading.module.css"

function Loading() {
  return (
    <div>
        <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <img id={style.loading} src={loading}/>
            <div id={style.loading_text}>운명의 상대와 만날 장소로 가는 중...</div>
        </div>
    </div>
  )
}

export default Loading
