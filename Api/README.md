
# Individual Project - Books Store. Prueba de postulacion


## Objetivos del Proyecto

- Construir una App utlizando JavaScript, Node y Sequelize.


## Horarios y Fechas

El proyecto fue realizado en un total de 5 Horas de codigo


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: v18.14.0 
- __NPM__: v9.3.1

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```


## BoilerPlate

El boilerplate cuenta con una carpetaa: `api` . En estas carpeta estará el código del back-end.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `book_store`


## Enunciado

La idea general es crear una aplicación en la cual se puedan observar y comprar libros, realizar login, modificar informacion de tu cuenta, entre otras cosas:

- Buscar libros
- Filtrarlos / Ordenarlos
- Comprar libros

