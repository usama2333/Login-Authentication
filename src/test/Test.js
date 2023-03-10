import React , {Fragment} from 'react';
import { Container , Typography , Box  , Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import {IconButton} from '@mui/material';
import TextField from '@mui/material/TextField';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {

  const img1='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
    const foo = true;
    const bar = true;

  return (
    <Fragment>
      <Container maxWidth='xl' sx={{color : 'red' , display : 'flex' , justifyContent : 'space-between' , height : '100px'}}>

        <Box>
        <Typography variant='h4' color='primary.main'>
            This is  heading test
         </Typography>
        </Box>


        <Box sx={{background : 'green' , mt : '20px'}}>
        <Typography variant='h4' color='red' sx={{mt : '40px'}}>
            This is  heading
         </Typography>
        </Box>


        <Box>
        <Typography variant='h4' color='pink'>
            This is  heading
         </Typography>
        </Box>

        <Box
        
  sx={[
    {
      '&:hover': {
        color: 'red',
        backgroundColor: 'white',
      },
    },
    foo && {
      '&:hover': { backgroundColor: 'grey' },
    },
    bar && {
      '&:hover': { backgroundColor: 'yellow' },
    },
  ]}
>
<Typography>
            This is test
        </Typography>

</Box>

        
         
      </Container>

    <Box sx={{display : 'flex' , justifyContent : 'center', alignItems : 'center', mt : '20px'}}>
        <Button sx={{ width : {xs : 100 , sm : 200 , md : 300 , lg : 400 , xl: 500}}} variant='contained' color= 'warning'>This is breakpoit button</Button>
    </Box>

    <Box  sx={{ display : 'flex' , justifyContent : 'center',alignItems : 'center', display : 'inline-block' , bgcolor : 'primary.light' }}>inline</Box>
    <Box component="div" sx={{ display: 'inline' , backgroundColor : 'yellow' }}>inline</Box>


    <Container>
      <Typography>
        This is card section
      </Typography>
      <Box sx={{display : 'flex' , justifyContent : 'center',alignItems : 'center' , my : "40px"}}>
      <Card  sx={{ maxWidth: 445 , }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tree
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>
    </Container>

    <Box>
      <Typography  sx={{display : 'flex' , justifyContent : 'center',alignItems : 'center'}}>
        This is test icon <DirectionsCarFilledOutlinedIcon/> <AutoDeleteIcon/>
      </Typography>

      <IconButton sx={{color : 'blueviolet'}}>
        <AutoDeleteIcon/>
      </IconButton>

      <DirectionsCarFilledOutlinedIcon sx={{color : 'pink' , fontSize : '50px'}}/>
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{backgroundColor : 'pink'}} id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

   <Container>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor : 'red'}}>
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>

    <Container>
      
    </Container>
      
    </Fragment>
  )
}

export default Header
