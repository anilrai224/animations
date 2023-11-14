import React from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import First from './components/first/First'
import SideBar from './components/sidebar/SideBar'
import Animation from './components/animation/Animation'
import Stagger from './components/stagger/Stagger'
import ImageAnimation from './components/imageAnimation/ImageAnimation'
import Cursor from './components/cursor/Cursor'
import Parallex from './components/parallex/Parallex'
import Background from './components/background/Background'

const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Cursor/>
      <Background/>
      <SideBar/>
      <Parallex/>
      <First/>
      <Hero/>
      <Animation/>
      <ImageAnimation/>
      <Stagger/>
    </div>
  )
}

export default App