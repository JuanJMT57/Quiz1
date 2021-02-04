function datos(){
    let nombreUsuario = document.getElementById("first_name").value;
    let Apellido = document.getElementById("last_name").value;
    document.getElementById("Aceptar").innerHTML = "Nombre completo: " +nombreUsuario+Apellido;
   
    let emailUsuario = document.getElementById("email").value;
    document.getElementById("Aceptar").innerHTML = "Correo electronico: " +emailUsuario;

    let contactUsuario = document.getElementById("contacto").value;
    document.getElementById("Aceptar").innerHTML = "Número de contacto: "+contactUsuario ;

    let direcciontUsuario = document.getElementById("contacto").value;
    document.getElementById("Aceptar").innerHTML = "Direccion de casa: "+contactUsuario ;

    let direcciontUsuario = document.getElementById("contacto").value;
    document.getElementById("Aceptar").innerHTML = "Direccion opcional: "+contactUsuario ;



    
    

}