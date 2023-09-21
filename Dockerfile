# Usa una imagen base de Node.js
FROM node:14

# Crea un directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo en el contenedor
COPY . .

EXPOSE 8080

# Instala las dependencias (si es necesario, ajusta según tu proyecto)
RUN npm install

# Comando para iniciar tu aplicación
CMD ["node", "app.js"]
