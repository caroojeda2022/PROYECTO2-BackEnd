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

## Entidades en la base de datos

- [users] - "Anónimo":
  - login
  - email
  - password

- [idUsers] - Registro de usuarios:
  - email
  - password

  - [tables] - Información de las Notas de texto:
  - id
  - Título, 
  - Texto 
  - URL de la nota
  - createdNote
  - modifiedNote: título,texto y categoría.
- Imagen: poder asociar una imagen(única) a cada nota.

## Endpoints 

Usuarios anonimos:
- POST [/anonimo] - Login de usuario (devuelve token)
- POST [/anonimo] - email de usuario (devuelve token)
- POST [/anonimo] - password de usuario (devuelve token)

Usuarios registrado:
- POST [/user] - Registro de usuario.
- GET [/user] - Devuelve información del usuario.
- GET [/user] - Devuelve información del usuario del token (necesita cabecera con token)
- GET [/user] Se diferencia entre "Nota pública" y "Nota privada" según decisión del usuario, por defecto las notas son privadas.
Cambia el atributo `request` a `true`.
- GET [/user] Por defecto todas las notas son privadas,solo pueden ser verificadas por su creador,
Cambia el atributo `request` a `true`.

Notas: 
- POST [/note] - Crear una nota (título,texto y categoría única (fijas)
- GET [/note] - Ver listado de notas, (solo títulos) 
- GET [/note] - Ver nota (solo título)
- GET [/note] - Modificar sus notas: título, texto y categoría.
- PUT [/note] - Marcar una nota privada como pública.
Cambia el atributo `request` a `true`.
- DELETE [/note] - Eliminar una nota.
- POST [/note] - Permite crear, editar y borrar categorías (titulo, texto y categoría única (fijas) con token)

- Si una nota es pública puede ser leída por cualquier usuario registrado y logueado en la api.
- Las notas públicas solo se pueden acceder si conoce la URL.
