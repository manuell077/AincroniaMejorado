import {solicitud} from "../Helpers/index.js";    //Se importa el modulo ode solicitud

export const getUsuario = async(URL)=>{ //Se crea una funcion expresada que recibe como parametro el url 

      return solicitud(`${URL}users`); //Se realiza la solicitud 
}