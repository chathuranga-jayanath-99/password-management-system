import React, { Component } from 'react';
import './PasswordManager.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import user from '../../assets/img/user.svg';
import CheckboxList from '../a';
import auth from '../../services/authService';
import { Link } from 'react-router-dom';

class PasswordManager extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }
    render() {
        return (
            <div className='pwmanager-body' >
                <Container maxWidth="sm" sx={{ height: 100 }}></Container>
                <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E5E5E5', height: '80%', borderRadius: 4, marginLeft: 20 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" maxWidth="xl" sx={{ background: '#86C6F4', height: 115, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Box gridColumn="span 6" sx={{ paddingTop: 5, paddingLeft: 7 }}>
                            <img src={user} className='image-icon' />
                            <span style={{ marginLeft: '25px', fontSize: '25px', verticalAlign: 'super', fontWeight: 'bold', textTransform: 'capitalize' }}>{this.state.user.name}</span>
                        </Box>
                        <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
                            <Link to="/dashboard"><Button size="large" variant="contained" sx={{ marginRight: 4, marginLeft: 20 }}>Dashboard</Button></Link>
                            <Link to="/imagemanager"><Button size="large" variant="contained" sx={{ marginRight: 4 }}>Image Manager</Button></Link>
                            <Link to="/logout"> <Button variant="contained" sx={{ marginRight: 4 }} >Logout</Button></Link>
                        </Box>
                    </Box>
                    <h1 style={{ textAlign: 'center' }}>Password Manager</h1>
                    <Box maxWidth="xl" margin={4} style={{ minHeight: '500px' }}>
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
}

export default PasswordManager