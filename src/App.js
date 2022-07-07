import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/header';
import Footer from  './Mycomponents/footer';
import Fp1 from './Mycomponents/Fp1';
import Fp2 from './Mycomponents/Fp2';
import Fp3 from './Mycomponents/Fp3';
import Response from './Mycomponents/Response';
import { useState } from 'react';
//pattern.test(text)
function App() {const [state ,setstate]=useState(0);
  let Fp =(({state,})=>{return (state===0)?( <Fp1 addfp={addfp}/>  ):((state===1)?(<Fp2 addfp={addfp}/>):((state===2)?(<Fp3 addfp={addfp}/>):(<Response f={()=>{setaobj([]);localStorage.clear();setstate(0);}} array={JSON.parse(localStorage.getItem('form'))}/>)))});
  const [aobj,setaobj]=useState([])
  localStorage.setItem('form',JSON.stringify(aobj));
  let addfp=((o)=>{let to=JSON.parse(localStorage.getItem('form'));
    to.push(o);
    localStorage.setItem('form',JSON.stringify(to))
    setstate((state+1)%4);
    
    setaobj(to);
    

  });

  return (
    <>
    <Header title={'Job Application'}/>
    <Fp state={state}/>
    <Footer/>
    </>
  );
}

export default App;
