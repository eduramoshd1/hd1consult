var titulo = document.querySelector('.titulo');
titulo.textContent='Aparecida Nutricionista';
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0 ; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var pesoValido=true;
    var alturaValida=true;
    
    var tdImc = paciente.querySelector('.info-imc');
    var imc = tdImc.textContent; 

    var tdResult = paciente.querySelector('.info-resul');
    var resultado = tdResult.textContent; 

    /*  valida peso */    
    if (peso <= 0 || peso >= 1000) {
        pesoValido=false;
        tdImc.textContent="Peso Inválido";
        paciente.classList.add('paciente-invalido');
        
    }
    /*  valida altura */
    if (altura <= 0 || altura >= 3.00) {
        alturaValida=false;
        tdImc.textContent="Altura Inválida";
        paciente.classList.add('paciente-invalido');
    }

    /*  retorna o IMC */
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        var resultado = analiseImc(imc);
        tdResult = resultado;
        }   
    }
    
   function analiseImc(imc){
        
        
        if (imc >= 0 && imc <= 18.5) {
            tdResult.textContent="Abaixo do peso";

        } else if (imc >= 18.5 && imc <= 24.9) {
            tdResult.textContent="Peso Normal";

        } else if (imc >=25 && imc <= 29.9 ) {
            tdResult.textContent="Sobrepeso";

        } else if (imc >=30 && imc <= 34.9 ) {
            tdResult.textContent="Obesidade grau 1";
            paciente.classList.add("paciente-emergencia");
        } else if (imc >=35 && imc <= 39.9 ) {
            tdResult.textContent="Obesidade grau 2";
            paciente.classList.add("paciente-emergencia");
        } else if (imc >=40 && imc <=999 ) {
            tdResult.textContent="Obesidade grau 3 - Emergência";
            paciente.classList.add("paciente-emergencia");
        }
     
    return tdResult.textContent;
}
 
function calculaImc(peso,altura){
    var imc = 0;
    imc = (peso/(altura*altura));
    return imc.toFixed(2);
}