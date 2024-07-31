import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();

  const handleDynamicNavigation=(targetRoute)=>{
    navigate(targetRoute)
    console.log(targetRoute)
  }

  const handleConditionalNavigation=(shouldNavigate)=>{
    if(shouldNavigate){
      navigate('/about')
    }else{
      navigate('/service')
    }
  }
  return (
    <>
      <h1>hello home page</h1>

      <button onClick={()=>handleConditionalNavigation(true)}>Go to About page</button><br/>
      <button onClick={()=>handleConditionalNavigation(false)}>Go to service page</button><br/>
    </>
  )
}

export default Home;
