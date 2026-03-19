document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton');
    
    boton.addEventListener('click', () => {
        const contenido = document.getElementById('palabras').value;
        document.getElementById('textosingresados').innerText = contenido;
    });
});