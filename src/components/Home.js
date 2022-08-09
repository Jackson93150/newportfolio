import React, {Suspense} from 'react'
import "./Home.css"
import title from '../assets/title.png'
import Ellipse from '../assets/Ellipse.svg'
import Group from '../assets/Group.svg'
import palmier from '../assets/palmier.png'
import {Canvas} from "@react-three/fiber"
import Furtif from "../Furtif"

function Home() {
  return (
    <div className='container'>
        <div className='home'>
            <div className='Title'>
              <img src={title} alt='title' id='title'/>
              <img src={Ellipse} alt='Ellipse' id='ellipse'/>
              <img src={Group} alt='Group' id='group'/>
              <img src={palmier} alt='palmier' id='palmier'/>
              <div className='Jacky'>
                <Canvas camera={{zoom:0.7}}>
                  <directionalLight intensity={0.5}/>
                  <ambientLight intensity={0.2}/>
                  <pointLight position={[30, 10, 20]} intensity={1} />
                  <Suspense fallback={null}>
                    <Furtif/>
                    <Furtif position={[0,0,0]}/>
                  </Suspense>
                </Canvas>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home