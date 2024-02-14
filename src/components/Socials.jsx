import { color } from 'framer-motion'
import React from 'react'

const Socials = ({ customFunction, customClass, text, link }) => {
  return (
    <>
    <button 
        type="button"
        onClick={ customFunction}
className={` bg-white bg-transparent hover:text-white transition ease-in-out duration-200 border rounded-full hover:bg-black focus:ring-4 focus:outline-none text-sm px-[0.5rem] py-[0.5rem] m-2 lg:mx-1.5 text-center inline-flex items-center me-2 mb-2 ${customClass}`}

        aria-label={ text }>
       <a href={ link } target="_blank">{ text }</a>
      </button>
    </>
  )
}

export default Socials