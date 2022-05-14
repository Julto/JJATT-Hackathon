import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import bagr from '../src/background.png';
import lOET from '../src/lifeOnEdgeText.png';
import p2crisis from '../src/p2Crisis.png';
import authors from '../src/authors.png';
function App() {

  return (
    <div>
      <Parallax pages = {4}>
        <ParallaxLayer 
         offset = {0}
         speed={0.1}
         factor = {2}
         style={{ 
          backgroundImage: `url(${bagr})`, 
          backgroundSize: 'cover',
         }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset = {1}
          speed = {0.25}
          factor = {1}
          style={{ 
            backgroundImage: `url(${p2crisis})`, 
            backgroundSize: 'cover',
           }}
        >
        </ParallaxLayer>
          
        <ParallaxLayer>
          <img src={authors}></img>
        </ParallaxLayer>


        <ParallaxLayer 
          speed = {0.5}
          sticky = {{start: 0, end: 1.75}}
        >
          <img src={lOET}></img>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
