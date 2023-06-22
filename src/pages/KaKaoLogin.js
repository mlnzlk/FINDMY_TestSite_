import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { REST_API_KEY,REDIRECT_URI } from './KakaoLoginData';
import { useEffect } from 'react';

function KaKaoLogin() {
    const location=useLocation();
    const navigate=useNavigate();
    const KAKAO_CODE=location.search.split('=')[1];
    const getKakaoToken=()=>{
        fetch('"https://kauth.kakao.com/oauth/token',{
            mehtod:'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded',
            body:`grant_type=authorization_code&response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code${KAKAO_CODE}`
        }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.access_tocken){
                localStorage.setItem('token',data.access_tocken);
            }else{
                navigate('/');
            }
        });
    };

    useEffect(()=>{
        if(!location.search) return;
        getKakaoToken();
    },[]);
  return (
    <div>KaKaoLogin</div>
  )
}

export default KaKaoLogin
