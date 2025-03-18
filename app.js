import { getTareas,getUsuario } from "./Tareas/index.js"; //Importamos el modulo de tareas


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

            }

        break;

    case 2:
        let optativaDatos =  prompt("Que prefieres? \n 1.Listar por nombre de usuario \n 2.Listar todos los usuarios con albumnes y fotos");
        break;
        
    case 3:
        let optativaPost = prompt("Que prefieres? \n 1.Filtrar post por nombre \n 2.Filtrar todos los post ");
        break;
    case 4:
        let  optativaTelefono = prompt("Que prefieres \n 1.Consultar todos los usuarios \n 2.Consultar cierto usuario")        
        break;
    case 5:
        let optativaInformacion = prompt("Que prefieres \n 1.Consultar por idUsuario \n 2.consultar todos los usuarios")
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