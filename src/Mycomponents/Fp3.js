import React, { useState } from 'react';

function Fp3(props) {
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }
    const [linkedin,setlinkedin]=useState("");
    const [p,setp]=useState("");
    const [say,setsay]=useState("");  
    const submit=((e)=>{let Alert = '';
    e.preventDefault();
    setsay(say.trim());
      setp(p.trim());
      setlinkedin(linkedin.trim());
      
    if(!(/^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/.test(linkedin))){
         Alert ="linkedin url is not correct or empty";}
    if(!((p.length===0 || validURL(p) )))
    {
        Alert+="\npersonal url is not correct ";
    }
   
    if(!((say.length===0 || /^.+$/.test(say)))){
        Alert+="\nThis is not meaningful text to say";
    
    }
    if(Alert.length>0)alert(Alert);
   
    else{ 
      props.addfp({linkedin,p,say});
     
    }
  });

  return (
    <div className='min-container'>
<p className='text-center' ><b>{'* Are mendatory fields'}</b></p>
      <form action="" onSubmit={submit} id="fp2" className='container'>
      <label htmlFor='linkedin'>*Linked in profile url</label>
      <input type='text' name='linkedin'  onChange={((e)=>{setlinkedin(e.target.value)})} id='linkedin' placeholder='Enter your linked in url' value={linkedin} className='p-3 w-5'/>
      <label htmlFor='p' >personal web or blog url</label>
      <input type='text'  name='p' id='p' onChange={((e)=>{setp(e.target.value)})} placeholder='If you have your personal website to show your project then enter its url' value={p}  className='p-3 w-5'></input>
      <label htmlFor='say' >Anything to say</label>
      <textarea rows={10} cols={30} name='say' id='say' onChange={((e)=>{setsay(e.target.value)})} placeholder='Do you want to say something?'  value={say}  className='p-3 w-5'></textarea>
      
      <button className="btn btn-danger btn-sm " >Submit</button>
    </form>
    </div>
  )
}
Fp3.propTypes = {

}

export default Fp3

