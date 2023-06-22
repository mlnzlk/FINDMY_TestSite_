import React from 'react'
import { REST_API_KEY,REDIRECT_URI } from './KakaoLoginData';
import axios from 'axios'
function Login() {

    const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const url=`http://116.47.177.102/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/redirect`
    const handleLogin=()=>{
        window.location.href=KAKAO_AUTH_URL;
    }

    const REQUEST=()=>{
      const option={
          url:'',
          method:'',
      };
      axios(option);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <a href={url}>Login</a>
    </div>
  )
}

export default Login
