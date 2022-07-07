import React, { useState } from 'react';


const Fp1=(props)=> {

  const [name,setname]=useState("");
  const [college_name,setcollege_name]=useState("");
  const [email,setemail]=useState("");
  const submit=((e)=>{let Alert = '';
    e.preventDefault();
    setname(name.trim());
      setcollege_name(college_name.trim());
      setemail(email.trim());
    if(!(/^((([a-zA-Z]+\s){0,2})([a-zA-Z]+))$/.test(name))){
         Alert ="Name is not correct or empty";}
    if(!(/^((([a-zA-Z]+\s){1,})([a-zA-Z]+))$/.test(college_name)) ){
        Alert+="\nCollege name is not correct or empty";
    }
    if(!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)){
        Alert+="\nemail id is not correct or empty";
    
    }
    if(Alert.length>0)alert(Alert);

    else{ 
      props.addfp({name,college_name,email});
     
    }
  });

  return (
<div className='min-container'>
<p className='text-center' ><b>{'* Are mendatory fields'}</b></p>
      <form action="" onSubmit={submit} id="fp1" className='container'>
      <label htmlFor='name'>*Name</label>
      <input type='text' name='name'  onChange={((e)=>{setname(e.target.value)})} id='name' placeholder='Enter Name' value={name} className='p-3 w-5'/>
      <label htmlFor='collegename' >*College Name</label>
      <input type='text'  name='collegename' id='collegename' onChange={((e)=>{setcollege_name(e.target.value)})} placeholder='College name' value={college_name}  className='p-3 w-5'></input>
      <label htmlFor='email' >*Email id</label>
      <input name='email' id='email' onChange={((e)=>{setemail(e.target.value)})} placeholder='email id' value={email}  className='p-3 w-5'></input>
      
      <button className="btn btn-sucess btn-sm " >Next</button>
    </form>
    </div>
  );
}



export default Fp1

