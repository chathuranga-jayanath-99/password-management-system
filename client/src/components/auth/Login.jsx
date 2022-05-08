import React from 'react';
import './Login.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
import { Paper } from '@mui/material';
import fb from '../../assets/img/Social FB.svg';
import twitter from '../../assets/img/Social Twitter.svg';
import google from '../../assets/img/Social Google.svg';


function Login() {
	const theme = createTheme();

  return (
    <div className='login-body' >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={7} className='login-paper'>
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
            <Typography component="h1" variant="h5" className='login-topic'>
              Login
            </Typography>

            <Typography component="h3" variant="h5" className='login-desc'>
              Access Account
            </Typography>
          </div>
          
          <Grid container direction="row" justifyContent="center" alignItems="center">
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={3}>
              <img src={fb} alt="" className='image-icon fb'/>
            </Grid>
            <Grid item xs={3}>
              <img src={twitter} alt="" className='image-icon twitter'/>
            </Grid>
            <Grid item xs={3}>
              <img src={google} alt="" className='image-icon google'/>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
          </Grid>

          
         
        

          <Box component="form" noValidate sx={{ mt: 1, alignItems: 'center'}}>
            <TextField
              // margin="normal"
              required
              // fullWidth
              // m={2} pt={3}
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

            />
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
           
            />
            <FormControlLabel 
              control={<Checkbox value="remember" color="primary" />}
              label={<Typography className='remember-me'>Remember Me</Typography>}
            />
            <br/>
            <Button
              type="submit"
              // fullWidth

              variant="contained"
              sx={{ mt: 3, mb: 2, ml:'auto', mr:'auto'}}
              className='login-btn'
            >
              Login
            </Button>

          <br/>
              
                <Link href="#" variant="body2" className='create-acc' sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  New here? Create an account
                </Link>

          
                <Link href="#" variant="body2" className='forgot-pwd' sx={{mt:1, display:'flex', alignItems:'center', justifyContent:'center'}}>
                  Forgot your password?
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

export default Login