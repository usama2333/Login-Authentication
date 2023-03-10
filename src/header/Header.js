import React , {Fragment, useContext} from 'react';
import { Container , Typography , Box , AppBar , Toolbar , Button , IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';


const Header = () => {
 const authCtx = useContext(AuthContext);
 const isLoggedIn = authCtx.isLoggedIn;
 const logoutHandler = () => {
    authCtx.logout();
    history.replace('/login');
 }

  let history = useHistory();
 

  const handleClick = () => {
    history.push('/login');
  }

  const profileHandler = () => {
    history.push('/welcome');
  }


  // const logoutHandler = () => {
  //   history.replace('/');
  // }

  const singupClick = () => {
    history.push('/');
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
        
          {isLoggedIn && 
          <Button onClick={profileHandler} variant="h6" component="div" sx={{fontSize : '1rem' , fontWeight : 'bold' , ml : '0px'  }}>
            Profile
          </Button>}

          {isLoggedIn && 
          <Button onClick={logoutHandler} variant="h6" component="div" sx={{fontSize : '1rem' , fontWeight : 'bold' , ml : '0px'  }}>
            Logout
          </Button>}

       
          
          {!isLoggedIn &&
          <Button onClick={handleClick} color="inherit" sx={{fontSize : '1rem' , fontWeight : 'bold' , ml : '0px'}}>Login</Button>
          }
          {!isLoggedIn &&
          <Button onClick={singupClick} color="inherit" sx={{fontSize : '1rem' , fontWeight : 'bold' , ml : '0px'}}>Signup</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
         
      </Container>
      
    </Fragment>
  )
}

export default Header
