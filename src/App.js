import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar1 from "./components/Navbar/Navbar"
import Loading from './components/Loading/Loading'
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000)
  },[]);

  return (
    <>
  {loading === false ? <div className="app">
    <Router>
      <Navbar1/>
      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>:<Loading/>}
    </>
  );
}

export default App;
