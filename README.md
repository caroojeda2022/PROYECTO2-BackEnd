# PROYECTO2-BackEnd
API que permite publicar notas privadas de texto y categorizarlas

# Aplicación de notas de texto

Este ejercicio consiste en crear una API que permita publicar notas privadas de texto y sus categorías.

## Instalar
- Crear una base de datos vacía en una instancia de MySQL local. (revisar)
- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.(revisar)
- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada. (revisar)
- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.(revisar)

## Entidades

- Anónimo:
  - login
  - email
  - password

  Registro:
  - email
  - password

Usuarios registrado:
- GET [/nota] - Ver su listado de notas, (solo títulos) 
- FALTA [/nota] - Visualizar nota
- POST [/nota] - Crear una nota (título, texto y categoría única (fijas)
- GET [/nota/:ModNota] - Modificar sus notas: título, texto y categoría.

Opcional:
- GET [/nota/:idNota] - Marcar una nota como pública.
(1- Por defecto todas las notas son privadas,
2- Solo pueden ser verificadas por su creador,
3- Si una nota es pública puede ser leída por cualquier usuario registrado y logueado en la api.
4- Las notas públicas solo se pueden acceder si conoce la URL.
5- DELETE [/nota/:id] - Eliminar una nota.
6- POST [/nota] - Permite crear, editar y borrar categorías (titulo, texto y categoría única (fijas) con token)


Nota:
- Ver listado de notas - muestra solo titulos.
- Visualiza una nota.
- Crear una nota (necesita titulo, texto y categoría única (fijas)
- Modificar sus notas: título,texto y categoría.
- Imagen: poder asociar una imagen(única) a cada nota.
