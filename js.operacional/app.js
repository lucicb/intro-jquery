//zona segura
//version nativa
document.addEventListener("DOMContentLoaded", function(){
    // recuperar id
    const nombre = $("#txtNombre").val();
    debugger;
    const cedula = $("txtCedula").val();
    
    //cambiar / asignar
    $("#txtNombre").val("Otro fulano");
    alert($("#txtNombre").val());
    $("#txtNombre").val("Luci");
    });
    
    // version jquery
    // zona segura
    $(function(){
    // recuperar id
    const nombre = $("#txtNombre").val();
    debugger;
    const cedula = $("txtCedula").val();
    
    //cambiar / asignar
    $("#txtNombre").val("Otro fulano");
    alert($("#txtNombre").val());
    $("#txtNombre").val("Dario");
    
    // añadir evento al boton
    $("#btnEnviar").on("click",function(){
        // cuando hiciste click se ejecuta aqui
        alert("Hiciste Click");
        $("#btnEnviar").removeClass("btn-warning");
        //Recuperar valores del formulario
        const nombre = $("#txtNombre").val();
        const cedula = $("txtCedula").val();

        if(nombre.trim()){
            alert('Complete este!');
            $("#txtNombre").css('border-color', 'red');
            return;
        }
        if(!apellido.trim()) {
            alert('Complete este!');
            $('#txtApellido').css('border-color', 'red').focus();
            return;
        }

        if(!cedula.trim()) {
            alert('Complete este!');
            $('#txtCedula').css('border-color', 'red').focus();
            return;
        }
        alert('La paciencia es la madre de la sabiduria');
    });
    });