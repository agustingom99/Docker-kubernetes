FROM node:14-slim AS Build

#directorio de trabajo
WORKDIR /app

#copia el package.json desde el directorio actual al directorio de trabajo
COPY package.json ./

#instala las dependencias de tu applicación dentro de la imagen de docker
RUN npm install

FROM node:14-slim AS Deploy

WORKDIR /app
#Copia todos los archivos y directorios desde la imagen de Docker de la fase de construcción (llamada "Build") al directorio de trabajo en la imagen de Docker de la fase de despliegue.
COPY --from=Build /app . 

#opia todos los archivos y directorios desde el directorio local al directorio de trabajo en la imagen de Docker de la fase de despliegue.
COPY . .

ENV PORT=3000
ENV message="Hola con variables de entorno"

#pone el puerto 3000, lo que permite que los contenedores basados en esta imagen escuchen las conexiones en ese puerto
EXPOSE 3000

CMD [ "npm","start" ]