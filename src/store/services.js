import axios from "axios"
import {
  REGISTER_USERNAME,
  REGISTER_PASSWORD,
  PARENT_ONLY_USERNAME,
  PARENT_ONLY_PASSWORD,
  REGISTER_USERNAME,
  REGISTER_PASSWORD
} from "react-native-dotenv"
const register = axios.create({
  baseURL: "https://app3.jackrabbitclass.com/regv2.asp?id=540191",
  auth: { username: REGISTER_USERNAME, password: REGISTER_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const parentOnly = axios.create({
  baseURL:
    "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=540191",
  auth: { username: PARENT_ONLY_USERNAME, password: PARENT_ONLY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const register = axios.create({
  baseURL: "https://app3.jackrabbitclass.com/regv2.asp?id=540191",
  auth: { username: REGISTER_USERNAME, password: REGISTER_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogapi_get_breeds_image_random_read() {
  return dogAPI.get(`/breeds/image/random`)
}
export const apiService = { dogapi_get_breeds_image_random_read }
