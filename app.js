
let cont = true; //Declaracion de la variable cont como true para iniciar el ciclo while  

while(cont == true){ //ciclo while que evalua que la variable cont sea true para ejecutar el ciclo repetitivo

//Mensaje de menu con las opciones validas 
let opcionActividad = parseInt(prompt("Bienvenido al menu de evaluacion de asincronia \n SELECCIONA UNA OPCION VALIDA \n 1.Tareas \n 2.datos usuario \n 3.filtrar post \n 4.nombre y telefono \n 5.Usuarios-post-comentarios-albumenes-fotos \n 0. Salir del programa")); //Evaluar que opcion de la evaluacion quiere

switch(opcionActividad){
     
    //Segun la opcion que seleccione el usuario 
    case 1:
        
        let optativaTarea =   prompt("Que prefieres? \n 1.Listar tareas pendientes \n 2.Listar todas las tareas");
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
alert("Programa Finalizado");