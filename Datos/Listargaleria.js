import {solicitud} from "../Helpers/index.js";  //Se importa el modulo ode solicitud

export const getPhoto = async(URL,album)=>{ //Obtiene el url y el album  como parametros 
          
    return solicitud(`${URL}/photos?albumId=${album.id}`) //bucas todas las fotos que tengan el mismo albumId 
}