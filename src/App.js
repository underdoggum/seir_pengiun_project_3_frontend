import Header from './components/Header';
import Main from './components/Main';
import MainCopy from './components/MainCopy';
import Footer from './components/Footer';
// import Form from './components/SignUpPages/Form';
import {Route, Link, Routes} from "react-router-dom"
import React, { createContext, useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from "./pages/Login"
import Home from "./pages/Home"



export const GlobalCtx = createContext(null)
 

function App() {
  const [gState, setGState] = useState({ url:"http://localhost:7000", token: null});

//seeing if already logged in
useEffect(()=>{
  const token = JSON.parse(window.localStorage.getItem("token"))
  console.log(token)
  if (token){
    setGState({...gState, token: token.token})
  }
},[])

  return (
    <GlobalCtx.Provider value={{ gState, setGState }}>
      <div className="App">
        <Link to="/"><h1>UNWASTED</h1></Link>
        <Header/>
            <Routes>
              <Route path = "/*" element={ gState.token ? <Main/> :  <Home/> }/>
              <Route path ="/signup" element={<SignUp/>}/>
              <Route path ="/login" element={<Login/>}/>
              {/* <Route path ="/dashboard" element={<h1>Dashboard</h1>}/> */}
            </Routes>
        {/* <Form/> */}
        {/* <Main/> */}
        <Footer/>
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;


//