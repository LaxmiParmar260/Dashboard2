import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
 
export const getBearerToken = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("token") || null;
  }
  return null;
};
const cockChante_url = "api.cockchante.com";
const cockChante_protocol_url = "https://";
 
export const customBaseQuery = fetchBaseQuery({
  baseUrl: `${cockChante_protocol_url}${cockChante_url}/api`,
 
  prepareHeaders: (headers, { endpoint, body }) => {
    headers.set("accept", "*/*");
 
    const token = getBearerToken();
 
    const noTokenEndpoints = [];
 
    if (!noTokenEndpoints.includes(endpoint) && token) {
      headers.set("authorization", `Bearer ${token}`);
    }
 
    if (!(body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }
 
    return headers;
  },
});
