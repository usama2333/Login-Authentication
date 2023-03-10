import React , {Fragment, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import {signUpSchema} from '../schemas/index';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const initialValues = {
 
  email : "",
  password : ""

}

const Input = () => {

  let history = useHistory();

  async function AddInputData (data) {
    try{
      const  response = await axios({
        method: 'post',
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2L7yTDk6E5l8JATGgHvukoJmlsLpvUIM',
        data: {
          email : data.email,
          password : data.password,
          returnSecureToken : true
        }
        
      });

      if(response.status === 200) {
        history.push('/login');
      }
  
    } catch(error) {
      console.log(error.message)
  
    }
    
      }

  const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : signUpSchema,
    onSubmit : (values , action, ) => {

      AddInputData(values);

     console.log('test..............................');
      
      action.resetForm();
      
    }
  })


  return (
    <Fragment>
      <Container maxWidth = 'sm' sx={{mt : '40px' }}>

      <Typography variant='h2' sx={{fontSize : 'bold' , color : 'white' , mb : '20px' , border : '1px solid black' , backgroundColor : 'lightblue'}}>
        SignUp Form
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

     <TextField
        // helperText="Please enter your Email"
        id="email"
        name = "email"
        label="Enter email"
        autoComplete='off'
        fullWidth
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

      
      <Button variant='contained' size='large' type='submit'>
        Sign Up
      </Button>

      
      
    </Box>

  </form>
      </Container>
      
    </Fragment>
  )
}

export default Input
