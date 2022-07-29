let cuentas = [
    { nombre: "Enrique", saldo: 200, password: 'hunter' },
    { nombre: "Jesus", saldo: 290, password: '123' },
    { nombre: "Jose", saldo: 67, password: '1234' }
];

document.addEventListener("DOMContentLoaded",function(){
    let id = 0;
    cuentas.forEach(element => {
        id ++;
        if (! (localStorage.hasOwnProperty(element.usuario))){
            localStorage.setItem(element.usuario, JSON.stringify(element.saldo));
        }
    });   
});