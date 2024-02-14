import React from 'react'

const Button = ({ customFunction, customClass, text, link }) => {
  return (
    <>
    <button 
        type="button"
        onClick={ customFunction} 
        className={`text-white font-spartan bg-green-500 hover:bg-green-700 transition ease-in-out duration-200 font-medium rounded-lg lg:text-lg text-sm lg:px-6 px-4 mx-4 py-[0.5rem] lg:py-[0.70rem] -mt-2 ${customClass}`}
        aria-label={ text }>
       <a href={ link } target="_blank">{ text }</a>
      </button>
    </>
  )
}

export default Button