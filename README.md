# Eliminar Fondo de Imagen con NestJS

Este proyecto es una aplicación de NestJS que permite eliminar el fondo de imágenes utilizando el paquete `@imgly/background-removal-node`.

## Características

- Elimina el fondo de imágenes en formato `.jpg` y `.png`.
- Devuelve la imagen procesada en formato `image/png`.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:

    ```sh
    git clone <https://github.com/NicolasAEV/eliminar-fondo-imagen.git>
    cd eliminar-fondo-imagen
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

## Uso

1. Inicia la aplicación:

    ```sh
    npm run start
    ```

2. Envía una solicitud POST a `http://localhost:3000/image/bg-delete` con una imagen en el campo `file`.
