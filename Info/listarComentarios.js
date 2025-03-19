import {solicitud} from "../Helpers/index.js"; //Se importa el metodo solicitud 
export const getComentarios=async(URL,post)=>{ //Se obtienen los parametros url y post 
    return  await solicitud(`${URL}/comments?postId=${post.id}`) //Se realiza la solicitud a los comentarios  segun el postId
}