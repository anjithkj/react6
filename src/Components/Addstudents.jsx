
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = () => {
    var[students,setstudents]=useState({
        id:"",
        name:"",
        grade:""
    })
        const handleChange =(e)=>{
            const{ name,value}= e.target
            setstudents({...students,[name]:value})
                console.log(students)
        
        }
   const savedata =()=>{
   console.log("button clicked")
   axios.post("http://localhost:3005/student",students)
   .then(responce=>{
    alert("succesfully added")
    //in above line is used to inform the user or site the data is added
   })
   .catch(error=>{
    alert("Faild")
   })
   }
  return (
    <div>
      <Typography variant='h6'>Add sudents</Typography><br></br>

    <br></br>
      <TextField label="id" variant='outlined' name='id' value={students.id}onChange={handleChange }/><p></p>
      <TextField label="name"  variant='outlined' name='name' value={students.name}onChange={handleChange }/><p></p>
      <TextField label="grade" variant='outlined' name='grade' value={students.grade}onChange={handleChange }/><p></p>
    
      <Button variant='contained' onClick={savedata}>Submit</Button>
      
    </div>
  )
}

export default Addstudents
