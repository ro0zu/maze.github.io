let juegoIniciado = false;

  const paredes = document.querySelectorAll('.pared');
  const meta = document.getElementById('meta');
  const inicio = document.getElementById('inicio');

  // Iniciar el juego al pasar por el inicio
  inicio.addEventListener('mouseover', () => {
    juegoIniciado = true;
    console.log("Juego iniciado");
  });
 
  
  // Detectar llegada a la meta
  meta.addEventListener('mouseover', () => {
    if (juegoIniciado) {
      alert("¡Ganaste! 🎉");
      location.reload();
    }
  });
  
  // Detectar colisión con paredes
  paredes.forEach(pared => {
    pared.addEventListener('mouseover', () => {
      if (juegoIniciado) {
        alert("¡Perdiste! Tocaste una pared.");
        location.reload();
      }
    });
  });
  
  // Detectar si el jugador saca el cursor fuera del laberinto
  laberinto.addEventListener('mouseleave', () => {
    if (juegoIniciado) {
      alert("¡Perdiste! Saliste del laberinto.");
      location.reload();
    }
  });
  
  