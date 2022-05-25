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
import { Paper } from '@mui/material';
import user from '../assets/img/user.svg';
import twitter from '../assets/img/Social Twitter.svg';
import google from '../assets/img/Social Google.svg';

function PasswordManager() {
    const theme = createTheme();

    return (
        <div className='login-body' >
            <Container maxWidth="xs">
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'oldlace',
                        marginTop: 10
                    }}>
                </Box>
            </Container>
        </div>
    )
}

export default PasswordManager