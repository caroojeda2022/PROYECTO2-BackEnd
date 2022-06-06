# Aplicación de notas de texto

# PROYECTO2-BackEnd
API que permite publicar notas privadas de texto y categorizarlas

# Aplicación de notas de texto
Este ejercicio consiste en crear una API que permita publicar notas privadas de texto y sus categorías.

## Instalar
- Crear una base de datos vacía en una instancia de MySQL local. 
- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.
- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada. 
- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

## Entidades

- Anónimo:
  - login
  - email
  - password

  Registro de usuarios:
  - email
  - password

  Notas de texto:
  - idUser
  - Título, 
  - Texto 
  - Categoría única (fijas)
  - URL de la nota
  - createdNote
  - modifiedNote: : título,texto y categoría.
  - Nota pública 
  - Nota privada
- Imagen: poder asociar una imagen(única) a cada nota.

##Endpoints

Usuarios registrado:
- POST [/users] - Registro de usuario
- GET [/users/:id] - Devuelve información del usuario.
- GET [/users] - Devuelve información del usuario del token (necesita cabecera con token)
- POST [/anonimo] - Login de usuario (devuelve token)
- POST [/anonimo] - email de usuario (devuelve token)
- POST [/anonimo] - password de usuario (devuelve token)

Notas: 
- POST [/nota] - Crear una nota (título, texto y categoría única (fijas)
- GET [/nota] - Ver listado de notas, (solo títulos) 
- GET [/nota] - Visualizar nota
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
