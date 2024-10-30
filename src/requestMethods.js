import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Yzc3NGUyZDJhMTJlMjMzZjM0ZjQzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDMwMzYwMCwiZXhwIjoxNzEwNTYyODAwfQ.-xrD3f26QSsLlLnL__YRzp7ghxZzcnB6AlBtca7aW3Y"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token: `Bearer ${token}`}
})