
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';import React from 'react'

const Home = () => {
    
  return (
    <div>
      
  
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button src="http://localhost:3005/teachers">Teachers</Button>
      <Button>Teacher</Button>
      <Button>Three</Button>
    </ButtonGroup>
    </div>
  )
}

export default Home
