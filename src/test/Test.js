import React , {Fragment} from 'react';
import { Container , Typography , Box  , Button} from '@mui/material';

const Header = () => {
    const foo = true;
    const bar = true;
  return (
    <Fragment>
      <Container maxWidth='xl' sx={{color : 'red' , display : 'flex' , justifyContent : 'space-between' , height : '300px'}}>

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

    <Box>
        <Button sx={{width : {xs : 100 , sm : 200 , md : 300 , lg : 400 , xl: 500}}} variant='contained' color= 'warning'>This is breakpoit button</Button>
    </Box>
      
    </Fragment>
  )
}

export default Header
