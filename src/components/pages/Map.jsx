import React, { useEffect } from 'react';
import markerBlue from "../img/contenedor azul.png";
import markerYellow from "../img/contenedor amarillo.png";
import markerGreen from "../img/contenedor verde.png";
import Service from '../../service/Service'

const Map = () => {
   
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCtXaHO0zcrYOwz0QIA66C3iQaxEniZbEs&callback=initMap&libraries=geometry`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener('load', initMap);

    async function initMap() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.61772, lng: -68.33007 },
        zoom: 13,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const userMarker = new window.google.maps.Marker({
            position: userLocation,
            map: map,
            title: 'Tu ubicación',
          });
        });
      }

      const service =  new Service();
      let markers = await service.listarMarcadores("markers/vermarcadores");
      
      const bounds = new window.google.maps.LatLngBounds();

      let currentInfoWindow = null;

      await markers.forEach(function (marker) {
        marker.url_image = markerGreen;
        const position = new window.google.maps.LatLng(marker.latitud, marker.longitud);
        bounds.extend(position);

        const mapMarker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: marker.title,
          icon: marker.url_image,
        });

        mapMarker.addListener('click', function () {
          if (currentInfoWindow !== null) {
            currentInfoWindow.close();
          }

          const infowindow = new window.google.maps.InfoWindow({
            content: marker.title + ' ' + marker.descripcion,
          });

          currentInfoWindow = infowindow;
          infowindow.open(map, mapMarker);
        });
      });

      const button = document.getElementById('button');

      button.addEventListener('click', function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const userLocation = {
              latitud: position.coords.latitude,
              longitud: position.coords.longitude,
            };

            const distances = markers.map(function (marker) {
              return window.google.maps.geometry.spherical.computeDistanceBetween(
                userLocation,
                new window.google.maps.LatLng(marker.latitud, marker.longitud)
              );
            });

            const minIndex = distances.indexOf(Math.min(...distances));
            const nearestMarker = markers[minIndex];

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            const request = {
              origin: userLocation,
              destination: new window.google.maps.LatLng(nearestMarker.latitud, nearestMarker.longitud),
              travelMode: 'DRIVING',
            };

            directionsService.route(request, function (result, status) {
              if (status === 'OK') {
                directionsRenderer.setDirections(result);
              }
            });

            const infowindow = new window.google.maps.InfoWindow({
              content:
                'El marcador más cercano es ' +
                nearestMarker.title +
                ', a ' +
                Math.round(distances[minIndex]) +
                ' metros de distancia.',
            });

            if (currentInfoWindow !== null) {
              currentInfoWindow.close();
            }

            const nearestMarkerInstance = new window.google.maps.Marker({
              position: new window.google.maps.LatLng(nearestMarker.latitud, nearestMarker.longitud),
              map: map,
              title: nearestMarker.title,
            });

            infowindow.open(map, nearestMarkerInstance);

            currentInfoWindow = infowindow;
          });
        } else {
          alert('No se ha podido obtener tu ubicación.');
        }
      });
    }
  }, []);

  return <div id="map" style={{ height: '400px', width: "100%" }}></div>;
};

export default Map;
