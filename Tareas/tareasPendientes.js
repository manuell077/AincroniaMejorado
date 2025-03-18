import {solicitud} from "../Helpers/index.js";   //Se importa el modulo de solicitud

export const getTareas =  async(URL,usuario)=>{ //Recibe como parametros el url y el objeto usuario
    
     return solicitud(`${URL}todos?userId=${usuario.id}`) //Realiza la solicitud segun el id del usuario 
     
    
}

