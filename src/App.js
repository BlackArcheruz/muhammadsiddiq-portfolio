import { useState, useEffect } from "react";
import Navbar1 from "./components/Navbar/Navbar"
import Loading from './components/Loading/Loading'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000)
  },[]);

  return (
    <>
  {loading === false ? <div className="app">
      <Navbar1/>
    </div>:<Loading/>}
    </>
  );
}

export default App;
