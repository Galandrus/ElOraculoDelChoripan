const respuestas = [
  'Sí, y con salsa criolla.',
  'No, ni con chimichurri.',
  'El humo dice que sí.',
  'Solo si llevás la parrilla.',
  'No tomes decisiones con hambre.',
  'Pedite un chori y pensalo mejor.',
  'El universo está en contra, pero vos mandate.',
  'Consultá con la vaca sagrada.',
  'La grasa del asado te dará la respuesta.',
  'Obvio, como un choripán en la cancha.',
  'Nah, eso es mala entraña.',
  'Primero, tomate un Fernet.',
  'Quizá… pero con pan francés.',
  'Hacelo. Y después festejá con chori.',
  'Eso es un sí, pero medio quemado.',
  'Nop. Y dejá de preguntar boludeces.',
  'El viento pampeano sopla a favor.',
  'Me estás cargando, ¿no?',
  'Está difícil… ¿tenés morrón?',
  'Cuidado: puede haber humo falso.',
  'Yo lo haría. Pero soy un choripán.',
  'Hoy no, mañana tal vez.',
  'Eso es carne podrida, no lo hagas.',
  'Tirale onda y fijate si chispea.',
  'Hacelo con condimento, sin miedo.',
  'El fuego dice no.',
  'Sos libre como el chori en la feria.',
  'Lo dijo San Choripancio: adelante.',
  'Primero resolvé el tema del pan.',
  'Dejate de joder y mandate.',
];

// Al cargar la página, oculto el div de respuesta
window.onload = function () {
  document.getElementById('respuesta').classList.add('oculto');
};

function consultar() {
  const pregunta = document.getElementById('pregunta').value;
  const respuestaEl = document.getElementById('respuesta');

  if (pregunta.trim() === '') {
    respuestaEl.textContent = 'Primero hacé una pregunta, no seas fiaca.';
    respuestaEl.classList.remove('oculto');
    return;
  }

  const index = Math.floor(Math.random() * respuestas.length);
  const respuesta = respuestas[index];

  respuestaEl.textContent = `"${respuesta}"`;
  respuestaEl.classList.remove('oculto');
}

function exportarTweet() {
  const pregunta = document.getElementById('pregunta').value.trim();
  const respuesta = document.getElementById('respuesta').innerText.trim();
  if (!pregunta || !respuesta) return;
  const texto = `Pregunta: ${pregunta}\nRespuesta: ${respuesta}\n#OraculoDelChoripan`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    texto
  )}`;
  window.open(url, '_blank');
  // Sugerencia: El usuario puede descargar la imagen con el botón "Descargar Story" y subirla manualmente al tweet.
}

function descargarStory() {
  html2canvas(document.querySelector('#oraculo-card')).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'oraculo-story.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
