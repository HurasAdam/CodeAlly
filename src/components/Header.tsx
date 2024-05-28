import React from 'react'
import scrollButton from "../../assets/images/scrollButton.png"
const Header:React.FC = () => {
  return (
    <div
    className='w-full h-screen flex md:flex-row flex-col items-center relative'
    >
<div className="absolute left=1/2 bottom-8 z-50 -translate-x-1/2 cursor-pointer md:block hidden">
    <img src={scrollButton} alt="" />
</div>

    </div>
  )
}

export default Header