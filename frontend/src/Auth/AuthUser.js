import axios from "axios";
import { API_URL } from "../helper/url_helper";

export default function AuthUser() {
  const http = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const https = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return {
    http, 
    https,
  };      
}         
