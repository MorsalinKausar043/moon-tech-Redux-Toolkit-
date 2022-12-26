import axios from "axios";

let URL;
switch (process.env.REACT_APP_ENVIRONMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000/";
    break;
  case "PRODUCTION":
    URL = "https://moon-tech-backend-production.up.railway.app/";
    break;
  default:
    URL = "http://localhost:5000/";
    // URL = "https://moon-tech-backend-production.up.railway.app/";
    break;
}
const Instance = axios.create({
  baseURL: URL,
});

export default Instance;
