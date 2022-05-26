import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, InputAdornment, LinearProgress, linearProgressClasses, OutlinedInput, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import twitter from '../assets/img/Social Twitter.svg';
import google from '../assets/img/Social Google.svg';
import facebook from '../assets/img/Social FB.svg';
import snapchat from '../assets/img/Social Snapchat.svg'
import linkdin from '../assets/img/Social Linkdin.svg'


// import React from 'react'


class CheckboxList extends React.Component {
    state = {
        socialMedia: [{ value: 0, logo: facebook, socialMediaType: "facebook", password: '', showPassword: false, barLength: 40 },
        { value: 1, logo: twitter, socialMediaType: "twitter", password: '', showPassword: false, barLength: 90 },
        { value: 2, logo: google, socialMediaType: "google", password: '', showPassword: false, barLength: 10 },
        { value: 3, logo: linkdin, socialMediaType: "linkdin", password: '', showPassword: false, barLength: 100 },
        { value: 4, logo: snapchat, socialMediaType: "snapchat", password: '', showPassword: false, barLength: 100 }
        ]
    }
    handleChange = (e, value) => {
        const newValues = this.state.socialMedia;
        const index = newValues.indexOf(value);
        newValues[index].password = e.target.value;
        // console.log(newValues);
        this.setState({ socialMedia: newValues })
        // setValues({ ...values, [prop]: event.target.value });
    };
    handleClickShowPassword = (value) => {
        const newValues = this.state.socialMedia;
        const index = newValues.indexOf(value);
        newValues[index].showPassword = !newValues[index].showPassword;
        this.setState({ socialMedia: newValues })
    };
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleColorChange = (value) => {
        console.log(value)
        if (value < 30) {
            return 'error';
        } else if (value < 50) {
            return 'warning';
        } else if (value < 80) {
            return 'info';
        } else { return 'success'; }
    };

    render() {

        return (
            <Box sx={{ width: '100%', maxWidth: 'xl' }}>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', height: '80%', borderRadius: 4, marginLeft: 7, paddingTop: 5 }}>
                    {this.state.socialMedia.map((value) => {
                        return (
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Box gridColumn="span 1" style={{ paddingTop: "-20px" }}>
                                    <img src={value.logo} style={{ width: '80px' }} />
                                </Box>
                                <Box gridColumn="span 2" sx={{ paddingTop: 3 }}>
                                    <span style={{ fontWeight: '700', color: '#90A4AE', letterSpacing: '1px', textTransform: 'capitalize', marginLeft: '30px' }}>
                                        {value.socialMediaType}
                                    </span>
                                </Box>
                                {/* <TextField style={{ marginLeft: 40, borderRadius: 20, width: 300 }} id="demo-helper-text-misaligned-no-helper" label="Name" /> */}
                                <Box gridColumn="span 3">
                                    <OutlinedInput
                                        style={{ marginLeft: 50 }}
                                        id="outlined-adornment-password"
                                        type={value.showPassword ? 'text' : 'password'}
                                        value={value.password}
                                        onChange={(e) => this.handleChange(e, value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => this.handleClickShowPassword(value)}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {value.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </Box>
                                <Box gridColumn="span 4" sx={{ paddingTop: 3 }}>
                                    <LinearProgress variant="determinate" color={this.handleColorChange(value.barLength)} value={value.barLength} style={{ marginLeft: '70px', width: "80%" }} />
                                </Box>
                                <Box gridColumn="span 2">
                                    <Button size="large" variant="contained" sx={{ marginLeft: 15, borderRadius: 5 }}>Analyze</Button>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box >
        );
    }
}
export default CheckboxList;