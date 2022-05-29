import {environment} from "../../environments/environment";

const {API: baseURL} = environment;

export const urls ={
  auth: `${baseURL}/auth`,
  users: `${baseURL}/users`,
  cars: `${baseURL}/cars`,
}
