/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect,useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dance.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.dance.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Aviators_Transparent_0">
            <skinnedMesh name="Aviators_Transparent_0001" geometry={nodes.Aviators_Transparent_0001.geometry} material={materials['Transparent.001']} skeleton={nodes.Aviators_Transparent_0001.skeleton} />
            <skinnedMesh name="Aviators_Transparent_0001_1" geometry={nodes.Aviators_Transparent_0001_1.geometry} material={materials['Glass_tinted.001']} skeleton={nodes.Aviators_Transparent_0001_1.skeleton} />
            <skinnedMesh name="Aviators_Transparent_0001_2" geometry={nodes.Aviators_Transparent_0001_2.geometry} material={materials['Gold_metallic.001']} skeleton={nodes.Aviators_Transparent_0001_2.skeleton} />
          </group>
          <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.004']} skeleton={nodes.Cube.skeleton} />
          <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.005']} skeleton={nodes.Cube001.skeleton} />
          <skinnedMesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.004']} skeleton={nodes.Cube003.skeleton} />
          <skinnedMesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials['Material.004']} skeleton={nodes.Object_3.skeleton} />
          <skinnedMesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['None.001']} skeleton={nodes.Object_4.skeleton} />
          <skinnedMesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials['Material.005']} skeleton={nodes.Object_4001.skeleton} />
          <skinnedMesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.005']} skeleton={nodes.Sphere.skeleton} />
          <skinnedMesh name="Sphere001" geometry={nodes.Sphere001.geometry} material={materials['Material.006']} skeleton={nodes.Sphere001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dance.glb')
export default Model;