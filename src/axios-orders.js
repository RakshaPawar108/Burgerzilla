import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-react-81098.firebaseio.com/",
});

export default instance;
