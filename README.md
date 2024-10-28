# Quinta aplicación de React, en esta ocasión con Vite
Esta aplicación de React fue creada utilizando Vite para mejorar la velocidad y eficiencia del desarrollo. En esta ocasión, se realizó una petición a una API externa y los datos obtenidos se incorporaron dinámicamente en la aplicación.

## Desafíos y Soluciones

### Problema de CORS
Al intentar desplegar la aplicación en GitHub Pages, nos encontramos con problemas de CORS (Cross-Origin Resource Sharing). GitHub Pages no permitía realizar solicitudes HTTP a la API externa debido a restricciones de seguridad.

### Solución con CORS Anywhere
Para resolver este problema, utilizamos un servicio de proxy externo llamado CORS Anywhere. Este servicio actúa como intermediario, permitiendo que las solicitudes HTTP se realicen a través de HTTPS, lo que evita problemas de contenido mixto y restricciones de CORS.


