function calcularLitros(tempo, velocidade) {
    const distancia = tempo * velocidade;
    const litros = distancia / 12;
    return litros.toFixed(3);
  }
  
 
  console.log(calcularLitros(10, 85));   
  console.log(calcularLitros(2, 92));    
  console.log(calcularLitros(22, 67));   
  