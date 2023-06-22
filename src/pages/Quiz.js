import React,{useState,userEffect} from 'react'
import background from '../images/background.png'
import background2 from '../images/background_2.svg'
import test_logo from'../images/test_logo.svg'
import test1 from '../images/test1.svg'
import arrow1 from '../images/arrow1.svg'
import arrow2 from '../images/arrow2.svg'
import gift from '../images/gift.svg'
import style from "../css/Quiz.module.css"
import axios from 'axios'
import {Line} from 'rc-progress';
import { useNavigate } from 'react-router-dom';

function Quiz() {
    const [number,setNumber]=useState(1);
    const [showBtn,setShowBtn]=useState(false);
    const [answer,setAnswer]=useState("");
    const [answer_list,setAnswerList]=useState({
        0:null,
        1:null,
        2:null,
        3:null,
        4:null,
        5:null,
        6:null,
        7:null,
        8:null,
        9:null,
        10:null,
        11:null,
    });
    const navigate=useNavigate();
    const navigateToresult=()=>{
        navigate("/result");
    }

    const addCount=()=>{
        setAnswerList((preState)=>{return{...preState,[number]:answer}});

        setNumber(number+1);
        setAnswer("");
        if(number==1)
        {
            var obj=document.getElementById('arrow1');
            obj.style.visibility="visible";
        }
        else if(number==11)
        {
            setShowBtn(true)
            var obj=document.getElementById('arrow2');
            obj.style.visibility="hidden";
        }

    }
    const subCount=()=>{
        setNumber(number-1);
        if(showBtn===true)
        {
            setShowBtn(false);
        }
    }
    const onAnswer=(e)=>
    {
        if(answer!==e.target.value){setAnswer(e.target.value);}
        else{setAnswer("");}
    }

    const REQUEST=()=>{
        const option={
            url:'',
            method:'',
            data:{
            }
        };
        axios(option);
        navigateToresult();
    }

    const arrow1_style={
        position:'relative',
        top:'-10vh',
        visibility:'hidden'
    }
    const arrow2_style={
        position:'relative',
        top:'-10vh'
    }

    let data=[
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
        {qustion:"연인과의 첫번째 기념일!\n당신이 준비한 선물은?",
        answer1:"역시 선물은 비싼게 최고!\n고가의 유명 브랜드 제품",
        answer2:"전에 갖고 싶다고 스쳐지나가듯이\n말했던 귀여운 인형",
        img:test1},
        {qustion:"연인에게 50만원 한도 선물을\n하려 한다.어떻게 줄까?",
        answer1:"연인 취향의 물건 3개정도를\n준비해서 50만원을 채우자",
        answer2:"50만원짜리 한 가지 물건만 사야지!",
        img:gift},
    ]
  return (
    <div>
        <img id={style.background} src={background}/>
        <img id={style.background_2} src={background2}/>
        <div id={style.view}>
            <div id={style.header}>
                <img id={style.test_logo} src={test_logo}/>
                <Line id={style.progress_bar} percent={8.5*number} strokeWidth={3} strokeColor="#F17896" trailColor='white' trailWidth={3}/>
                <div id={style.number}>{number}/12</div>
            </div>
            <div className={style.test_section}>
                <div className={style.img_section}>
                    <img id='arrow1' src={arrow1} onClick={subCount}
                    style={arrow1_style}/>
                    <img className={style.test_img} src={data[number-1]['img']}/>
                    <img id='arrow2' src={arrow2} onClick={addCount}
                    style={arrow2_style}/>
                </div>
                <div className={style.q_text}>{data[number-1]['qustion']}</div>
                <div className={style.answer}>
                    <button className={(answer=="a" ? style.btn_active:style.btn)} value="a" onClick={onAnswer}>{data[number-1]['answer1']}</button>
                    <button className={(answer=="b" ? style.btn_active:style.btn)} value="b" onClick={onAnswer}>{data[number-1]['answer2']}</button>
                </div>
                {showBtn?(<button id={style.end_btn} onClick={navigateToresult}>제출</button>):null}
            </div>
        </div>
    </div>
  )
}

export default Quiz
