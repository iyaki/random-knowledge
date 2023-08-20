# Random Knowledge

Pequeño script para abrir en el navegador, un artículo aleatorio de mi
[base de conocimiento](https://iyaki.notion.site/066daa9a7abb4c029724323209c85ca6?v=f16c7868e62b44bc8d974d6bc2cc8594&pvs=4).

## Configuración

Para utilizar la API de Notion es necesario contar con un
[token de autorización](https://developers.notion.com/docs/authorization).

Una vez generado el token, este debe estar disponible para la aplicación
mediante una variable de entorno `NOTION_TOKEN`, o bien, mediante un archivo
`.env` en la raíz del repositorio

## Uso

```shell
node main.js
```
