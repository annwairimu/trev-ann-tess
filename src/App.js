import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'
import Contact from './Pages/Contact/Contact'
import NavBar from './Components/NavBar';

function App() {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/about' element={<About />} />
        <Route path = '/project' element={<Project />} />
        <Route path = '/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
