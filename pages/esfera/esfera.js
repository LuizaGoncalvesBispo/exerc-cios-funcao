function calcularVolumeEsfera(raio) {
    const PI = 3.14159;
    const volume = (4 / 3) * PI * Math.pow(raio, 3);
    return `VOLUME = ${volume.toFixed(3)}`;
  }
  
  
  console.log(calcularVolumeEsfera(3));     
  console.log(calcularVolumeEsfera(15));    
  console.log(calcularVolumeEsfera(1523));  
  
  