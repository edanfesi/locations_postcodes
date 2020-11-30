# locations_postcodes
Este repositorio contiene el proyecto en donde se calcule el código postal usando lat y lng.

## Arquitectura
![image](https://drive.google.com/uc?export=view&id=11v9xLS_AsBAim-RMCh6lsb9qW6UULSMt)
* Se tienen dos microservicios: locations-ms y postal_codes_ms
* El microservicio locations-ms se encargará de:
  * almacenar en Postgres la latitud (lat) y longitud (lng).
  * producir un mensaje con la data previamente almacenada usando Kafka usando el topico _locations-events_.
* El microservicio de postal_codes_ms se encargará de:
  * consumir mensajes enviados por el tópico _locations-events_.
  * consultar el código postal usando las latituted y longitudes obtenidas por medio del endpoint api.postcodes.io/postcodes?lon=:longitude&lat=:latitude.
  * guardar la información recibida en mongoDB ya que la data es estructurada.
  * guardar en caché la información obtenida por el endpoint usando la key *'postal_codes_lat:${lat}_lng:${lng}'*
  * si la key ya existe entonces no se consulta al endpoint.
  
## ¿Cómo correrlo?
1. Se descarga el repositorio.
2. Se accede a la carpeta _locations_ms_ en _locations_postcodes/_: 
  ```cd locations_postcodes/locations_ms/```
3. Se debe correr el siguiente comando:
  ```docker-compose up```
 
## Próximos pasos
- [x] Hacer pruebas unitarias al microservicio de locations-ms.
- [ ] Crear el ms de postal_codes_ms
- [ ] Hacer consumer en postal_codes_ms para leer los mensajes enviados por el tópico _locations-events_.
- [ ] Crear resource para consultar postcodes.
- [ ] Crear conexión con mongoDB.
- [ ] Guardar resultado obtenido de postcodes en mongoDB.
- [ ] Hacer conexión a Redis.
- [ ] Guardar en Redis la información de los códigos postales solo si no existe anteriormente.
