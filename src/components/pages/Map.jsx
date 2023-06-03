import React, { useEffect } from 'react';
import markerPin from "../img/recycle-bin.png";

const Map = () => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCtXaHO0zcrYOwz0QIA66C3iQaxEniZbEs&callback=initMap&libraries=geometry`;
    googleMapsScript.async = true;
    window.document.body.appendChild(googleMapsScript);

    // Inicializar el mapa una vez que el script se haya cargado
    googleMapsScript.addEventListener('load', initMap);

    function initMap() {
      // Crear una instancia del mapa
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.61772, lng: -68.33007 },
        zoom: 13,
      });

      // Solicitar la ubicación del usuario y almacenarla en una variable
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Crear un marcador para la ubicación del usuario
          const userMarker = new window.google.maps.Marker({
            position: userLocation,
            map: map,
            title: 'Tu ubicación',
          });
        });
      }

      const markers = [
        { lat: -34.617438, lng: -68.321647, title: 'Punto ECO #1', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: "../img/recycle-bin.png"},
        { lat: -34.615361, lng: -68.337249, title: 'Punto ECO #2', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}`},
        { lat: -34.619537, lng: -68.332456, title: 'Punto ECO #3', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.621273, lng: -68.344097, title: 'Punto ECO #4', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.598896, lng: -68.324633, title: 'Punto ECO #5', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.620728, lng: -68.311871, title: 'Punto ECO #6', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.620015, lng: -68.316056, title: 'Punto ECO #7', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.618579, lng: -68.312804, title: 'Punto ECO #8', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.609064, lng: -68.317628, title: 'Punto ECO #9', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
        { lat: -34.594653, lng: -68.343803, title: 'Punto ECO #10', desc: 'Punto de reciclaje apto para: vidrio, plástico y metales', image: `url: ${markerPin}` },
      ];



      const bounds = new window.google.maps.LatLngBounds();

      let currentInfoWindow = null;

      markers.forEach(function (marker) {
        const position = new window.google.maps.LatLng(marker.lat, marker.lng);
        bounds.extend(position);

        const mapMarker = new window.google.maps.Marker({
          position: position,
          map: map,
          title: marker.title,
          icon: marker.image,
        });

        mapMarker.addListener('click', function () {
          if (currentInfoWindow !== null) {
            currentInfoWindow.close();
          }

          const infowindow = new window.google.maps.InfoWindow({
            content: marker.title + ' ' + marker.desc,
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
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const distances = markers.map(function (marker) {
              return window.google.maps.geometry.spherical.computeDistanceBetween(
                userLocation,
                new window.google.maps.LatLng(marker.lat, marker.lng)
              );
            });

            const minIndex = distances.indexOf(Math.min(...distances));
            const nearestMarker = markers[minIndex];

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            const request = {
              origin: userLocation,
              destination: new window.google.maps.LatLng(nearestMarker.lat, nearestMarker.lng),
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

            infowindow.open(map, new window.google.maps.Marker({
              position: new window.google.maps.LatLng(nearestMarker.lat, nearestMarker.lng),
              map: map,
              title: nearestMarker.title,
            }));

            currentInfoWindow = infowindow;
          });
        } else {
          alert('No se ha podido obtener tu ubicación.');
        }
      });
    }
  }, []);

  return <div id="map" style={{ height: '400px', width: "100px" }}></div>;
};

export default Map;