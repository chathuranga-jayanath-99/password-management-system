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


class AddPassword extends React.Component{
    constructor() {
        super();
        this.state = {
            input: {
                name: '',
                password : '',
                confirm_password: ''
            },
            errors: {
                name: '',
                password : '',
                confirm_password: ''
            }
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        
        this.setState({
            input
        });
    }

    handleSubmit(event){
        if(this.validate()){
            console.log(this.state); 
            let errors = {};     
            this.setState({errors:errors});      
            let input = {};
            input["name"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({input:input});      
            alert('Demo Form is submited');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            console.log("hi");
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
        if (input["password"] != input["confirm_password"]) {
            isValid = false;
            // errors["password"] = "Passwords don't match.";
            errors["confirm_password"] = "Passwords don't match.";
        }
        } 

        this.setState({
        errors: errors
        });

        return isValid;

    }

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
                                <input 
                                    className='input-details'
                                    type="text" 
                                    name="name" 
                                    value={this.state.input.name}
                                    onChange={this.handleChange}
                                    placeholder="Account Name...." 
                                    id="name" />
                        
                                    <div className="text-danger">{this.state.errors.name}</div>
                            </Box>
                        </Box>

                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Box gridColumn="span 1" sx={{ padding: 5 }}>
                                <p style={{color: '#90A4AE'}}>Enter Password</p>
                            </Box>
                            <Box gridColumn="span 2" sx={{ paddingTop: 4}}>
                                <input 
                                type="password" 
                                name="password" 
                                value={this.state.input.password}
                                onChange={this.handleChange}
                                className='input-details'
                                placeholder="Password...." 
                                id="password" />
                    
                                <div className="text-danger">{this.state.errors.password}</div>
                            </Box>
                        </Box>

                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" maxWidth="1000px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                            <Box gridColumn="span 1" sx={{ padding: 5 }}>
                                <p style={{ color: '#90A4AE'}}>Confirm Password</p>
                            </Box>
                            <Box gridColumn="span 2" sx={{ paddingTop: 5}}>
                                <input 
                                    type="password" 
                                    name="confirm_password" 
                                    value={this.state.input.confirm_password}
                                    onChange={this.handleChange}
                                    className='input-details'
                                    placeholder="Confirm Password...." 
                                    id="confirm_password" />
                        
                                    <div className="text-danger">{this.state.errors.confirm_password}</div>
                            </Box>
                        </Box>

                    
                    <Button type="submit" className='add-btn' onClick={() => this.handleSubmit()}>Add Password</Button>
                    </FormGroup>
                </Box>
                </Box>
            </div>
        );
    }
}

export default AddPassword