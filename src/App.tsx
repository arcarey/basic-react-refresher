// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

//pages
import AboutPage from './components/About/AboutPage';
import Header from './components/Main/Header';
import StoryDetail from './components/Main/Story-Detail';
import Home from './components/Main/Home';


function App() {

  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/story/:id' element={<StoryDetail/>} />        
          <Route path='/about' element={<AboutPage></AboutPage>} />
          <Route path='*' element={<h2>404 Story not found!</h2>} />
        </Routes>
      </Router>
    </>
  )
}


export default App
