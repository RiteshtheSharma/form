import React from 'react'

export const footer = () => {
let FooterStyle={position :"relative",
  top:"0",
  width:"100%",

 }
  return (
    <footer className="bg-dark text-light py-3" style={FooterStyle} >
      <p className='text-center'>
      Copyright &copy; RiteshtheSharma.com
      </p>
    </footer>
  );
}

export default footer