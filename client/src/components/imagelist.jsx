import * as React from 'react';
import { Link } from "react-router-dom";
import {getImages} from '../services/imageService';
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import { height, width } from '@mui/system';

class ImageList extends React.Component{
    state={
        images:[],
    }

    async componentDidMount(){
        const {data:images}=await getImages();
        this.setState({images});
    }

    render(){
        if(this.state.images.length==0) return (<p><center><h1>Encrypted image list is empty.</h1></center><center><Link to='/addimage'><Button type="submit" className='add_btn'>Add</Button></Link></center></p>) 
        return(
            <Box sx={{backgroundColor:'#333333', width:'100%'}}>
                {this.state.images.map((value) => {
                        return (
                            <Box>
                                <Box sx={{backgroundColor:'#FFFFFF', width:'80%', marginLeft:'10%', height:'20%'}}>
                                    <p><b>{value.title}\n</b></p>
                                    <Button sx={{display:'inline-block', width:'250px', height:'50px', backgroundColor:'#33FF66'}}>Decrypt</Button>
                                    <Button sx={{display:'inline-block', width:'250px', height:'50px',  backgroundColor:'#FF6633'}}>Delete</Button>
                                </Box>
                                <Box>
                                    <Button sx={{width:'250px', height:'50px', backgroundColor:'#33FF66'}}>Add an Image</Button>
                                </Box>
                            </Box>
                        );
                    }
                )}
            </Box>
        )
    }
}

export default ImageList