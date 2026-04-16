function actualizarTiempo() {
  const elemento = document.getElementById("tiempo");

  const inicio = new Date("2025-11-01 00:42:34");
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  elemento.innerHTML =
    dias + " días " +
    horas + " horas " +
    minutos + " min " +
    segundos + " seg";
}

actualizarTiempo();
setInterval(actualizarTiempo, 1000);