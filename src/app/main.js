(function initializeComparisonSlider() {
  'use strict';

  function applyLayout(layout) {
    var selectedLayout = layout === 'editorial' ? 'editorial' : 'compact';
    var buttons = document.querySelectorAll('.layout-btn');

    document.body.setAttribute('data-layout', selectedLayout);

    buttons.forEach(function (button) {
      var isActive = button.getAttribute('data-layout') === selectedLayout;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setupLayoutSwitch() {
    var buttons = document.querySelectorAll('.layout-btn');
    var savedLayout = window.localStorage.getItem('ui-layout');

    applyLayout(savedLayout || 'compact');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var selectedLayout = button.getAttribute('data-layout');
        applyLayout(selectedLayout);
        window.localStorage.setItem('ui-layout', selectedLayout);
        fitSliderToViewport();
      });
    });
  }

  function fitSliderToViewport() {
    var slider = window.comparisonSlider;
    var selector = window.AppConfig && window.AppConfig.sliderSelector;
    var sliderHost = selector ? document.querySelector(selector) : null;

    if (!slider || !sliderHost || !slider.imgBefore || !slider.imgBefore.image) {
      return;
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var horizontalPadding =
      parseFloat(bodyStyles.paddingLeft || 0) +
      parseFloat(bodyStyles.paddingRight || 0);
    var containerWidth = sliderHost.parentElement
      ? sliderHost.parentElement.getBoundingClientRect().width
      : 0;

    // Usa el ancho del contenedor visual para mantener proporción y evitar desbordes.
    var viewportWidth = Math.max(320, window.innerWidth - horizontalPadding - 8);
    var targetWidth = Math.max(320, Math.min(viewportWidth, Math.floor(containerWidth - 2)));

    sliderHost.style.width = Math.floor(targetWidth) + 'px';
    sliderHost.style.maxWidth = 'none';

    if (typeof slider.setWrapperDimensions === 'function') {
      slider.setWrapperDimensions();
    }
  }

  document.addEventListener('DOMContentLoaded', function onReady() {
    setupLayoutSwitch();

    if (typeof juxtapose === 'undefined') {
      console.error('La librería Juxtapose no se cargó correctamente.');
      return;
    }

    if (!window.AppConfig || !Array.isArray(window.AppConfig.slides)) {
      console.error('No se encontró una configuración válida para el comparador.');
      return;
    }

    try {
      window.comparisonSlider = new juxtapose.JXSlider(
        window.AppConfig.sliderSelector,
        window.AppConfig.slides,
        window.AppConfig.options
      );

      fitSliderToViewport();
      window.setTimeout(fitSliderToViewport, 250);
      window.setTimeout(fitSliderToViewport, 800);

      window.addEventListener('resize', function onResize() {
        window.clearTimeout(window.__fitSliderTimer);
        window.__fitSliderTimer = window.setTimeout(fitSliderToViewport, 120);
      });
    } catch (error) {
      console.error('Error al inicializar el comparador de imágenes:', error);
    }
  });
})();
