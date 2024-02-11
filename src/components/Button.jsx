import React from 'react'

const Button = ({ customFunction, customClass, text, link }) => {
  return (
    <>
    <button 
        type="button"
        onClick={ customFunction} 
        className={`text-white bg-green-500 hover:bg-green-700 transition ease-in-out duration-200 font-medium rounded-lg text-lg px-6 mx-4 py-[0.70rem] text-center ${customClass}`}
        aria-label={ text }>
       <a href={ link } target="_blank">{ text }</a>
      </button>
    </>
  )
}

export default Button