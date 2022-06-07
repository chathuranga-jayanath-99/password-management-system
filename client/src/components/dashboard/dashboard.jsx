import React from "react";
import "./dashboard.css";
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import {
  Button,
  InputAdornment,
  LinearProgress,
  linearProgressClasses,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "../../assets/img/blue.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import user from "../../assets/img/user.svg";
import auth from "../../services/authService";
import { FormGroup, FormHelperText, Paper } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import twitter from "../../assets/img/Social Twitter.svg";
import google from "../../assets/img/Social Google.svg";
import facebook from "../../assets/img/Social FB.svg";
import snapchat from "../../assets/img/Social Snapchat.svg";
import linkdin from "../../assets/img/Social Linkdin.svg";
import { getPasswords } from "../../services/passwordService";

class Dashboard extends React.Component {
  state = {
    user: {},
    passwords: [],
  };
  async componentDidMount() {
    const user = auth.getCurrentUser();
    // const {user} = this.props;
    
    const { data: passwords } = await getPasswords();

    console.log(passwords);
    this.setState({ user, passwords });
  }
  handleChange = (e, value) => {
    const newValues = this.state.passwords;
    const index = newValues.indexOf(value);
    newValues[index].password = e.target.value;

    this.setState({ passwords: newValues });
    // setValues({ ...values, [prop]: event.target.value });
  };
  handleClickShowPassword = (value) => {
    const newValues = this.state.passwords;
    console.log(value);
    const index = newValues.indexOf(value);
    newValues[index].showPassword = !newValues[index].showPassword;
    this.setState({ passwords: newValues });
  };
  render() {
    const Newpasswords = [...this.state.passwords];

    Newpasswords.length = 2;

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
                  textTransform: "capitalize",
                }}
              >
                {this.state.user.name}
              </span>
            </Box>
            <Box gridColumn="span 6" sx={{ paddingTop: 5 }}>
              <Link to="/passwordmanager">
                <Button
                  className="nav-bar-btn"
                  variant="contained"
                  sx={{ marginRight: "7%", marginLeft: "0.1%" }}
                >
                  Password Manager
                </Button>
              </Link>

              <Link to="/imagemanager">
                <Button
                  className="nav-bar-btn"
                  variant="contained"
                  sx={{ marginRight: "7%" }}
                >
                  Image Manager
                </Button>
              </Link>

              <Link to="/logout">
                <Button
                  className="nav-bar-btn"
                  variant="contained"
                  sx={{ marginRight: "7%" }}
                >
                  Logout
                </Button>
              </Link>
            </Box>
          </Box>

          <h1 style={{ textAlign: "center", paddingTop: 15 }}>Dashboard</h1>

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
            <p>Password Stored : {this.state.passwords.length}</p>
            <p>Frequently Used Passwords</p>
            {/* <Box maxWidth="xl" margin={4}> */}
            <FormGroup>
              {Newpasswords.map((password) => (
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(6, 1fr)"
                  maxWidth="1000px"
                  sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                >
                  <Box gridColumn="span 1" sx={{ marginLeft: "100px" }}>
                    <img src={password.logo} style={{ width: "70px" }} />
                  </Box>
                  <Box gridColumn="span 2" sx={{ paddingLeft: 10 }}>
                    <p
                      style={{ color: "#90A4AE", textTransform: "capitalize" }}
                    >
                      {password.title}
                    </p>
                  </Box>
                  <Box gridColumn="span 3">
                    <OutlinedInput
                      style={{ marginLeft: 50 }}
                      id="outlined-adornment-password"
                      type={password.showPassword ? "text" : "password"}
                      value={password.password}
                      disabled
                      onChange={(e) => this.handleChange(e, password)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              this.handleClickShowPassword(password)
                            }
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {password.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </Box>
                </Box>
              ))}
            </FormGroup>
            <Button href="/add-password" type="submit" className="add-btn">
              Add New Password
            </Button>
          </Box>

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
            <p>Stored Images : </p>
            <Button href="/addimage" type="submit" className="add-btn">
              Add New Image
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Dashboard;
