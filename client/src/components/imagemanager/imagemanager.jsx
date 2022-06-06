import React from 'react';
import './imagemanager.css';
import user from '../../assets/img/user.svg';
import auth from '../../services/authService';
import { FormGroup, FormHelperText, Paper } from '@mui/material';
import background from "../../assets/img/blue.svg";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link, NavLink } from 'react-router-dom';
import ImageList from '../imagelist';
import { getImages } from "../../services/imageService";

class ImageManager extends React.Component{
    state = {
        user: {},
        images: [],
    }
    async componentDidMount() {
        const user = auth.getCurrentUser();

        const {data: images} = await getImages();
        console.log("imagemanager", images[0]);
        this.setState({ user, images: images[0] });
    }
    render(){
        const { images } = this.state;
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
                            <Link to='/passwordmanager'><Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%', marginLeft: '0.1%'}}>Password Manager</Button></Link>
                            <Link to='/imagemanager'><Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Image Manager</Button></Link>
                            <Button className='nav-bar-btn' variant="contained" sx={{ marginRight: '1%' }}>Logout</Button>
                        </Box>
                    </Box>
    
                    <h1 style={{ textAlign: 'center', paddingTop: 15 }}>Image Manager</h1>
    
                    <Box maxWidth="xl" fixed sx={{ backgroundColor: '#E1E1E1', minHeight: '20%', maxHeight:'50%', paddingBottom: 5, borderRadius: 4, marginTop: 5, marginLeft: 5, marginRight: 5}}>
                        <ImageList images={images} />
                    </Box>




                </Box>
                
            </div>
        )
    }
}

export default ImageManager