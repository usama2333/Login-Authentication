import React , {Fragment} from 'react';
import { Container , Box , typography } from '@mui/system';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Footer = () => {
  return (
    <Fragment>

     <Container  maxWidth='xl' sx={{color : 'white', mt : '30px', height : '200px' , background : 'gray' , display : 'flex' , flexDirection : 'column'  , justifyContent : 'space-evenly'}}>
         <Box sx={{display : 'flex' , justifyContent : 'space-evenly'  , fontWeight : 'bold' , fontSize : '1rem'}}>
            <Typography>
                Features
            </Typography>
            <Typography>
                Enterprice
            </Typography>
            <Typography>
                Spot
            </Typography>
            <Typography>
                Contact
            </Typography>
         </Box>

         <Box >
            <Typography>
                @2020 All Rights are reserved.
            </Typography>
         </Box>

         <Box>
         <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
           />
         </Box>
     </Container>
      
      
    </Fragment>
  )
}

export default Footer
