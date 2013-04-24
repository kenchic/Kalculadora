document.addEventListener("deviceready", onDeviceReady, false);

function CalcularCuotas()
{
    var formIngreso = document.getElementById('formIngreso');
    var formResultado = document.getElementById('formResultado');
    var Monto = document.getElementById('txtMonto');
    var txtIntereses = document.getElementById('txtIntereses');
    var txtNoCuotas = document.getElementById('txtNoCuotas');
    
    var numeroElevado = + Math.pow(1 + (txtIntereses.value/100), txtNoCuotas.value);   
    var resultado= Monto.value * ( (txtIntereses.value/100) * numeroElevado ) / ( numeroElevado-1);
    
    formResultado.innerHTML = 'Valor a pagar mensualmente: ' + parseInt(resultado);
    formResultado.style.display = 'block';
    formIngreso.style.display = 'none';    
}

function Limpiar() {
    var formIngreso = document.getElementById('formIngreso');
    var formResultado = document.getElementById('formResultado');
    var Monto = document.getElementById('txtMonto');
    var txtIntereses = document.getElementById('txtIntereses');
    var txtNoCuotas = document.getElementById('txtNoCuotas');

    Monto.value = '';
    txtIntereses.value = '';
    txtNoCuotas.value = '';
    formResultado.style.display = 'none';
    formIngreso.style.display = 'block';
}