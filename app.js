import { getTareas,getUsuario } from "./Tareas/index.js"; //Importamos los modulos de tareas
import { getUserName,getAlmbum ,getPhoto} from "./Datos/index.js"; //Importamos los modulos de datos
import { listarPost } from "./Post/index.js";

let cont = true; //Declaracion de la variable cont como true para iniciar el ciclo while  

const URL = "https://jsonplaceholder.typicode.com/"; //Se declara la constante de la url del link de direccion del arhivo json

while(cont == true){ //ciclo while que evalua que la variable cont sea true para ejecutar el ciclo repetitivo

//Mensaje de menu con las opciones validas 
let opcionActividad = parseInt(prompt("Bienvenido al menu de evaluacion de asincronia \n SELECCIONA UNA OPCION VALIDA \n 1.Tareas \n 2.datos usuario \n 3.filtrar post \n 4.nombre y telefono \n 5.Usuarios-post-comentarios-albumenes-fotos \n 0. Salir del programa")); //Evaluar que opcion de la evaluacion quiere

switch(opcionActividad){
     
    //Segun la opcion que seleccione el usuario 
    case 1:
        
        let optativaTarea = parseInt (  prompt("Que prefieres? \n 1.Listar tareas pendientes \n 2.Listar todas las tareas"));
        //Dependiendo de la opcion que seleccione el usuario ejecutara un modulo 
        if(optativaTarea === 1){
                const TraerDatos = async()=>{

                    const usuarios = await getUsuario(URL); //Se envia el argumento url al usuario que va hacer la consulta al jso ndel usuairi 
                    return await Promise.all(usuarios.map(async(user)=>{ //Se recorre el arreglo que nos devulve usuairos
                         const tareas = await getTareas(URL,user); //se le nevia como parametros el url y la data de users a la funcion getTAREAS 
                         const tareasPendientes = tareas.filter((palabra)=>palabra.completed == false ) //se filtran las areas que no estan compeltadas 
                        
                         return{tareasPendientes} //retorna el reultado 
              
                    }))
              
              }
              
              TraerDatos().then((info)=>{ //Se resuelve la promesa
                  console.log("Resultado de tareas pendientes")
                  console.log(info); //Imprime el resultado
              }) 

            }else if(optativaTarea === 2){
                const TraerDatos = async()=>{

                    const usuarios = await getUsuario(URL); //Se envia el argumento url al usuario que va hacer la consulta al jso ndel usuairi 
                    return await Promise.all(usuarios.map(async(user)=>{ //Se recorre el arreglo que nos devulve usuairos
                         const tareas = await getTareas(URL,user); //se le nevia como parametros el url y la data de users a la funcion getTAREAS 
                           
                        
                         return{tareas} //retorna el reultado 
              
                    }))
              
              }
              
              TraerDatos().then((info)=>{ //Se resuelve la promesa
                  console.log("Resultado de todas las tareas")
                  console.log(info); //Imprime el resultado
              })

            }else{
                alert("Selecciona una opcion valida")
            }

        break;
  
    case 2:
        let optativaDatos = parseInt ( prompt("Que prefieres? \n 1.Listar por nombre de usuario \n 2.Listar todos los usuarios con albumnes y fotos"));
         
        if(optativaDatos == 1 ){
            let nombreUsuario = prompt("Ingrese el nombre de usuario"); //Se le pide que ingrese el nombre de usauro para despues pasarlo ocmo parametro
            const ObtenerDatos = (async()=>{
       
                const usuario = await getUserName(URL,nombreUsuario) //Se realiza la consulta en el json
                return await Promise.all(usuario.map((async(user)=>{
                    const album = await getAlmbum(URL,user); //Se le pasan como argumentos el url y lo que nos devuelve la callback del arreglo usuario
                    const albumGaleria = await Promise.all(album.map(async(album) =>{ //Recorremos un nuevo arreglo con map en este caso el de album
                        const galeria = await getPhoto(URL,album) //Obtenemos la foto 
                        
                        return{galeria};   //Retornamos el album con parametro rest porque son muchos albumnes y galeria
                    }));  
            
            
            
                    return{...user,albumGaleria} //Retorna los usuarios y las galerias 
            
            
                })));
            
            
            })
            
            ObtenerDatos().then(async(data)=>{ //Obtiene los datos y resuelve la promesa 
                console.log("Listar segun el user name")
                 console.log(data);
            })
           
        }else if(optativaDatos == 2){
             //Se le pide que ingrese el nombre de usauro para despues pasarlo ocmo parametro
            const ObtenerDatos = (async()=>{
       
                const usuario = await getUsuario(URL) //Se realiza la consulta en el json
                return await Promise.all(usuario.map((async(user)=>{
                    const album = await getAlmbum(URL,user); //Se le pasan como argumentos el url y lo que nos devuelve la callback del arreglo usuario
                    const albumGaleria = await Promise.all(album.map(async(album) =>{ //Recorremos un nuevo arreglo con map en este caso el de album
                        const galeria = await getPhoto(URL,album) //Obtenemos la foto 
                        
                        return{galeria};   //Retornamos el album con parametro rest porque son muchos albumnes y galeria
                    }));  
            
            
            
                    return{...user, albumGaleria} //Retorna los usuarios y las galerias 
            
            
                })));
            
            
            })
            
            ObtenerDatos().then(async(data)=>{ //Obtiene los datos y resuelve la promesa
                console.log("Listar todos los usuarios con album y galeria") 
                 console.log(data);
            })
        }else{
            alert("Selecciona una opcion valida")
        }


        
        break;
        
    case 3:

        let optativaPost = parseInt(prompt("Que prefieres? \n 1.Filtrar post por nombre \n 2.Filtrar todos los post "));

        if(optativaPost == 1){
           
            let nombrePost = prompt("Ingrese el nombre del post")
            let regex = new RegExp(nombrePost)
            const obtenerPost = async()=>{
                
                const post = await listarPost(URL)
                const postTitle = post.filter((posteo)=>regex.test(posteo.title))
                return  postTitle
            }

            obtenerPost().then((data)=>{
                console.log("Informacion sobre el post segun el nombre")
                console.log(data);
            })

        }else if(optativaPost == 2){
            
            const obtenerPost = async()=>{
                
                const post = await listarPost(URL)
                
                return  post
            }

            obtenerPost().then((data)=>{
                console.log("Informacion de todos los post")
                console.log(data);
            })
        }else{
            alert("Selecciona una opcion valida")
        }

        break;
    case 4:
        let  optativaTelefono = parseInt(prompt("Que prefieres \n 1.Consultar todos los usuarios "))        
         
        if(optativaTelefono == 1){
         
            const obtenerInfo = async()=>{

                const usuarios = await getUsuario(URL);
                return await Promise.all(usuarios.map(async(user)=>{
                     return{usuario:user.name,
                        phone:user.phone
                     }
           
                }))

        
            }

            obtenerInfo().then((resultado)=>{
                console.log("Usuario y telefono")
                 console.log(resultado)
            })
        }
        

        break;
    case 5:
        let optativaInformacion = prompt("Que prefieres \n 1.Consultar por idUsuario ")

        break; 
        
    case 0: 
         cont = false;
         break;  
        
    //Si el usuario llega a seleccionar una opcion no valida     
    default:
        alert("Selecciona una opcion valida");    

}


}

//Mensaje de salida
alert("Programa Finalizado ABRIR CONSOLA PARA VER RESULTADOS");