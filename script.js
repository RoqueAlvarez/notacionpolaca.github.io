
const polacaAInfijaConArray = expresion => {
    const caracters = expresion.split(' ').reverse(); 
    const resultado = []; 
    caracters.forEach(caracter => { 
        if (!isNaN(caracter)) {    
            resultado.push(caracter);
        } else {
            const operando1 = resultado.pop();
            const operando2 = resultado.pop();
            const nuevaExpresion = `(${operando1} ${caracter} ${operando2})`;
            resultado.push(nuevaExpresion);
        }
    });
    return resultado[0];
};
const calcularOperacion = expresionInfija => {
    try {
        return eval(expresionInfija); 
    } catch (error) {
        return "Expresión inválida"; 
    }
};
document.getElementById("formulario").addEventListener("submit", evento => {
    evento.preventDefault(); 
    const expresionPolaca = document.getElementById("expresion-polaca").value; 
    const expresionInfija = polacaAInfijaConArray(expresionPolaca);
    const resultadoOperacion = calcularOperacion(expresionInfija);
    document.getElementById("resultado-operacion").innerText = resultadoOperacion;
    document.getElementById("resultado-infija").innerText = expresionInfija;
});
