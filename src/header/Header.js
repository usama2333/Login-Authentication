import React , {Fragment} from 'react';
import { Container , Typography , Box , AppBar , Toolbar , Button , IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/login');
  }

  return (
    <Fragment>
      <Container maxWidth='xl' >

   
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
            <MenuIcon />
          </IconButton>

         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>

       
          
        
          <Button onClick={handleClick} color="inherit" sx={{fontSize : '1rem' , fontWeight : 'bold' , ml : '0px'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
         
      </Container>
      
    </Fragment>
  )
}

export default Header
