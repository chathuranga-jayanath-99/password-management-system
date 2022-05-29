import React from 'react';
import './Welcome.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
import welcome from "../../assets/img/welcome.svg"
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom'



function Welcome() {
    const theme = createTheme();

    return (
        <div className='welcome-body' >
            <Grid container spacing={2}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={7} className='welcome-paper'>
                        <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="xs" sx={{ alignItems: 'center' }}>
                                <CssBaseline />
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div className='welcome-blue-box' style={{ backgroundImage: `url(${background})` }}>
                                        <Typography component="h1" variant="h5" className='welcome-topic'>
                                            Welcome
                                        </Typography>
                                    </div>

                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        {/* <Grid item xs={3}></Grid> */}
                                        <Grid >
                                            <img src={welcome} width="330px" height="250px" />
                                        </Grid>
                                    </Grid>

                                    <Box component="form" noValidate sx={{ mt: 1, alignItems: 'center' }}>

                                        <br/>

                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                            <Link
                                                to='/register'>
                                                <Button
                                                    // type="submit"
                                                    // fullWidth

                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2, ml: 'auto', mr: 5 }}
                                                    className='login-btn'
                                                >
                                                    Register
                                                </Button>
                                            </Link>
                                            <Link to='/login'>
                                                <Button
                                                    // type="submit"
                                                    // fullWidth

                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2, ml: 5, mr: 'auto' }}
                                                    className='login-btn'
                                                >
                                                    Login
                                                </Button>
                                            </Link>
                                        </Grid>


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

export default Welcome