import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import Start from "./pages/Start"
import Intro from "./pages/Intro"
import Intro2 from './pages/Intro2';
import Info from './pages/Info';
import Quiz from './pages/Quiz';
import Loading from './pages/Loading';
import Result from './pages/Result'
import Home from './pages/Home';
import Login from './pages/Login'
import KaKaoLogin from './pages/KaKaoLogin';
import Kakaostart from './pages/Kakaostart';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}></Route>
          <Route path="/intro" element={<Intro/>}></Route>
          <Route path="/intro2" element={<Intro2/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/loading" element={<Loading/>}></Route>
          <Route path="/result" element={<Result/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/auth" element={<Login/>}></Route>
          <Route path="/kakaologin" element={<KaKaoLogin/>}></Route>
          <Route path="/kakaostart" element={<Kakaostart/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
