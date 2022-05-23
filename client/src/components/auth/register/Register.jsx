import React from 'react';
import './Register.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../../assets/img/blue.svg";
import { Paper } from '@mui/material';
import fb from '../../../assets/img/Social FB.svg';
import twitter from '../../../assets/img/Social Twitter.svg';
import google from '../../../assets/img/Social Google.svg';


function Register() {
	const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <div className='blue-box' style={{ backgroundImage: `url(${background})` }}>
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

            />

            <TextField
              margin="normal"
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
           
            <Button
              type="submit"
              // fullWidth

              variant="contained"
              sx={{ mt: 3, mb: 2, ml:'auto', mr:'auto'}}
              className='reg-btn'
            >
              Register
            </Button>

          <br/>
              
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