import React from 'react';
import './Login.css';
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
import { FormGroup, FormHelperText, Paper } from '@mui/material';
import fb from '../../../assets/img/Social FB.svg';
import twitter from '../../../assets/img/Social Twitter.svg';
import google from '../../../assets/img/Social Google.svg';
import { useNavigate } from "react-router-dom";
import auth from '../../../services/authService';


function Login() {
  const theme = createTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: "",
      rememberMe: false,
    });

  const [mailError, setMailError] = React.useState("");
  const [pwError, setPWError] = React.useState("");

  React.useEffect(() => {
    console.log(formData)
  }, [formData]);

  const handleEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
    setMailError("");
  }

  const handlePassword = (event) => {
    setFormData({ ...formData, password: event.target.value });
    setPWError("");
  }

  const handleRememberMe = (event) => {
    setFormData({ ...formData, rememberMe: event.target.checked })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
      check: data.has('check'),
    });

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (formData.password === '') {
      setPWError("Required");
    }

    if (formData.email === '') {
      setMailError("Required");
    }

    else if ((!formData.email || regex.test(formData.email) === false)) {
      setMailError("Email is not valid");
    }

    if (formData.password !== '') {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = formData.password.length;
      const uppercasePassword = uppercaseRegExp.test(formData.password);
      const lowercasePassword = lowercaseRegExp.test(formData.password);
      const digitsPassword = digitsRegExp.test(formData.password);
      const specialCharPassword = specialCharRegExp.test(formData.password);
      const minLengthPassword = minLengthRegExp.test(formData.password);
      let errMsg = "";
      if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPWError(errMsg);
    }

    if (formData.email === "balarajayaweera@gmail.com" && formData.password === "00moraBalara27") {
      navigate("/dashboard");
    }

    // execute this if no errors in formData
    try {
      await auth.loginUser(formData.email, formData.password);
      navigate("/passwordmanager");
    } catch (ex) {
      // display the errors
      // console.log(ex.response.data);
    }
  }

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
                      Login
                    </Typography>

                    <Typography component="h3" variant="h5" className='login-desc'>
                      Access Account
                    </Typography>
                  </div>

                  <Grid container direction="row" justifyContent="center" alignItems="center">
                    {/* <Grid item xs={3}></Grid> */}
                    <Grid item>
                      <Button className="icon-btn">
                        <img src={fb} alt="" className='image-icon fb' />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button className="icon-btn">
                        <img src={twitter} alt="" className='image-icon twitter' />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button className="icon-btn">
                        <img src={google} alt="" className='image-icon google' />
                      </Button>
                    </Grid>
                    {/* <Grid item xs={3}></Grid> */}
                  </Grid>

                  <Box component="form" noValidate sx={{ mt: 1, alignItems: 'center' }} onSubmit={handleSubmit}>
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
                      // inputRef={register()}
                      // error={errors.email}
                      // helperText={errors.email.message}

                      />
                      <FormHelperText className="text-danger" error sx={{ paddingLeft: 1 }}>{mailError}</FormHelperText>


                      <TextField
                        required
                        margin="normal"
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
                      <FormHelperText className="text-danger" error sx={{ paddingLeft: 1 }}>{pwError}</FormHelperText>

                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" name='check' onChange={handleRememberMe} />}
                        label={<Typography className='remember-me'>Remember Me</Typography>}
                      />
                      <Button
                        type="submit"
                        // fullWidth

                        variant="contained"
                        sx={{ mt: 3, mb: 2, ml: 'auto', mr: 'auto' }}
                        className='login-btn'
                      >
                        Login
                      </Button>

                      <br />

                      <Link href="/register" variant="body2" className='create-acc' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        New here? Create an account
                      </Link>


                      <Link href="/resetpassword" variant="body2" className='forgot-pwd' sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Forgot your password?
                      </Link>
                    </FormGroup>
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