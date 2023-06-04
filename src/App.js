import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Projects from './pages/Projects';
import Navbar from './componets/navbar';
import Footer from './componets/footer';
import ProjectDisplay from './pages/ProjectDisplay';
import PreLoader from "./componets/preLoader";

function App() {
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => 
      {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setTimeout(() => {
              setcompleted(true);
            }, 1500);
          });
      },
    2000);
  }, []);

  return (
    <>
    {!completed ? ( /*enleve le ! devant completed si t'as pas de connexion en local*/
      <>
        <PreLoader/>
      </>
    ) : (
      <>
    <div className="App"> 
      <Router>  
        <Navbar/>
        <Routes> 
          <Route path='/' element={<Home />}/> 
          {/* <Route path='/projects' element={<Projects />}/> */}
          <Route path='/project/:id' element={<ProjectDisplay />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
    )}
  </>
);
}

export default App;
