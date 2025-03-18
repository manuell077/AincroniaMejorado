import {solicitud} from "../Helpers/index.js"; 

export const listarPost = async(URL)=>{
       
       return solicitud(`${URL}posts`);


}