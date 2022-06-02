import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Button, InputAdornment, LinearProgress, linearProgressClasses, OutlinedInput, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import twitter from '../assets/img/Social Twitter.svg';
import google from '../assets/img/Social Google.svg';
import facebook from '../assets/img/Social FB.svg';
import snapchat from '../assets/img/Social Snapchat.svg'
import linkdin from '../assets/img/Social Linkdin.svg'
import { getPasswords } from '../services/passwordService';


// import React from 'react'


class CheckboxList extends React.Component {

    state = {
        passwords: [],
    }
    async componentDidMount() {
        // const { data: passwords } = await getPasswords();

        const { data: passwords } = await getPasswords();

        passwords.forEach(function (element) {
            element.showPassword = false;
            element.barLength = 100 * Math.random(1);
            // element.logo = getLOGO(element.title);
            if (element.title === 'facebook') {
                return element.logo = facebook;
            } else if (element.title === 'linkdin') {
                return element.logo = linkdin;
            } else if (element.title === 'twitter') {
                return element.logo = twitter;
            } else if (element.title === 'gmail') {
                return element.logo = google;
            } else if (element.title === 'snapchat') {
                return element.logo = snapchat;
            }
        });
        //console.log(passwords)
        this.setState({ passwords });

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
    handleColorChange = (value) => {
        // console.log(value)
        if (value < 30) {
            return 'error';
        } else if (value < 50) {
            return 'warning';
        } else if (value < 80) {
            return 'info';
        } else { return 'success'; }
    };

    render() {
        if (this.state.passwords.length === 0) return (<h1>No passwords to show</h1>)
        return (
            <Box sx={{ width: '100%', maxWidth: 'xl' }}>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', height: '80%', borderRadius: 4, marginLeft: 7, paddingTop: 5 }}>
                    {this.state.passwords.map((value) => {
                        return (
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} key={value.id}>
                                <Box gridColumn="span 1">
                                    <img src={value.logo} style={{ width: '80px' }} />
                                </Box>
                                <Box gridColumn="span 2" sx={{ paddingTop: 1 }}>
                                    <span style={{ fontWeight: '700', color: '#90A4AE', letterSpacing: '1px', textTransform: 'capitalize', marginLeft: '30px', fontSize: '19px' }}>
                                        {value.title}
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