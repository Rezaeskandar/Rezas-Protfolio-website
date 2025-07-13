"use client"
import { usePathname } from 'next/navigation'
import React, { useState, useEffect} from 'react'

export const Navigation = () => {
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [isActive, setisActive] = useState(path)
    const [prevPth, setPrevPth] = useState("/")

    useEffect(() => {
      if(prevPth !== path)
        {
            setisRouting(true)
        }
    
    
    }, [path,prevPth])
    
  return (
    <div>Navigation</div>
  )

}
export default Navigation