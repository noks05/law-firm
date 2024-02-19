(() => ymaps.ready(function () {
  const map = new ymaps.Map('map', {
    center: [55.752017, 37.606283],
    zoom: 14,
    type: 'yandex#map',
    controls: []
  });

  const mark = new ymaps.Placemark(
    [55.751817, 37.599292],
    {
      hintContent: 'Москва, ул. Арбат, д. 1',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './src/img/point-map.svg',
      iconImageSize: [33, 44],
      iconImageOffset: [-10, -20]
    }
  )
  map.geoObjects.add(mark);

  const mapEl = document.getElementById('map')
  mapEl.style.height = String(mapEl.parentElement.style.height)
  mapEl.style.height = 'auto'
  mapEl.firstElementChild.style.height = '100%'
  mapEl.firstElementChild.style.maxHeight = '650px'
  mapEl.firstElementChild.style.width = '100%'

  const mediaQuery = window.matchMedia('(max-width: 768px)')
  if (mediaQuery.matches) {
    mapEl.style.height = '400px'
  }
}))()
