var btnInicio = document.getElementById("iniciarSesion");

btnInicio.addEventListener('click', (e)=>{
    debugger
    var nUsuario = document.getElementById("user");
    var pass = document.getElementById("pass");

    var objUsuario = cuentas.find(obj => {return obj.nombre === nUsuario.value});
    var objAux;
    if(objUsuario) {
        var key = localStorage.getItem("user");
        if(nUsuario.value == objUsuario.nombre && pass.value == objUsuario.password) {
            objUsuario = (({nombre, saldo}) => ({nombre, saldo}))(objUsuario);
            if(localStorage.getItem("user") != null) {
                objAux = JSON.parse(localStorage.getItem("user"));
                if(objAux.nombre == objUsuario.nombre) {
                    objUsuario = objAux;
                } else {
                    localStorage.removeItem("user");
                }
            }
            localStorage.setItem("user" , JSON.stringify(objUsuario));
            window.location.href = "./cuenta.html";
        } else {
            nUsuario.value = "";
            pass.value = "";
            nUsuario.focus();
        }
    } else {
        nUsuario.value = "";
        pass.value = "";
        nUsuario.focus();
    }
});