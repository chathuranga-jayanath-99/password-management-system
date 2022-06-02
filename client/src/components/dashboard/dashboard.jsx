import React from 'react';
import './dashboard.css';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
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


class Dashboard extends React.Component{
    state = {
        user: {}
    }
    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }
    render(){
        return (
            <div className='body'>
                <Container fixed maxWidth="sm" sx={{height: 100}}></Container>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', minHeight: '80%', maxHeight:'150%', borderRadius: 4, paddingBottom: 3, marginLeft: 20, marginRight: 20,marginBottom: 10}}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ background: '#86C6F4', minHeight: '20%', maxHeight: '50%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box gridColumn="span 6" sx={{ padding: 5 }}>
                            <img src={user} className='image-icon' />
                            <span style={{ margin: '25px', fontSize:'25px', verticalAlign: 'super', fontWeight: 'bold' }}>Software Eng</span>
                        </Box>
                        <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%', marginLeft: '0.1%'}}>Password Manager</Button>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Image Manager</Button>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Logout</Button>
                        </Box>
                    </Box>
    
                    <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Dashboard</h1>
    
                    <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E1E1E1', minHeight: '20%', maxHeight:'50%', paddingBottom: 5, borderRadius: 4, marginTop: 5, marginLeft: 5, marginRight: 5}}>
                        <p>Password Stored : </p>
                        <p>Frequently Used Passwords</p>
                        {/* <Box maxWidth="xl" margin={4}> */}
                        <FormGroup>
                            <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                                <Box gridColumn="span 1" sx={{padding: 3}}>
                                    <img src={user} style={{ width: '40px' }} />
                                </Box>
                                <Box gridColumn="span 2" sx={{ padding: 3 }}>
                                    <p style={{ color: '#90A4AE'}}>Account Name</p>
                                </Box>
                                <Box gridColumn="span 3" sx={{ paddingTop: 4 }}>
                                    <Box className='box-field' fixed>
    
                                    </Box>
                                </Box>
                            </Box>
    
                            <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Box gridColumn="span 1" sx={{ padding: 3}}>
                                    <img src={user} style={{ width: '40px'}} />
                                </Box>
                                <Box gridColumn="span 2" sx={{ padding: 3 }}>
                                    <p style={{color: '#90A4AE'}}>Account Name</p>
                                </Box>
                                <Box gridColumn="span 3" sx={{ paddingTop: 4 }}>
                                    <Box className='box-field' fixed>
                                    </Box>
                                </Box>
                            </Box>
                        </FormGroup>
                        <Button type="submit" className='add-btn'>Add New Password</Button>
                    </Box>
    
                    <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E1E1E1', height: '20%', borderRadius: 4, paddingBottom: 5, marginTop: 5, marginLeft: 5, marginRight: 5}}>
                        <p>Stored Images : </p>
                        <Button type="submit"className='add-btn'>Add New Image</Button>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default Dashboard