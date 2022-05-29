import React from 'react';
import './ResetPassword.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../../assets/img/blue.svg";
import { FormGroup, FormHelperText, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const theme = createTheme();

  const [formData, setFormData] = React.useState({
    email: "",
    newPW: "",
  });

  const [emailError, setEMailError] = React.useState("");
  const [newPWError, setNewPWError] = React.useState("");

  const handleEmail = (event) => {
    setFormData({...formData, email: event.target.value});
    setEMailError("");
  }

  const handleNewPassword = (event) => {
    setFormData({...formData, newPW: event.target.value});
    setNewPWError("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (formData.newPW === '') {
      setNewPWError("Required");
    }

    if (formData.email === ''){
      setEMailError("Required");
    }

    else if ((!formData.email || regex.test(formData.email) === false)){
      setEMailError("Email is not valid");
    }

    if(formData.newPW !== '' ){
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp   = /.{8,}/;
      const passwordLength =   formData.newPW.length;
      const uppercasePassword =   uppercaseRegExp.test(formData.newPW);
      const lowercasePassword =   lowercaseRegExp.test(formData.newPW);
      const digitsPassword =      digitsRegExp.test(formData.newPW);
      const specialCharPassword = specialCharRegExp.test(formData.newPW);
      const minLengthPassword =   minLengthRegExp.test(formData.newPW);
      let errMsg = "";
      if(!uppercasePassword){
              errMsg="At least one Uppercase";
      }else if(!lowercasePassword){
              errMsg="At least one Lowercase";
      }else if(!digitsPassword){
              errMsg="At least one digit";
      }else if(!specialCharPassword){
              errMsg="At least one Special Characters";
      }else if(!minLengthPassword){
              errMsg="At least minumum 8 characters";
      }else{
          errMsg="";
      }
      setNewPWError(errMsg);
      }
  } 

  return (
    <div className='resetpw-body'>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        
      </Grid>
      <Grid item xs={6}>
      <Paper elevation={7} className='resetpw-paper'>
     <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" sx={{ alignItems: 'center'}}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className='blue-box' style={{ backgroundImage: `url(${background})` }}>
          <Typography component="h1" variant="h5" className='resetpw-topic'>
            Reset Password
          </Typography>

          <Typography component="h3" variant="h5" className='resetpw-desc'>
            Change Your Password
          </Typography>
        </div>               

        <Box 
          component="form" 
          noValidate 
          sx={{ mt: 1, alignItems: 'center'}} 
          onSubmit={handleSubmit}
        >
          <FormGroup>
          <TextField
              required
              //  error={formData.email ==""}
              //  helperText={formData.email ==""?"Required":null}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                className='text-field'
                variant="filled"
                InputProps={{
                        disableUnderline: true,
                        
                }}
                onChange={handleEmail}

              />
              <FormHelperText className="text-danger" error sx={{paddingLeft: 1}}>{emailError}</FormHelperText>
      
            
          <TextField
          required
            margin="normal"        
            name="password"
            label="New Password"
            type="password"
            id="password"
            // autoComplete="current-password"
            // autoFocus
            className='text-field'
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={handleNewPassword}
          />
          <FormHelperText className="text-danger" error sx={{paddingLeft: 1}}>{newPWError}</FormHelperText>
          
          <br/>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, ml:'auto', mr:'auto'}}
            className='resetpw-btn'
          >
            Reset
          </Button>              
            </FormGroup>
        </Box> 
      </Box>
    </Container>
  </ThemeProvider>
  </Paper>
      </Grid>
      
    </Grid>
    
  </div>
  )
}

export default ResetPassword