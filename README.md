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

- [User] - Puede ser de tipo "Anónimo" o Usuario registrado (funciona como tipo administrador? 
único que puede cambiar estatus de las notas de privadas a públicas)
  - login
  - email
  - password

- [Note] - Información de las Notas de texto:
  - id
  - Título, 
  - Texto 
  - URL de la nota
  - createdNote
  - modifiedNote: título,texto y categoría.
- Imagen: poder asociar una imagen(única) a cada nota.

## Endpoints 

Usuarios:
- POST [/user] - Login de usuario (devuelve token)
- POST [/user] - Email de usuario (devuelve token)
- POST [/user] - Password de usuario (devuelve token)
- POST [/User] - Registro de usuario.
- GET [/User] - Devuelve información del usuario del token (necesita cabecera con token)
- GET [/User] - Diferencia entre "Nota pública" y "Nota privada" según decisión del usuario registrado. Cambia el atributo `request` a `true`.

Notas: 
- POST [/Note] - Crear una nota (título,texto y categoría única (fijas)
- GET [/Note] - Ver nota (solo título)
- GET [/Note] - Modificar sus notas: título, texto y categoría.
- PUT [/Note] - Marcar una nota privada como pública. Cambia el atributo `request` a `true`.
- DELETE [/Note] - Eliminar una nota.
- POST [/Note] - Permite crear, editar y borrar categorías (titulo, texto y categoría única (fijas) con token)

Características: 
- Si una nota es pública puede ser leída por cualquier usuario registrado y logueado en la api.
- Las notas públicas solo se pueden acceder si conoce la URL.

