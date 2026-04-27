// Funci?n para inicializar el comparador de im?genes
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el slider de Juxtapose
  var slider = new juxtapose.JXSlider(
    '#foo',
    [
      {
        src: 'data/foto_2010_hc.jpg',
        label: 'A?o 2010',
        credit: 'Municipio de Quito - StereoCarto',
      },
      {
        src: 'data/foto_2022_hc.jpg',
        label: 'A?o 2022',
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
});
