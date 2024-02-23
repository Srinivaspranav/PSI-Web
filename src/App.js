import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Clubs from './pages/Clubs';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Contact from './pages/Contact';


export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/programmes" element={<Programs />} />
        <Route path="/events" element={<Events />}/>
        <Route path="/clubs" element={<Clubs />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/nopage" element={<NoPage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/Login" element={<Login />}/>

      </Routes>
      </BrowserRouter>

    </div>

  )

}
