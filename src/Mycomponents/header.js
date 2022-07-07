import React from 'react'
import ProhrefTypes from 'prop-types'
//import {a } from "react-router-dom";
//{title}pass in header then use {title } in return ()
export default function header(props) {
  return (
    <>
       <nav >
  <div className="bg-light navflex">
    <a className="navbar-brand" href="/"><h1>{props.title}</h1></a>
    
  
  
  </div>
</nav>
    </>
  );

}

header.defaultProps ={
   title: "Your Title Here",
   
  }

header.propTypes ={ title:ProhrefTypes.string ,
}