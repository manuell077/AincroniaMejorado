export const solicitud = async(URL) =>{ //Metodo asincronico quue recibe como parametro la url del sitio web
    
    let solicitud = await fetch(URL); //Se hace la solicitud al url 
    let datos = await solicitud.json(); //Traemos el resultado a un objeto 

    return datos; //Retornamos los datos

} 