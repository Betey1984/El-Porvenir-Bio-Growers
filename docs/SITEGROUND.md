# Publicación de la web informativa en SiteGround

Repositorio: https://github.com/Betey1984/El-Porvenir-Bio-Growers
Rama: `release/siteground-informativa` (separada de `main` y de trabajos de plataforma).

## Estado de esta versión

- Next.js 16.4.6; React 19.2.4; npm y package-lock.json.
- Páginas informativas en `/es`, `/en` y `/de`; `/` redirige a `/es`.
- Contacto por enlaces de correo y teléfono. Sin formulario ni endpoint de envío.
- Sin Supabase, cuentas de usuario, pagos, base de datos ni credenciales SMTP.
- Afirmaciones comerciales expresadas como objetivos en desarrollo; se mantiene cero insumos sintéticos por confirmación del titular.
- Versiones de idioma declaradas en el HTML e imágenes WebP optimizadas.
- `vercel.json` desactiva despliegues automáticos de Vercel para esta rama solamente.

## Configuración propuesta

El titular debe crear el proyecto dentro de su GoGeek y compartir el acceso al proyecto. Autorizar únicamente este repositorio si se usa GitHub; no compartir contraseñas ni desconectar integraciones existentes.

| Campo | Valor |
| --- | --- |
| Rama | `release/siteground-informativa` |
| Directorio raíz | raíz del repositorio |
| Framework | Next.js |
| Node.js | 22 LTS, si está disponible; 24 LTS también está dentro del rango declarado |
| Gestor de paquetes | npm |
| Instalación | `npm ci` (deben estar disponibles las dependencias de compilación) |
| Compilación | `npm run build` |
| Arranque | `npm start` si el panel solicita comando de inicio |
| Salida | mantener el valor del preset Next.js; `.next` es salida de Next, no una exportación HTML estática |
| Variables de aplicación | ninguna obligatoria; no copiar variables de Vercel, SMTP o Supabase |

SiteGround debe proporcionar el puerto de ejecución mediante su entorno; `next start` utiliza `PORT`. No fijar el puerto local 3100 en el hosting. No usar `npm run dev` como servidor de producción.

La compilación descarga las fuentes de Google con `next/font`; el entorno necesita acceso de red durante el build. En ejecución se sirven las fuentes incluidas en el build.

## Revisión del dominio temporal

La creación puede publicar inmediatamente en un dominio temporal. Confirmar autorización antes de ese paso y pausar los despliegues automáticos durante la revisión.

1. Registrar commit desplegado y revisar los logs de compilación/arranque.
2. Comprobar `/`, `/es`, `/en`, `/de`, el selector de idioma, menú móvil, imágenes y vídeo.
3. Comprobar enlaces `mailto:` y `tel:`; no debe aparecer formulario. POST `/api/contact` debe devolver 404.
4. Confirmar HTTPS y probar un idioma/ruta inexistente (404).
5. Comprobar protección por contraseña si se habilita: cobertura de páginas y recursos.
6. Confirmar recursos disponibles y vigilar consumo compartido con WordPress y correo.

## Cambio al dominio definitivo: pendiente

No cambiar dominio o DNS hasta validar la prueba y acordar el procedimiento con el titular.

- Hacer respaldo verificable del WordPress actual, archivos y base de datos, y documentar cómo restaurarlo.
- Leer y registrar los DNS reales actuales y su gestor; no deducirlos de nombres de servidor mostrados en Site Tools.
- Preservar MX, SPF, DKIM, DMARC y registros de correo/webmail. El repositorio mantiene una redirección `/webmail` a `https://mail.elporvenirbiogrowers.com`: comprobar que ese destino sea el correcto antes del corte.
- Revisar cómo asignar el dominio que ya está vinculado a WordPress sin eliminar el sitio ni su correo. Confirmarlo con SiteGround antes de moverlo.
- Configurar HTTPS, dominio principal y variante `www`; revisar URLs antiguas de WordPress y sus redirecciones.
- Conservar el alojamiento anterior para volver atrás y comprobar web y correo después del cambio.

## Validación local

Se verificaron build de producción, TypeScript, las tres rutas de idioma y retirada del endpoint de contacto. Se comprobó el árbol de dependencias de producción con npm audit (sin avisos conocidos en la revisión).

La compilación de producción también pasó con Node.js 22 en la copia local. El arranque, compilación y comportamiento dentro de SiteGround siguen pendientes: esta comprobación local no sustituye la prueba del hosting.

## Fuentes oficiales revisadas

- https://www.siteground.com/kb/what-is-node-js-project
- https://www.siteground.com/blog/hosting-node-js-projects-with-siteground
- https://vercel.com/docs/project-configuration/git-configuration
