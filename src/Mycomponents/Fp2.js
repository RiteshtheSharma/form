import React, { useState } from 'react';


function Fp2(props) {
    setTimeout(()=>{},2000);
    const [post,setpost]=useState("");
    const [q,setq]=useState("");
    const [skills,setskills]=useState("");  
    const submit=((e)=>{let Alert = '';
    e.preventDefault();
    setpost(post.trim());
      setq(q.trim());
      setskills(skills.trim());
      console.log(skills.length);
    if(!(/^((([a-zA-Z]+\s){0,2})([a-zA-Z]+))$/.test(post))){
         Alert ="position is not correct or empty";}
    if(!(q.toLowerCase()==="postgraduate"||q.toLowerCase()==="undergraduate" || q.toLowerCase()==="matric" ||q.toLowerCase()==="intermediate")){
        Alert+="\nQualification is not correct or empty";
    }
   
    if(!/^((\w+\s){0,}(\w+))*$/.test(skills)){
        Alert+="\nskill is not correct or empty";
    
    }
    if(Alert.length>0)alert(Alert);

    else{  
         
         
      props.addfp({post,q,skills});
     
    }
  });

  return (
    <div className='min-container'>
<p className='text-center' ><b>{'* Are mendatory fields'}</b></p>
      <form action="" onSubmit={submit} id="fp2" className='container'>
      <label htmlFor='post'>*Post</label>
      <input type='text' name='post'  onChange={((e)=>{setpost(e.target.value)})} id='post' placeholder='Enter the position you want to apply' value={post} className='p-3 w-5'/>
      <label htmlFor='q' >*Qualification</label>
      <input type='text'  name='q' id='q' onChange={((e)=>{setq(e.target.value)})} placeholder='Enter your qualification(postgraduate/undergraduate/intermediate/matric)' value={q}  className='p-3 w-5'></input>
      <label htmlFor='skills' >*Skills <br/>{'(use "_" to separate each word of a skill eg software_engineering give 1 space after each skill  )'}</label>
      <input name='skills' id='skills' onChange={((e)=>{setskills(e.target.value)})} placeholder='enter your skills' title="use '_' to separate each word of a skill eg software-engineering give 1 space after each skill " value={skills}  className='p-3 w-5'></input>
      
      <button className="btn btn-sucess btn-sm " >Next</button>
    </form>
    </div>
  )
}

Fp2.propTypes = {

}

export default Fp2

