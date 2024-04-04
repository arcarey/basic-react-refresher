import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import './App.css'

//pages
import AboutPage from './components/About/AboutPage';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        <Route path='/home' element={content()}>        
        </Route>
        <Route path='/about' element={<AboutPage></AboutPage>}>
        </Route>
        <Route path='*' element={<h1>404</h1>}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

function content()  {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div><h1>Vite + React</h1><div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div><p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </>
  )
}


export default App
