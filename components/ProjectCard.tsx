"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props{
    image:string;
    title:string;
    text:string;
}

const ProjectCard = ({image,title, text}:Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div className=''
    ></div>
  )
}

export default ProjectCard