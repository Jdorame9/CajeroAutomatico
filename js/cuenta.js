let usuario = JSON.parse(localStorage.getItem("user"));
let btnDepositar = document.getElementById("btnDepositar");
let btnRetirar = document.getElementById("btnRetirar");
let movimientos = document.getElementById("movimientos");
let formMovimientos = document.getElementById("formMovimiento");
let msgMovimiento = document.getElementById("mensajeMovimiento");
let btnCancelar = document.getElementById("cancelar");
let btnAceptar = document.getElementById("aceptar");
let btnCerrarSesion = document.getElementById("cerrarSesion");
const minCant = 10;
const maxCant = 990;
let bTipoMovimiento;

document.addEventListener("DOMContentLoaded",function(){
    formMovimientos.style.visibility = "hidden";
    movimientos.style.visibility ="visible";
    document.getElementById('saldoUser').innerHTML = "$ " + (usuario.saldo).toFixed(2) + " MXN";
    document.getElementById("cantidad").value = 0;
    bTipoMovimiento = 0;
});

btnDepositar.addEventListener('click', function(){
    movimientos.style.visibility = "hidden";
    formMovimientos.style.visibility = "visible";
    msgMovimiento.textContent = "Ingrese la cantidad a Depositar.";
    document.getElementById("cantidad").focus();
    bTipoMovimiento = 1;
});

btnRetirar.addEventListener('click', function(){
    movimientos.style.visibility = "hidden";
    formMovimientos.style.visibility = "visible";
    msgMovimiento.textContent = "Ingrese la cantidad a Depositar.";
    document.getElementById("cantidad").focus();
    bTipoMovimiento = 2;
});

btnCancelar.addEventListener('click', function(){
    movimientos.style.visibility = "visible";
    formMovimientos.style.visibility = "hidden";
    msgMovimiento.textContent = "";
    document.getElementById("cantidad").value = 0;
    bTipoMovimiento = 0;
});

btnAceptar.addEventListener('click', function(){
    let cantidad = Number(document.getElementById("cantidad").value);
    if(cantidad > 0) {
        if(validarMovimiento(cantidad, Number(usuario.saldo))){
            if(bTipoMovimiento == 1) {
                usuario.saldo = Number(usuario.saldo) + cantidad;
                localStorage.setItem("user", JSON.stringify(usuario));
                localStorage.setItem(usuario.usuario, JSON.stringify(usuario.saldo));
                document.getElementById('saldoUser').innerHTML = "$ " + (usuario.saldo).toFixed(2) + " MXN";
                movimientos.style.visibility = "visible";
                formMovimientos.style.visibility = "hidden";
                document.getElementById("cantidad").value = 0;
                alert("Se han depositado " + cantidad + " MXN a su cuenta exitosamente.");
            } else if (bTipoMovimiento == 2) {
                usuario.saldo = Number(usuario.saldo) - cantidad;
                localStorage.setItem("user", JSON.stringify(usuario));
                localStorage.setItem(usuario.usuario, JSON.stringify(usuario.saldo));
                document.getElementById('saldoUser').innerHTML = "$ " + (usuario.saldo).toFixed(2) + " MXN";
                movimientos.style.visibility = "visible";
                formMovimientos.style.visibility = "hidden";
                document.getElementById("cantidad").value = 0;
                alert("Se han retirado " + cantidad + " MXN a su cuenta exitosamente.");
            }
        }
    } else {
        if (cantidad < 0) {
            document.getElementById("cantidad").value = 0;
            alert("No se permiten numeros negativos");
        } else {
            alert("Favor de capturar una cifra mayor a 0");
        }
    }
});

function validarMovimiento(cantidad, saldo) {
    if(bTipoMovimiento == 1) {
        if( saldo + cantidad > maxCant){
            alert("No se puede tener mas de $" + maxCant + "MXN.");
            return false;
        }
    } else if(bTipoMovimiento == 2) {
        if(saldo - cantidad < minCant){
            alert("No se puede tener menos de $" + minCant + "MXN.");
            return false;
        }
    }
    return true;
}

btnCerrarSesion.addEventListener('click', function(){
    banderaMovimiento = 0;
    window.location.href= "./index.html";
});