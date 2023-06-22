import React,{useState,userEffect} from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import style from "../css/Info.module.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Info() {
    const [gender,setGender]=useState("");
    const [old,setOld]=useState("");

    const onGender=(e)=>{
        if(gender!==e.target.value){setGender(e.target.value);}
        else{setGender("");}
    }

    const onOld=(e)=>{
        if(old!==e.target.value){setOld(e.target.value);}
        else{setOld("");}
    }
    const navigate=useNavigate();
    const navigateToquiz=()=>{
        navigate("/quiz");
    }

    const REQUEST=()=>{
        const option={
            url:'',
            method:'',
            data:{
                gender:gender,
                old:old
            }
        };
        axios(option);
        navigateToquiz();
    }
  return (
    <>
        <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.text}>
                <div className={style.t_1}>더 정확한 매칭을 위해</div>
                <div className={style.t_1}>아래 질문에 답해주세요</div>
            </div>
            
            <div id={style.my_gender}>나의 성별은</div>
            <div id={style.select_gender}>
                <button id={(gender=="man"?style.gender_m_active : style.gender_m)} value="man" onClick={onGender}>남자</button>
                <button id={(gender=="woman" ?style.gender_w_active : style.gender_w)} value="woman" onClick={onGender}>여자</button>
            </div>
            <div id={style.my_old}>나의 태어난 연도는</div>
            <div id={style.select_old}>
                <button className={(old=="1" ? style.old_active:style.old)} value="1" onClick={onOld}>00~04년생</button>
                <button className={(old=="2" ? style.old_active:style.old)} value="2" onClick={onOld}>95~99년생</button>
                <button className={(old=="3" ? style.old_active:style.old)} value="3" onClick={onOld}>94년생</button>
            </div>
            <button id={style.test_btn} onClick={REQUEST}>테스트 시작하기</button>
        </div>
    </>

  )
}

export default Info
