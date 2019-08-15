import axios from "axios";
const env = process.env || {};
const ROOT_URL = env.REACT_APP_API_BE;
export default class ApiPOST {
  // get post api
  static fetchPosts() {
    const url = `${ROOT_URL}api/posts/`;
    const request = axios.request({
      url,
      method: "GET"
    });
    return request;
  }
  // delete post api
  static deletePosts(action) {
    const url = `${ROOT_URL}api/posts/${action}`;
    const request = axios.request({
      url,
      method: "DELETE"
    });
    return request;
  }
  static addPosts(action) {
    const url = `${ROOT_URL}api/posts/`;
    const request = axios.request({
      url,
      method: "POST",
      data: action
    });
    return request;
  }
}
