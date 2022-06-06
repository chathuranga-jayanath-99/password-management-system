import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import "./addimage.css";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
// import { Fab, Paper } from '@mui/material';
import user from "../../assets/img/user.svg";
import auth from "../../services/authService";
import { FormGroup, FormHelperText, Paper } from "@mui/material";
// import twitter from '../assets/img/Social Twitter.svg';
// import google from '../assets/img/Social Google.svg';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import CheckboxList from './a';
// import { grid, positions } from '@mui/system';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { display } from "@mui/system";
import { saveImage } from './../../services/imageService';

class AddImage extends Form {
  state = {
    user: {},
    name: null,
    image: null,
  };

  schema = {
    userId: Joi.string().label("userId"),
    title: Joi.string().label("title"),
    image: Joi.string().label("image"),
  };


  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  send = async (event) => {
    console.log("hey");
    const user = this.props.user;

    const data = new FormData();
    data.append("userId", user.id );
    data.append("name", this.state.name);
    data.append("image", this.state.image);

    console.log(data);
    await saveImage(data);
    // axios
    //   .post("http://localhost:5000/api/images", data)
    //   .then((res) => console.log(res));
  };

  doSubmit = async (e) => {
    try {
      e.preventDefault();

      // console.log(this.state.data);

      // const data = { image: this.state.data.image };
      // await saveImage(data);
      //
      const fd = new FormData();
      fd.append("image", this.state.image, this.state.image.name);
      await saveImage(fd);
    } catch (ex) {}
  };

  handleNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="body">
        <Container fixed maxWidth="sm" sx={{ height: 100 }}></Container>
        <Box
          maxWidth="xl"
          fixed
          sx={{
            backgroundColor: "#E5E5E5",
            minHeight: "80%",
            maxHeight: "150%",
            borderRadius: 4,
            paddingBottom: 3,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            maxWidth="xl"
            sx={{
              background: "#86C6F4",
              minHeight: "20%",
              maxHeight: "50%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Box gridColumn="span 6" sx={{ padding: 5 }}>
              <img src={user} className="image-icon" />
              <span
                style={{
                  margin: "25px",
                  fontSize: "25px",
                  verticalAlign: "super",
                  fontWeight: "bold",
                }}
              >
                Software Eng
              </span>
            </Box>
            <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
              <Link to="/passwordmanager">
                <Button
                  className="nav-bar-btn"
                  variant="contained"
                  sx={{ marginRight: "1%", marginLeft: "0.1%" }}
                >
                  Password Manager
                </Button>
              </Link>
              <Link to="/imagemanager">
                <Button
                  className="nav-bar-btn"
                  variant="contained"
                  sx={{ marginRight: "1%" }}
                >
                  Image Manager
                </Button>
              </Link>
              <Button
                className="nav-bar-btn"
                variant="contained"
                sx={{ marginRight: "1%" }}
              >
                Logout
              </Button>
            </Box>
          </Box>

          <h1 style={{ textAlign: "center", paddingTop: 15 }}>
            Add and Encrypt an Image
          </h1>
          <form action="">
            <Box
              maxWidth="xl"
              fixed
              sx={{
                backgroundColor: "#E1E1E1",
                minHeight: "20%",
                maxHeight: "50%",
                paddingBottom: 5,
                borderRadius: 4,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <span>
                <b>Title</b>
              </span>
              <br></br>
              <input type="text" id="name" onChange={this.handleNameChange} />
              <br></br>
              <span>
                <b>Select Image</b>
              </span>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  const file = e.target.files[0];
                  this.setState({ image: file });
                }}
              />
            </Box>
          </form>
          <Box
            maxWidth="xl"
            fixed
            sx={{
              backgroundColor: "#E1E1E1",
              height: "20%",
              borderRadius: 4,
              paddingBottom: 5,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <center>
              <Button
                onClick={this.send}
                type="submit"
                width="250px"
                sx={{ backgroundColor: "#55AAFF", color: "#000000" }}
              >
                Encrypt and Add
              </Button>
            </center>
          </Box>
        </Box>
      </div>
    );
  }
}

export default AddImage;
