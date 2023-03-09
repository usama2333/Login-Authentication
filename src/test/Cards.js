import { Fragment } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container , Box } from '@mui/system';

const Cards = () => {

    const img1='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';

    const img2 = 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=';

    const img3 = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg';


  return (
    <Fragment >
      <Container sx={{mt : '40px'}}>
      <Box sx={{display : 'flex' , flexDirection : 'row' , flexWrap : 'wrap', justifyContent :'space-around' , boxShadow : 3}}>
    <Card sx={{ maxWidth: 345 }}>
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
        <Button variant='contained' color='success' size="small" >Share</Button>
        <Button variant='contained' color='success' size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img2}
        title="green iguana"
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Taj Mahal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='primary' size="small">Share</Button>
        <Button  variant='outlined' color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img3}
        title="green iguana"
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Garden
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='primary' size="small">Share</Button>
        <Button variant='contained' color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>

       </Box>
    </Container>
    </Fragment>
  )
}

export default Cards
