# Validaciones RETABET · Solicitud de datos de tarjeta

Herramienta de consulta interna: qué justificante pedir al cliente para acreditar la titularidad de su medio de pago (tarjeta: 13 entidades; Bizum: 5), qué comprobar y qué hacer si no se puede completar.

## Ficheros
- `index.html` — interfaz y lógica. No contiene procedimientos.
- `contenido.js` — TODO el contenido. Es un objeto JSON asignado a `window.CONTENIDO`. Estructura: `medios` (uno por medio de pago: tarjeta, bizum…, cada uno con su `regla`, `frase_inicial`, `verificacion`, `entrega_extra`, `registro` y `bancos`), `general` (entrega, archivo, escalado), `situaciones`, `faq_comunes` e `intenciones`. Las respuestas y situaciones con `medios: [...]` solo se muestran en esos medios; una respuesta con id `xxx-bizum` sustituye a `xxx` en Bizum.
- `contenido.json` — el mismo contenido en JSON puro, como copia de referencia. Si se edita uno, copiar al otro (o editar solo `contenido.js`).
- `supabase/functions/asistente/index.ts` — función intermediaria del asistente IA (ver `DESPLIEGUE-ASISTENTE.md`).
- `capturas/<banco>/N.jpg` — capturas de las guías originales (cuentas de prueba; Caja Rural 1 anonimizada).

## Probar en local (PowerShell)
    Expand-Archive .\validaciones-retabet_v1.0.zip -DestinationPath .\validaciones-retabet
    Start-Process .\validaciones-retabet\index.html
Código de acceso: el comunicado por SAC (constante `CODIGO_ACCESO` al principio del script de `index.html`). Cambiarlo antes de publicar.

## Publicar en GitHub Pages
1. Crear repositorio `validaciones-retabet` (privado o público; Pages será público por URL en cuentas gratuitas).
2. Subir por la web de GitHub los cuatro elementos: `index.html`, `contenido.js`, `contenido.json`, carpeta `capturas/`.
3. Settings → Pages → Branch `main` / carpeta `/ (root)` → Save. URL: `https://<cuenta>.github.io/validaciones-retabet/`.
4. Comunicar la URL y el código de acceso al personal por el canal interno.

## Mantener el contenido
- Editar `contenido.js` (bloque del banco dentro de su medio de pago) y subirlo. Para añadir un medio nuevo (p. ej. transferencia), añadir un bloque en `medios`: la pestaña aparece sola. Cambiar `meta.version_contenido` y `meta.fecha`.
- Para retirar un banco sin borrarlo: `"publicado": false`.
- Para marcar una ficha como provisional: `"provisional": true` y `"aviso_provisional": "…"`.
- Enlaces directos: `…/index.html#banco=ing` (tarjeta), `…/index.html#bizum=kutxabank`, `…/index.html#situaciones`.

## Asistente de respuestas (v1.1)
- Modo híbrido: primero busca una respuesta aprobada en `intenciones` (contenido.js); si no hay, consulta a la IA (Claude Haiku 5.5) a través de la función de Supabase.
- Para añadir una respuesta aprobada: añade la respuesta en `faq_comunes` (con `id`) y una intención en `intenciones` con sus patrones de palabras.
- Sin `ASISTENTE_URL` configurada, la IA está desactivada y se muestra el escalado a SAC.

## Limitaciones conocidas (v1)
- El código de acceso está en el cliente: solo disuade; la URL es pública. Se sustituye por Duo SSO al migrar a Ekasa.
- Los textos generales (frase inicial, canal verificaciones@retabet.es, escalado a SAC, plazo de archivo) son propuestas pendientes de confirmación por Compliance/DPO.
- Sabadell se publica como provisional (sin capturas). Openbank, N26 e Imagin tienen puntos marcados «consulta a SAC».
- No registra búsquedas fallidas. La función del asistente solo registra un contador anónimo por consulta.

## Migración a Ekasa
Frontend estático sin dependencias: copiar la carpeta a `/var/www/validaciones`, servir con nginx en `validaciones.ekasa.local`, autenticación Duo SSO en nginx/backend y eliminar la constante `CODIGO_ACCESO`. No requiere base de datos.
