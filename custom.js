document.addEventListener('DOMContentLoaded', function() {
  var mapFrame = document.getElementById('map-frame');

  function onMapLoad() {
    var map = mapFrame.contentWindow.map;

    Reveal.on('fragmentshown', function(event) {
      var fragmentIndex = event.fragment.getAttribute('data-fragment-index');

      if (fragmentIndex == "1") {
        map.flyTo([47.786334, -3.734173], 10, {
          duration: 4  // Duration in seconds
        });
      } else if (fragmentIndex == "2") {
        map.flyTo([43.421052, -4.730063], 10, {
          duration: 4  // Duration in seconds
        });
      } else if (fragmentIndex == "0") {
        map.flyTo([45.480020, -3.922357], 7, {
          duration: 4  // Duration in seconds
        });
      }
    });
  }

  if (mapFrame.contentWindow.map) {
    onMapLoad();
  } else {
    mapFrame.onload = onMapLoad;
  }
});