const calcularVolume = (r) => {
    const pi = 3.14159;
    const volume = (4 / 3) * pi * Math.pow(r, 3);
    return `VOLUME = ${volume.toFixed(3)}`;
  };
  
 
  console.log(calcularVolume(3));     
  console.log(calcularVolume(15));    
  console.log(calcularVolume(1523));  
  