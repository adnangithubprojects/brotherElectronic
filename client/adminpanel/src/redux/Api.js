import axios from "axios";
import { base_url } from "../panel/assets/data/config";

const API = axios.create({
  baseURL: base_url,
});

export default API;
