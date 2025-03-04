import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formData, setformData] = useState({name: "", email:"", message:""})

  const handlechange= (e) => {
    setformData({...formData,[e.target.name]: e.target.value});
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    const webHookurl = "https://hook.eu2.make.com/f2ln4yuiiku6599x9b9nhqguiy6e8qu7";


    try {
      const response = await fetch(webHookurl,{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(formData),
      });

      if(response.ok) {
        console.log('Webhook trigeered successfully')
      }else {
        alert('failed')
      }
    }catch(err) {
      console.log('An error occured',err);
    }
  };

  return (
    <form>
      <input name='name' type='text' placeholder='Your Name' onChange={handlechange} required/>
      <input name='email' type='email' placeholder='Email' onChange={handlechange} required/>
      <input name='message' type='text' placeholder='Your Message' onChange={handlechange} required/>
      <button onClick={handlesubmit}>Submit</button>
    </form>
  )
}

export default App