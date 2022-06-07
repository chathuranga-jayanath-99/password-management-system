import React from 'react';
import './Register.css';
import {Button, 
  CssBaseline, 
  Link, 
  Grid, 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Paper, 
  FormHelperText, 
  InputLabel, 
  FormControl, 
  MenuItem, 
  Select} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../../assets/img/blue.svg";
import fb from '../../../assets/img/Social FB.svg';
import twitter from '../../../assets/img/Social Twitter.svg';
import google from '../../../assets/img/Social Google.svg';
import { useAuth } from '../../../context/AuthProvider';
import auth from '../../../services/authService';
import * as userService from "../../../services/userService";
import { useNavigate } from 'react-router-dom';

function Register() {
	const theme = createTheme();
  const navigate = useNavigate();

  let authContext = useAuth();

  const [formData, setFormData] = React.useState(
    {name: "",
    email: "",
    gender: "",
    password: "",
  });

  const [mailError, setMailError] = React.useState("");
  const [pwError, setPWError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [genderError, setGenderError] = React.useState("");

  React.useEffect(() => {
    console.log(formData)
  },[formData]);

  const handleName = (event) => {
    setFormData({...formData, name: event.target.value});
    setNameError("");
  }

  const handleEmail = (event) => {
    setFormData({...formData, email: event.target.value});
    setMailError("");
  }

  const handleGender = (event) => {
    setFormData({...formData, gender: event.target.value});
    setGenderError("");
  }

  const handlePassword = (event) => {
    setFormData({...formData, password: event.target.value});
    setPWError("");
  } 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (formData.name === '') {
      setNameError("Required");
    }

    if (formData.password === '') {
      setPWError("Required");
    }

    if (formData.gender === '') {
      setGenderError("Required");
    }

    if (formData.email === '') {
      setMailError("Required");
    }

    else if ((!formData.email || regex.test(formData.email) === false)) {
      setMailError("Email is not valid");
    }

    if(formData.password !== '' ){
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp   = /.{8,}/;
      const passwordLength =      formData.password.length;
      const uppercasePassword =   uppercaseRegExp.test(formData.password);
      const lowercasePassword =   lowercaseRegExp.test(formData.password);
      const digitsPassword =      digitsRegExp.test(formData.password);
      const specialCharPassword = specialCharRegExp.test(formData.password);
      const minLengthPassword =   minLengthRegExp.test(formData.password);
      let errMsg ="";
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
      setPWError(errMsg);
      }

      // need to execute this if no errors
      // stop below execution if there are errors in the input user given  
      try {
        const response = await userService.register({ name:formData.name, email:formData.email, password:formData.password, gender:"male" });
        auth.loginUserWithJwt(response.headers["x-auth-token"]);
        navigate("/dashboard");
      } catch (ex) {
        // add these to the front end
        console.log(ex);
        setMailError(ex.response.data);
      }
      
  }

  return (
    <div className='reg-body' >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={7} className='reg-paper'>
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
          <div className='reg-blue-box' style={{ backgroundImage: `url(${background})` }}>
            <Typography component="h1" variant="h5" className='reg-topic'>
              Register
            </Typography>

            <Typography component="h3" variant="h5" className='reg-desc'>
              Register Account
            </Typography>
          </div>
          
          <Grid container direction="row" justifyContent="center" alignItems="center">
            {/* <Grid item xs={3}></Grid> */}
            <Grid item>
              <Button className="icon-btn">
                <img src={fb} alt="" className='image-icon fb'/>
              </Button>
            </Grid>
            <Grid item>
              <Button className="icon-btn">
                <img src={twitter} alt="" className='image-icon twitter'/>
              </Button>
            </Grid>
            <Grid item>
              <Button className="icon-btn">
                <img src={google} alt="" className='image-icon google'/>
              </Button>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
          </Grid>


          <Box component="form" noValidate sx={{ mt: 1, alignItems: 'center'}} onSubmit={handleSubmit}>
            <TextField
            //   margin="normal"
              required
              // fullWidth
              // m={2} pt={3}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              className='text-field'
              variant="filled"
              InputProps={{
                      disableUnderline: true,
                      
              }}
              onChange={handleName}

            />
            {nameError !== "" ? <FormHelperText className="text-danger" error sx={{paddingLeft: 1, marginBottom: -3, marginTop: -1}}>{nameError}</FormHelperText> : null}

            <TextField
              margin="normal"
              required
              // fullWidth
              // m={2} pt={3}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              className='text-field'
              variant="filled"
              InputProps={{
                      disableUnderline: true,
                      
              }}
              onChange={handleEmail}
            />
            {mailError !== "" ? <FormHelperText className="text-danger" error sx={{paddingLeft: 1, marginBottom: -1, marginTop: -2}}>{mailError}</FormHelperText> : null}

            <FormControl 
              fullWidth 
              variant="filled"
              className="text-field"
             >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.gender}
                label="Gender"
                onChange={handleGender}
                required            
                disableUnderline
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>

              {genderError !== "" ? <FormHelperText className="text-danger" error sx={{marginLeft: 0, marginBottom: 4, marginTop: -1.5}}>{genderError}</FormHelperText>: null}

            </FormControl>
           

            <TextField
              margin="normal"
              required
              // fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className='text-field'
              variant="filled"
              InputProps={{
                disableUnderline: true,                
              }}
              onChange={handlePassword}
            />
            {pwError !== "" ? <FormHelperText className="text-danger" error sx={{paddingLeft: 1, marginBottom: -1, marginTop: -2}}>{pwError}</FormHelperText>: null}
           
            <Button
              type="submit"
              // fullWidth

              variant="contained"
              sx={{ mt: 3, mb: 2, ml:'auto', mr:'auto'}}
              className='reg-btn'
            >
              Register
            </Button>


              
                <Link href="/login" variant="body2" className='login-acc' sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    Already have an account? Login
                </Link>

              
          </Box> 
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    </Paper>
        </Grid>
        
      </Grid>
      
    </div>
  )
}

export default Register