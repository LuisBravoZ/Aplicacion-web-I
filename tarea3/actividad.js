function limpiarCampos() {
    // Restablecer los valores de los campos del formulario
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("estadoCivil").selectedIndex = 0; // Restablecer el estado civil al primer valor
    document.getElementById("masculino").checked = false; // Desmarcar el botón de género
    document.getElementById("femenino").checked = false; // Desmarcar el botón de género
}

function enviarDatos() {
    alert("Formulario enviado"); 
    limpiarCampos()
}

