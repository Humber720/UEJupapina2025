function mostrarContenido(curso) {
    const titulo = document.getElementById('tituloCurso');
    const contenido = document.getElementById('infoCurso');
  
    const archivoPDF = `contenido/${curso.replace(/\s+/g, '')}.pdf`;
  
    titulo.textContent = `${curso} de Secundaria`;
  
    contenido.innerHTML = `
      <p>Visualizando el contenido del curso <strong>${curso}</strong>.</p>
  
      <object data="${archivoPDF}" type="application/pdf" width="100%" height="600px">
        <p>Tu navegador no puede mostrar el PDF aquí.
        <a href="${archivoPDF}" target="_blank">Haz clic aquí para verlo</a>.</p>
      </object>
    `;
  }
  