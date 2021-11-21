import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Form from './components/SignUpPages/Form';
import {Route, Link, Routes} from "react-router-dom"
import React, { useEffect } from 'react';
import SignUp from './pages/SignUp';
import Login from "./pages/Login"


export const GlobalCtx = React.createContext(null)
 

function App() {
  const [gState, setGState] = React.useState({ url:"http://localhost:7000", token: null});

//seeing if already logged in
React.useEffect(()=>{
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
              <Route exact path = "/" element={<h1>Home</h1>}/>
              <Route path ="/signup" element={<SignUp/>}/>
              <Route path ="/login" element={<Login/>}/>
              <Route path ="/dashboard" element={<h1>Dashboard</h1>}/>
            </Routes>
        {/* <Form/> */}
        <Main/>
        <Footer />
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
