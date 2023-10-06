# RickMortyExercise

Esta es una guia completa de todos los personajes de Rick y morty que podemos econtrar en esta API: https://rickandmortyapi.com/api/character

## Método de ejecución

El método que he utilizado yo para ejecutar este repositorio es el siguiente, me he creado un dispositivo vistual en android studio. Estos pasos tambien se podrán replicar desde Xcode para iOS, o desde dispositivos físicos con sus respectivas aplicaciones.
Una vez tengamos ya el dispositivo activo simplemente tendremos que ejecutar el siguiente comando:
```
yarn start
```
Al haber implementado la aplicación con expo, esto por debajo ejecuta el comando:
```
expo start
```
que lanzará expo y hará posible el despliegue de la aplicación en el dispositivo móvil.
Seleccionaremos el sistema operativo que deseamos y se lanzará en el dispositivo seleccionado anteriomente.

## Expliicación de la aplicación

Esta aplicación es una aplicación básica que lo que hará es mediante un formulario, introduciremos un nombre de un personaje de Rick y Morty y nos sacará una imagen con su nombre.
Para ello se han desarrollado dos ficheros, el App.js y el CharacterSearch.js.

-  App.js: Es el fichero que se encargará de ejecutar la aplicación y que contendrá la búsqueda de personajes.

-  CharacterSearch.js: Es el fichero que contiene la lógica de búsqueda de personajes. Este estará formado por tres componentes una etiqueta con el nombre de la aplicación un TextInput el cual mediante un hook obtendremos el nombre que se quiere buscar y un botón que subirá el formulario y buscará el personaje.

La única lógica que tiene el código será la de la búsqueda. Mediante la librería de axios haremos un get de la url y obtendremos aquel personaje que hayamos introducido en el TextInput y mostraremos su nombre y su imagen.

## Tiempo de desarrollo

Alrededor de 1h y 5 minutos. 

## Interfaz de la aplicación

https://raw.githubusercontent.com/redom69/RickMortyExercise/master/assets/cap1.png
https://raw.githubusercontent.com/redom69/RickMortyExercise/master/assets/cap2.png
