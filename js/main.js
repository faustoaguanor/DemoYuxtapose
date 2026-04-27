// Función para inicializar el comparador de imágenes
document.addEventListener('DOMContentLoaded', function() {
  // Verificar que la librería Juxtapose esté disponible
  if (typeof juxtapose === 'undefined') {
    console.error('La librería Juxtapose no se ha cargado correctamente');
    return;
  }

  try {
    // Inicializar el slider de Juxtapose
    var slider = new juxtapose.JXSlider(
      '#foo',
      [
        {
          src: 'data/foto_2010_hc.jpg',
          label: 'Año 2010',
          credit: 'Municipio de Quito - StereoCarto',
        },
        {
          src: 'data/foto_2022_hc.jpg',
          label: 'Año 2022',
          credit: 'Municipio de Quito - DMC',
        },
      ],
      {
        animate: true,
        showLabels: true,
        showCredits: false,
        startingPosition: '50%',
        makeResponsive: true,
      }
    );
  } catch (error) {
    console.error('Error al inicializar el comparador de imágenes:', error);
  }
});
