import React from 'react';
import './NoPage.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
import { FormGroup, Paper } from '@mui/material';
import img_404 from '../../assets/img/404.svg';



function NoPage() {
const theme = createTheme();

  return (
    <div className='nopage-body' >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={7} className='nopage-paper'>
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
          <div className='nopage-blue-box' style={{ backgroundImage: `url(${background})` }}>
            <Typography component="h1" variant="h5" className='nopage-topic'>
              Sorry!
            </Typography>

            <Typography component="h3" variant="h5" className='nopage-desc'>
              Page Not Found
            </Typography>
          </div>
          
         

          <Box component="form" noValidate sx={{ mt: 1, alignItems: 'center'}}>
            <FormGroup>
                <img src={img_404} alt="" />

            <br/>

            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, ml:'auto', mr:'auto'}}
              className='nopage-btn'
              onClick={() => {
                window.location.href='/';}}
            >
              Back to Home
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

export default NoPage