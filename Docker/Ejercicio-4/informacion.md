# ¿Qué son los volúmenes de Docker?

Los volúmenes de Docker son directorios o dispositivos de bloque independientes que se utilizan para almacenar datos de forma persistente. A diferencia de los datos que se almacenan dentro de un contenedor, los datos de un volumen no se eliminan cuando se detiene o elimina el contenedor. Esto significa que puedes usar volúmenes para almacenar datos que necesitas que persistan, incluso si recreas o mueves tus contenedores.

# ¿Cómo funcionan los volúmenes de Docker?

Cuando creas un volumen, Docker crea un directorio o dispositivo de bloque en el host donde se ejecuta Docker. Luego, puedes montar este volumen en uno o más contenedores. Una vez que un volumen está montado en un contenedor, los datos escritos en el volumen se almacenan en el directorio o dispositivo de bloque del host.

# Opciones de volumen de Docker:

Docker proporciona varias opciones para crear y administrar volúmenes:

docker volume create: Crea un nuevo volumen.
docker volume inspect: Inspecciona un volumen existente.
docker volume ls: Enumera todos los volúmenes existentes.
docker volume rm: Elimina un volumen existente.
docker volume mount: Monta un volumen en un contenedor.
docker volume unmount: Desmonta un volumen de un contenedor.