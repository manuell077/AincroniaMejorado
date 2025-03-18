import {solicitud} from "../Helpers/index.js";  //Se importa el modulo ode solicitud

export const getUserName = async(URL,user)=>{ //Se crea una funcion expresada que recibe como parametro el url 

      return solicitud(`${URL}users?username=${user}`); //Se realiza la solicitud 
}