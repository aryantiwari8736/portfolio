import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import First from '../firstcomponent/First'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'

import './Home.css'
function Home() {
  return (
    <div>
   <Navbar/>
   <div className='partition'>
    <div className='sidepart'> <a href="https://github.com/aryantiwari8736"><i class="fa-brands fa-github fa-2x icoco1"></i></a><a href=""><i class="fa-solid fa-link fa-2x icoco2"></i></a></div>
    <div>
    <First/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
<div className='sidepart2'> <a href="https://www.linkedin.com/in/aryan-tiwari-b397b8229/" target="_blank"><i class="fa-brands fa-linkedin fa-2x icoco1"></i></a> <a href="https://twitter.com/aryantiwari_14" target="_blank"><i class="fa-brands fa-twitter fa-2x icoco2"></i></a></div>
   </div>
</div>
  )
}

export default Home
