import React from 'react';
import './addPassword.css';
import {InputAdornment, LinearProgress, linearProgressClasses, OutlinedInput} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
// import { Fab, Paper } from '@mui/material';
import user from '../../assets/img/user.svg';
import auth from '../../services/authService';
import { FormGroup, FormHelperText, Paper } from '@mui/material';
// import twitter from '../assets/img/Social Twitter.svg';
// import google from '../assets/img/Social Google.svg';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import CheckboxList from './a';
// import { grid, positions } from '@mui/system';
// import 'bootstrap/dist/css/bootstrap.css';


class AddPassword extends React.Component{
    state = {
        user: {}
    }
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }

    handleChange = (e, value) => {
        const newValues = this.state.passwords;
        const index = newValues.indexOf(value);
        newValues[index].password = e.target.value;
        // console.log(newValues);
        this.setState({ passwords: newValues })
        // setValues({ ...values, [prop]: event.target.value });
    };
    handleClickShowPassword = (value) => {
        const newValues = this.state.passwords;
        console.log(value)
        const index = newValues.indexOf(value);
        newValues[index].showPassword = !newValues[index].showPassword;
        this.setState({ passwords: newValues })
    };
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render(){
        return (
            <div className='body'>
                <Container fixed maxWidth="sm" sx={{height: 100}}></Container>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', minHeight: '80%', maxHeight:'150%', borderRadius: 4, paddingBottom: 3, marginLeft: 20, marginRight: 20,marginBottom: 10}}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ background: '#86C6F4', minHeight: '20%', maxHeight: '50%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box gridColumn="span 6" sx={{ padding: 5 }}>
                            <img src={user} className='image-icon' />
                            <span style={{ margin: '25px', fontSize:'25px', verticalAlign: 'super', fontWeight: 'bold' }}>Name</span>
                        </Box>
                        <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
                        <Button href='/dashboard' className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%', marginLeft: '70%'}}>Back</Button>
                    </Box>
                </Box>

                <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Add Password</h1>

                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E1E1E1', minHeight: '20%', maxHeight:'50%', paddingBottom: 5, borderRadius: 4, marginTop: 5, marginLeft: 5, marginRight: 5}}>
                    <FormGroup>
                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                            <Box gridColumn="span 1" sx={{ padding: 5 }}>
                                <p style={{ color: '#90A4AE'}}>Account Name</p>
                            </Box>
                            <Box gridColumn="span 2" sx={{ paddingTop: 4}}>
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
                                    className='input-details'
                                    variant="filled"
                                    InputProps={{
                                            disableUnderline: true,
                                            
                                    }}
                                />    
                            </Box>
                        </Box>

                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Box gridColumn="span 1" sx={{ padding: 5 }}>
                                <p style={{color: '#90A4AE'}}>Enter Password</p>
                            </Box>
                            <Box gridColumn="span 2" sx={{ paddingTop: 4}}>
                                <TextField
                                    required
                                    margin="normal"        
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    className='input-details'
                                    variant="filled"
                                    InputProps={{
                                    disableUnderline: true,
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                            <Box gridColumn="span 1" sx={{ padding: 5 }}>
                                <p style={{ color: '#90A4AE'}}>Confirm Password</p>
                            </Box>
                            <Box gridColumn="span 2" sx={{ paddingTop: 5}}>
                            <TextField
                                    required
                                    margin="normal"        
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    className='input-details'
                                    variant="filled"
                                    InputProps={{
                                    disableUnderline: true,
                                    }}
                                />
                            </Box>
                        </Box>

                    </FormGroup>
                    <Button type="submit" className='add-btn'>Add Password</Button>
                </Box>
                </Box>
            </div>
        );
    }
}

export default AddPassword