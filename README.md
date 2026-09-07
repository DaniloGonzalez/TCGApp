# TCG App

TCG App es un proyecto web desarrollado como parte del ramo de Full Stack II.

La aplicación está pensada como una plataforma para jugadores y organizadores de juegos de cartas coleccionables (TCG), permitiendo visualizar torneos, consultar rankings y acceder a diferentes secciones según el tipo de usuario.

## Estado del proyecto

Actualmente el proyecto corresponde a una primera versión del frontend.

La aplicación utiliza:

- HTML
- CSS
- JavaScript

Por el momento no existe conexión con una API ni base de datos. Los datos mostrados son datos de prueba utilizados para construir y diseñar la interfaz.

En una etapa posterior se espera conectar este frontend con una API REST desarrollada previamente con Spring Boot.

## Funcionalidades actuales

La aplicación cuenta con:

- Página de inicio.
- Listado de torneos.
- Ranking de jugadores.
- Registro de usuarios.
- Inicio de sesión simulado.
- Perfil de jugador.
- Panel de administrador.
- Navegación entre las diferentes páginas.
- Validaciones básicas mediante JavaScript.
- Diferenciación entre usuario normal y administrador.

## Usuarios de prueba

Para probar el inicio de sesión se utilizan actualmente los siguientes usuarios:

### Administrador

Correo:

`admin@tcgapp.cl`

Contraseña:

`admin123`

### Jugador

Correo:

`user@tcgapp.cl`

Contraseña:

`user123`

Estos usuarios son únicamente datos de prueba utilizados para simular el comportamiento del login.

## Estructura del proyecto

```text
TCG-APP/
├── assets/
├── css/
│   └── stylesheet.css
├── js/
│   ├── login.js
│   └── registro.js
├── pages/
│   ├── admin/
│   ├── auth/
│   │   ├── login.html
│   │   └── registro.html
│   ├── jugador/
│   ├── ranking/
│   │   └── ranking.html
│   ├── torneos/
│   │   └── torneos.html
│   └── index.html
└── README.md