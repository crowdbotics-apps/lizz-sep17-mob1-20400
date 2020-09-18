import axios from "axios"
import { PARENT_ONLY_USERNAME, PARENT_ONLY_PASSWORD } from "react-native-dotenv"
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
function dogapi_get_breeds_image_random_read() {
  return dogAPI.get(`/breeds/image/random`)
}
export const apiService = { dogapi_get_breeds_image_random_read }
