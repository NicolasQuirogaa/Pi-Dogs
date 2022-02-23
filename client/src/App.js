import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreation from './components/DogCreation/DogCreation';
import About from './components/About/About';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<LandingPage/>} /> 
          <Route path='/home' element={<Home/>} />
          <Route path='/dogs/:id' element={<DogDetail/>} />
          <Route path='/newDog/' element={<DogCreation/>} />
          <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;