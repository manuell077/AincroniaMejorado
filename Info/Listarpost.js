import {solicitud} from "../Helpers/index.js"; //Se importa la  solicitud 
export const getPostUsers= async(URL,usuario)=>{//Funcion que recibe como parametros el url y el objeto usuario
    return  await    solicitud(`${URL}/posts?userId=${usuario.id}`) //Se hace la solicitud de los post Segun los usuarios
    
}