import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
            {/* <Link to='/' style={{color:'white',textDcoration:'none'}}>React</Link> */}
      
          </Typography>
          <Button color="inherit" variant="text"><Link to='/Read' style={{color:'white',textDcoration:'none'}}>
            VIEW</Link> </Button>
          <Button color="inherit"  variant="text"><Link to='/Addstudents' style={{color:'white',textDcoration:'none'}}>ADD</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
export default Home