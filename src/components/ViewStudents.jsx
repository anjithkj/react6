import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudents = () => {
  var[students,setStudents]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:3005/students")
      .then(response=>{           //if axios is sucessfully return
        setStudents(students=response.data)
      console.log(response.data)
      })

      .catch(error=>console.log(error))
  },[])

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >NAME</TableCell>
            <TableCell >GRADE</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((value,index)=>{
            return<TableRow key={index} >
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.grade}</TableCell>
              
            </TableRow>
          })
          }
        </TableBody>
       
      </Table>
    </TableContainer>
    </div>
  )
}

export default ViewStudents
