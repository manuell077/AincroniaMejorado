import {solicitud} from "../Helpers/index.js"; //importa el modulo de solicitud 

export const getFotos = async(URL,album)=>{ //Obtiene el url y el album  como parametros 
          
    return solicitud(`${URL}/photos?albumId=${album.id}`) //bucas todas las fotos que tengan el mismo albumId 
}