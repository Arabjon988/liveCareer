import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

import React from "react";
import "./App.css";

// import components
import Nav from "./components/navbar/Nav";



// import pages
import Home from "./pages/home/Home";
import CV from "./pages/cv/CV";
import Resume from "./pages/resume/Resume";
import Question from "./pages/question/Question";
import Resourse from "./pages/resourse/Resourse";
import Footer from "./components/footer/Footer";
import CoverLetter from "./pages/cover-let/CoverLetter";

export default function App() {
  return (
    <div className="app">
    <Context.Provider value={''} >
      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/cv' element={<CV/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/question' element={<Question />} />
          <Route path='/resource' element={<Resourse />} />
          <Route path='/coverLetter' element={<CoverLetter />} />


        </Routes>
    
        <Footer />
        
      </BrowserRouter>
    </Context.Provider>
    </div>
  );
}

