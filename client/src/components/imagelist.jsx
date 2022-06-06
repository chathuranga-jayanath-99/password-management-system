import * as React from 'react';
import { Link } from "react-router-dom";
import {getImages} from '../services/imageService';
import { getPasswords } from '../services/passwordService';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import { height, width } from '@mui/system';

class ImageList extends React.Component{
    state={
        images:[],
    }

    async componentDidMount(){
        
        const images=['Image1','Image2','Image3'];
        this.setState({images:images});
    }

    render(){
        const { images } = this.props;
        console.log(images);

        if(this.state.images.length==0){
            return(<div><p>No items to display.</p><center><Link to='/addimage'><Button type="submit" width='250px' sx={{backgroundColor:'#55AAFF', color:'#000000'}}>Add an image</Button></Link></center></div>);
        } else{
            return(
                <center><Box sx={{display:'grid', gridTemplateColumns:"repeat(1, 1fr)"}}>
                    {
                        this.state.images.map((value)=>{
                            return(
                                <p><Box sx={{backgroundColor:'#FFFFFF', gridColumn:"span 1"}}><p>{value}</p><p><Button sx={{backgroundColor:'#88FFAA', marginTop:'10px', color:'#000000'}}>Decrypt</Button><Button sx={{backgroundColor:'#FF6688',  marginTop:'10px', color:'#000000'}}>Delete</Button></p></Box></p>
                            );
                        })
                        
                    }
                </Box>
                <p><Link to='/addimage'><Button type="submit" width='250px' sx={{backgroundColor:'#55AAFF', color:'#000000'}}>Add an image</Button></Link></p></center>
            );
        }
    }
}

export default ImageList