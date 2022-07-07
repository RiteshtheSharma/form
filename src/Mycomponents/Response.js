import React from 'react'
import PropTypes from 'prop-types'

function Response(props) {
  
  console.log("props = ");
  console.log("props = ",props);
  let l=[]
         for(let t of props.array[1].skills.split(' '))l.push(<li key={(l.length).toString()}>{t.split('_').join(' ')}</li>);
  return (
    <div className='min-container'>
      <p className='text-center' ><b>Response</b></p>
      <div className="container container-start">
      <div>
      <b>Name : </b><samp>{props.array[0].name}</samp>
      </div>
      <div>
      <b>College name : </b><samp>{props.array[0].college_name}</samp>
      </div>
      <div>
      <b>email : </b><samp>{props.array[0].email}</samp>
      </div>
      <div>
      <b>Position applying for : </b><samp>{props.array[1].post}</samp>
      </div>
      <div>
      <b>Qualification : </b><samp>{props.array[1].q}</samp>
      </div>
      <div>
      <b>Skills : </b>
      <ol className='container-start'>
     
      {l}
      </ol>
      </div>
      <div>
      <b>Qualification : </b><samp>{props.array[1].q}</samp>
      </div>
      <div>
      <b>Linked in contact : </b><samp>{props.array[2].linkedin}</samp>
      </div>
      {props.array[2].p.length>0?<div>
        <b>Personal website link : </b><samp>{props.array[2].p}</samp>
      </div>:''}
      {props.array[2].say.length>0?<div>
        <b>Applier 's query' : </b><samp>{props.array[2].say}</samp>
      </div>:''}
      </div>
      <button className="btn btn-sucess btn-sm text-center m-12 " onClick={()=>{props.f()}}>Submit another response</button>
    </div>
  )
}

Response.propTypes = {

}

export default Response

