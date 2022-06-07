import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveImage } from "../services/imageService";
import axios from "axios";

class ImageForm extends Form {
  state = {
    name: null,
    image: null,
  };

  schema = {
    userId: Joi.string().label("userId"),
    title: Joi.string().label("title"),
    image: Joi.string().label("image"),
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

  fileSelectedHandler = (event) => {
    // console.log(event.target);
    // const data = { ...this.state.data };
    // data.image = event.target;
    // this.setState({
    //   data,
    // });

    this.setState({
      image: event.target.files[0],
    });
  };

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

  handleNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Image Form</h1>
        {/* <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
          {this.renderInput("title", "Title")}
          {this.renderInput("image", "Image", "file")}
          {this.renderButton("Upload")}
        </form> */}
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleNameChange} />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                const file = e.target.files[0];
                this.setState({ image: file });
              }}
            />
          </div>
        </form>
        <button onClick={this.send}>Send</button>

        <h1>Images</h1>
      </div>
    );
  }
}

export default ImageForm;
