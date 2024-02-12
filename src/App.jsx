import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects  from './components/Projects';
import HeroEnd from './components/HeroEnd';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <HeroEnd/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
