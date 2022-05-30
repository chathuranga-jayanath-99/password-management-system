import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/images";

function imageUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getImages() {
    return http.get(apiEndpoint);
  }
  
  export function getImage(imageId) {
    return http.get(imageUrl(imageId));
  }

  export function saveImage(image) {
    console.log(image);
    if (image._id) {
      const body = { ...image };
      delete body._id;
      return http.put(imageUrl(image._id), body);
    }
    return http.post(apiEndpoint, image);
  }
