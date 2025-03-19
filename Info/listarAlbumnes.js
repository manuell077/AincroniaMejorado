import {solicitud} from "../Helpers/index.js"; //Se importa el modulo de solicitud 

export const getAlmbunes = async(URL,usuario)=>{ //Metodo que obtiene el album  con parametros url y usuario 
          
       return solicitud(`${URL}/albums?userId=${usuario.id}`)  //con el metodo solicitud se hace la solicitud que busque el album que coincida con el usuarioId
}