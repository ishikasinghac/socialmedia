
import { Button, IconButton, TextField,FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as Yup from "yup";
import { registerUserAction } from '../../Redux/auth/auth.action';

const initialValues={firstName:"",lastName:"", email:"",password:"", gender:""};
const validationSchema={
  email:Yup.string().email("Invalid email").required("Email is required"),
  password:Yup.string().min(7,"Password must contain 7 characters").required("Password is necessary"),
};
const Register = () => {
  const[gender,setGender]= useState("");
  const dispatch=useDispatch();

  const navigate=useNavigate();
  const handleSubmit = (values) => {
    values.gender=gender
    console.log("handle submit", values);

    dispatch(registerUserAction({data:values}));
    
  }
  
  const handleChange=(event)=>{
      setGender(event.target.value);
  }
  return (
    <>
    <Formik 
    onSubmit={handleSubmit} 
    // validationSchema={validationSchema} 
    initialValues={initialValues}
    >
      <Form className='space-y-5'>
          <div className='space-y-5'>
          <div>
              <Field 
              as={TextField} 
              name="firstName" 
              placeholder="First Name" 
              type="text" 
              variant="outlined" 
              fullWidth
              />
              <ErrorMessage 
              name='firstName'
              component={"div"}
              className="text-red-500"
              />
            </div>

            <div>
              <Field 
              as={TextField} 
              name="lastName" 
              placeholder="Last Name" 
              type="text" 
              variant="outlined" 
              fullWidth
              />
              <ErrorMessage 
              name='lastName'
              component={"div"}
              className="text-red-500"
              />
            </div>


            <div>
              <Field 
              as={TextField} 
              name="email" 
              placeholder="Email" 
              type="email" 
              variant="outlined" 
              fullWidth
              />
              <ErrorMessage 
              name='email'
              component={"div"}
              className="text-red-500"
              />
            </div>

            <div>
              <Field 
              as={TextField} 
              name="password" 
              placeholder="Password" 
              type="password" 
              variant="outlined" 
              fullWidth
              />
              <ErrorMessage 
              name='password'
              component={"div"}
              className="text-red-500"
              />

            </div>
            <div>
            <RadioGroup onChange={handleChange} row aria-label='Gender' name='gender'>
              <FormControlLabel 
              value="female" 
              control={<Radio />} 
              label="Female" 
              />
              <FormControlLabel 
              value="male" 
              control={<Radio />} 
              label="Male" 
              />

              <ErrorMessage 
              name='gender'
              component={"div"}
              className="text-red-500"
              />
            </RadioGroup>
            </div>
          </div>
          <Button
          sx={{padding:".8rem 0rem"}} 
          fullWidth
          type="submit" 
          variant="contained" 
          color="primary"
          >
            Register
          </Button>
      </Form>
    </Formik>
    <div className="flex gap-2 item-center justify-center pt-5">
      <p>already have an account ?</p>
      <Button onClick={()=>navigate("/login")}>Login</Button>
    </div>
    </>
  )
};

export default Register
