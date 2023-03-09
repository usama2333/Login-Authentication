import React , {Fragment, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import {signUpSchema} from '../schemas/index';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const initialValues = {
   
    email : "",
    password : ""
    
}

const Input = () => {

    let history = useHistory();

    const handleClick = () => {
      history.push('/welcome');
    }

    async function AddInputData (data) {
        try{
          const  response = await axios({
            method: 'post',
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2L7yTDk6E5l8JATGgHvukoJmlsLpvUIM',
            data: {
              email : data.email,
              password : data.password,
              returnSecureToken : true
            }
          });
          console.log('Input Response');
          console.log(response);
      
        } catch(error) {
          console.log(error.message)
      
        }
        
          }

  const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : signUpSchema,
    onSubmit : (values , action, ) => {

      AddInputData(values);
    console.log(values);

     console.log('test input .');
      
    //   action.resetForm();
      
    }
  })


  return (
    <Fragment>
      <Container maxWidth = 'sm' sx={{mt : '40px' }}>

      <Typography variant='h3' sx={{fontSize : 'bold' , color : 'white' , mb : '30px' , mt : '30px' , border : '1px solid black' , backgroundColor : 'lightblue'}}>
        Login Details
      </Typography>

   <form  onSubmit={handleSubmit}>
      <Box
      sx={{
        display: 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >

      {/* <Typography sx={{color : 'GrayText', fontSize : Bolt}}>
        Input Data form 
      </Typography> */}

      <TextField
        // helperText="Please enter your name"
        id="email"
        name = "email"
        label="Enter Email"
        fullWidth
        autoComplete='off'
        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.email}
      />
         { errors.email && touched.email ? (<Typography variant='p' color='red'>{errors.email}</Typography>) : null}
    

     <TextField
        // helperText="Please enter your Gender"
        id="password"
        name = "password"
        label="Enter password"
        autoComplete='off'
        fullWidth
        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.password}
      />
       { errors.password && touched.password? (<Typography variant='p' color='red'>{errors.password}</Typography>) : null}

    

      
      <Button onClick={handleClick}  variant='contained' size='large' type='submit'>
        Login
      </Button>

    </Box>

  </form>
      </Container>
      
    </Fragment>
  )
}

export default Input
