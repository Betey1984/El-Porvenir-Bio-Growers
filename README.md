# El Porvenir Bio Growers

Web informativa en español, inglés y alemán, construida con Next.js.

## Desarrollo local

Usar Node.js 22 LTS (`.nvmrc`) y npm:

```sh
npm ci
npm run dev
```

## Compilación y ejecución de producción

```sh
npm run build
npm start
```

La raíz redirige a `/es`. También están disponibles `/en` y `/de`.
El contacto se realiza por correo y teléfono; esta versión no utiliza formulario, base de datos ni variables secretas de aplicación.

Las fuentes se descargan durante la compilación mediante `next/font` y se sirven desde la aplicación.

Ver [la guía de SiteGround](docs/SITEGROUND.md) para publicar la rama `release/siteground-informativa`, probar el dominio temporal y preparar el cambio del dominio definitivo.
