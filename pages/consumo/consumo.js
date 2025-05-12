const calcularConsumo = (distancia, combustivel) =>
    `${(distancia / combustivel).toFixed(3)} km/l`;
  
  
  console.log(calcularConsumo(500, 35.0));     
  console.log(calcularConsumo(2254, 124.4));   
  console.log(calcularConsumo(4554, 464.6));   
  