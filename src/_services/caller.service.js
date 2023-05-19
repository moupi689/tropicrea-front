/* import des modules */

import axios from "axios";
import { accountService } from "./account.service";

const Axios = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

Axios.interceptors.request.use((request) => {
  let token = accountService.isLogged();
  console.log(token);
  return request;
});

export default Axios;
