import {solicitud} from "../Helpers/index.js"; //Importamos el modulo de solicitud  

export const listarPost = async(URL)=>{ //Metodo asincrono que recibe como parametro la url del json
       
       return solicitud(`${URL}posts`);  //Se realiza la solicitud con el url y se le añde el post para que nos traigan todos los post


}