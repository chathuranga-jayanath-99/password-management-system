import React from 'react';
import './passwordManager.css';
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
import background from "../assets/img/blue.svg";
import { Fab, Paper } from '@mui/material';
import user from '../assets/img/user.svg';
import twitter from '../assets/img/Social Twitter.svg';
import google from '../assets/img/Social Google.svg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CheckboxList from './a';

function PasswordManager() {
    const theme = createTheme();

    return (
        <div className='login-body' >
            <Container maxWidth="sm" sx={{ height: 100 }}></Container>
            <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', height: '80%', borderRadius: 4, marginLeft: 20 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ background: '#86C6F4', height: 115, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <Box gridColumn="span 6" sx={{ paddingTop: 5, paddingLeft: 7 }}>
                        <img src={user} className='image-icon' />
                        <span style={{ marginLeft: '25px', fontSize: '25px', verticalAlign: 'super', fontWeight: 'bold' }}>Software Eng</span>
                    </Box>
                    <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
                        <Button size="large" variant="contained" sx={{ marginRight: 4, marginLeft: 20 }}>Password Manager</Button>
                        <Button size="large" variant="contained" sx={{ marginRight: 4 }}>Image Manager</Button>
                        <Button size="large" variant="contained" sx={{ marginRight: 4 }}>Logout</Button>
                    </Box>
                </Box>
                <h1 style={{ textAlign: 'center' }}>Password Manager</h1>
                <Box maxWidth="xl" margin={4}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box gridColumn="span 2"></Box>
                        <Box gridColumn="span 2">
                            <span style={{
                                fontFamily: "IBM Plex Mono",
                                fontWeight: '400',
                                fontSize: '20px',
                            }}>Account</span>

                        </Box>
                        <Box gridColumn="span 3">
                            <span style={{
                                fontFamily: "IBM Plex Mono",
                                fontWeight: '400',
                                fontSize: '20px',
                            }}>Password</span>
                        </Box>
                        <Box gridColumn="span 4">
                            <span style={{
                                fontFamily: "IBM Plex Mono",
                                fontWeight: '400',
                                fontSize: '20px',
                            }}>Strenght</span>
                        </Box>
                        <Box gridColumn="span 2"></Box>

                    </Box>
                    <CheckboxList />
                </Box>
            </Box>
        </div >
    )
}

export default PasswordManager