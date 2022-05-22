import React from 'react';
import './welcomepage.css';
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


function Welcome() {
    const theme = createTheme();

    return (
        <div className='login-body' >
            <Grid container spacing={2}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={7} className='login-paper'>
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
                                    <div className='blue-box' style={{ backgroundImage: `url(${background})` }}>
                                        <Typography component="h1" variant="h5" className='login-topic'>
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

                                        <Grid container direction="row" justifyContent="center" alignItems="center">
                                            <Button
                                                // type="submit"
                                                // fullWidth

                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, ml: 'auto', mr: 5 }}
                                                className='login-btn'
                                            >
                                                Register
                                            </Button>

                                            <Button
                                                // type="submit"
                                                // fullWidth

                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, ml: 5, mr: 'auto' }}
                                                className='login-btn'
                                            >
                                                Login
                                            </Button>
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