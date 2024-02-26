import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects  from './components/Projects';
import HeroEnd from './components/HeroEnd';
import Skills from './components/Skills';
import Skeleton from './components/Skeleton';
import {lazy, Suspense} from "react"
const Home = lazy(()=>import("./components/Home"))
function App() {
  
  return (
    <>
    <Suspense fallback={<Skeleton/>}>
    <Navbar/>
      <Home/>
    <HeroEnd/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </Suspense>
    </>
  )
}

export default App
