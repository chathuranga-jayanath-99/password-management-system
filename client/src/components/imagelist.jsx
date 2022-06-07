import * as React from "react";
import { Link } from "react-router-dom";
import { getImages } from "../services/imageService";
import { getPasswords } from "../services/passwordService";
import Button from "@mui/material/Button";
import Box from "@mui/material/Button";
import { height, width } from "@mui/system";
import { viewPassword } from './../services/passwordService';

class ImageList extends React.Component {
  state = {
    // images: []
  };

  async componentDidMount() {
    // const { images } = this.props;
    // console.log(images);
    // images.forEach(image => {
    //     image.decrypted = false;
    // });

    // this.setState( {images} );
  }

  // decryptAndShow = async (id) => {
  //     console.log("decrypt: ", id);

  //   //   const decryptedImage = await viewPassword(id);
  //     // console.log(decryptedImage);
  // }

  // handleClick = (image)  => {
  //   console.log(this.state.images);
  //     const newImages = [...this.state.images];
  //     const index = newImages.indexOf(image);
  //     console.log(newImages);
  //     console.log(newImages[index]);
  //   // images[index].decrypted = !images[index].decrypted;
  //   // this.decryptAndShow(image.id);
  //   // this.setState({images});
  // }

  render() {
    const { images, onDecrypt, onDelete } = this.props;
    console.log("imagelist", images);

    if (images.length == 0) {
      return (
        <div>
          <p>No items to display.</p>
          <center>
            <Link to="/addimage">
              <Button
                type="submit"
                width="250px"
                sx={{ backgroundColor: "#55AAFF", color: "#000000" }}
              >
                Add an image
              </Button>
            </Link>
          </center>
        </div>
      );
    } else {
      return (
        <center>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
            {images.map((image) => {
              return (
                <p>
                  <Box
                    sx={{ backgroundColor: "#FFFFFF", gridColumn: "span 1" }}
                  >
                    <p>{image.title}</p>
                    <p>

                      <Button
                        onClick={() => onDecrypt(image)}
                        sx={{
                          backgroundColor: "#88FFAA",
                          marginTop: "10px",
                          color: "#000000",
                        }}
                      >
                        Decrypt
                      </Button>

                      <Button
                        onClick={() => onDelete(image)}
                        sx={{
                          backgroundColor: "#FF6688",
                          marginTop: "10px",
                          color: "#000000",
                        }}
                      >
                        Delete
                      </Button>

                      <div>
                          {image.decrypted &&
                          <img key={"img"+image.id} src={'data:image/png;base64,'+image.src} style={{ width: "500px", height: "500px" }} alt="" />
                        }
                      </div>
                    </p>
                  </Box>
                </p>
              );
            })}
          </Box>
          <p>
            <Link to="/addimage">
              <Button
                type="submit"
                width="250px"
                sx={{ backgroundColor: "#55AAFF", color: "#000000" }}
              >
                Add an image
              </Button>
            </Link>
          </p>
        </center>
      );
    }
  }
}

export default ImageList;
