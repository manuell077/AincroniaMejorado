import {solicitud} from "../Helpers/index.js"; //Se importa el modulo solicitud que contiene la peticion 
export  const getUsuariosAll=async(URL,id)=>{ //se exporta el  metodo getUsuarios quees expresada que tiene como parametros el url y el id
    let ruta=""; //Se inicializa la ruta vacia 
    if(id){ //Se valida si el campo esta vacio 
     ruta=`${URL}/users?id=${id}`; //Si el campo no esta vacio el id que se paso como parametro se mostrara 
    }else{
        ruta=`${URL}/users`; //De lo contrario mostrara todos los usuarios 
    }
  
    const usuarios = await solicitud(ruta); //Se hace la solicitud con el fetch gracias al metodo solicitud 
    return usuarios; //Retornamos la solicitud 

}