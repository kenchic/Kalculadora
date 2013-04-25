document.addEventListener("deviceready", onDeviceReady, false);

function CalcularCuotas()
{
    var formIngreso = document.getElementById('formIngreso');
    var formResultado = document.getElementById('formResultado');
    var Monto = document.getElementById('txtMonto');
    var txtIntereses = document.getElementById('txtIntereses');
    var txtNoCuotas = document.getElementById('txtNoCuotas');
    
    var numeroElevado = + Math.pow(1 + (txtIntereses.value/100), txtNoCuotas.value);   
    var pago= Monto.value * ( (txtIntereses.value/100) * numeroElevado ) / ( numeroElevado-1);
    
    var tablaResultado = '<table class="formatHTML5">';
    tablaResultado += '<thead><tr><th>Cuota</th><th>Capital</th><th>Intereses</th></th><th>Pago</th><th>Saldo</th></tr></thead><tbody>';    
    var capital = Monto.value;
    var interes = 0;
    
    for (var i=1;i<=txtNoCuotas.value;i++)
    {   
        interes = parseFloat(capital * (txtIntereses.value/100)).toFixed(2);               
        tablaResultado += '<tr><td>'+i+'</td><td>'+parseInt(pago-interes)+'</td><td>'+interes+'</td><td>'+Math.round(pago)+'</td><td>'+parseInt(capital-(pago-interes))+'</td></tr>';                
        capital -= Math.round(pago-interes); 
    }
    tablaResultado += '</tbody></table>';
    
    formResultado.innerHTML = tablaResultado;
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

//c: numero decimales; d: caracter decimal; t:caracter miles
function FormatoMiles(c, d, t)
{
  var n = this, 
  c = isNaN(c = Math.abs(c)) ? 2 : c, 
  d = d == undefined ? "." : d, 
  t = t == undefined ? "," : t, 
  s = n < 0 ? "-" : "", 
  i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
  j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 }

