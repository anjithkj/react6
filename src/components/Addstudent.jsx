import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
    var [input,setInput]=useState({
        name:'',
        grade:''
    })

    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({ ...input,[name]:value})
    }
    const readValues =() =>{
    console.log("clicked")//whenver butten clicked it will show in console
    axios.post("http://localhost:3005/students",input)//only in post method we pass 
    .then(response=>{
        alert("sucess")
    })
    .catch(err=>console.log(err))
    }
  return (
    
    <div>
    
    <br/>
    <TextField  label="Name" name='name'  variant="outlined"
    value={input.name}onChange={inputHandler} />
    <br/>
    <br/>
    <TextField  label="Grade" name='grade' variant="outlined"
    value={input.grade} onChange={inputHandler} />
    <br/>
    <br/>
    <Button variant="contained"  onClick={readValues}color="success">
  SUBMIT
  <br/>
</Button>
    </div>
    
  )
}

export default Addstudent
