# Activar el asistente IA (Validaciones RETABET v1.1)

Sin estos pasos la herramienta funciona igual: el asistente responde con textos aprobados y, si no encuentra ninguno, indica «consulta a SAC». La IA solo se activa al rellenar `ASISTENTE_URL` en `index.html`.

## Antes de empezar
- Visto bueno de Compliance para enviar consultas de clientes (ya enmascaradas) a la API de Anthropic.
- La web publicada en GitHub Pages (hace falta su URL para `CONTENIDO_URL` y `ORIGEN_PERMITIDO`).

## 1. Clave de Anthropic
1. Entra en la consola de Anthropic (platform.claude.com) con la cuenta de empresa.
2. Crea una API key exclusiva para esta herramienta (nombre: `validaciones-retabet`).
3. Fija un límite de gasto mensual (p. ej. 50 $; la estimación máxima con 1.800 consultas/día es ~48 $/mes sin caché).

## 2. Proyecto Supabase
1. Crea un proyecto nuevo (nombre `validaciones-retabet`, región UE).
2. Edge Functions → crear función nueva desde el editor del panel, nombre **`asistente`**.
3. Pega el contenido de `supabase/functions/asistente/index.ts` y despliega.
4. En los ajustes de la función, **desactiva «Verify JWT»** (el control lo hacen el código y el origen).
5. Edge Functions → Secrets, añade:

| Nombre | Valor |
|---|---|
| `ANTHROPIC_API_KEY` | la clave del paso 1 |
| `CONTENIDO_URL` | `https://<cuenta>.github.io/validaciones-retabet/contenido.js` |
| `CODIGO_ACCESO` | el mismo código que `CODIGO_ACCESO` en `index.html` |
| `ORIGEN_PERMITIDO` | `https://<cuenta>.github.io` (sin barra final) |
| `MODELO` | opcional; por defecto `claude-haiku-5-5` |

La URL de la función será `https://<proyecto>.supabase.co/functions/v1/asistente`.

## 3. Conectar la web
En `index.html`, sustituye la línea
    const ASISTENTE_URL = (window.VR_CONFIG && window.VR_CONFIG.asistenteUrl) || '';
por
    const ASISTENTE_URL = 'https://<proyecto>.supabase.co/functions/v1/asistente';
y súbelo a GitHub.

## 4. Comprobar
1. Abre la web publicada (no en local: la función solo acepta peticiones desde `ORIGEN_PERMITIDO`).
2. Asistente → pega «no puedo retirar» → debe salir un recuadro ámbar «Borrador IA».
3. Pega «cuál es el límite diario de retirada» → debe salir «No cubierto · consulta a SAC».
4. En Supabase → Edge Functions → asistente → Logs: una línea `consulta <tipo> <tokens>` por consulta. No se registra el texto del cliente.

## Si algo cambia
- Cambiar el código de acceso: en `index.html` y en el secreto `CODIGO_ACCESO` a la vez.
- Cambiar el contenido: solo `contenido.js`; la función lo vuelve a leer como máximo 10 minutos después.
- Apagar la IA en una emergencia: vaciar `ASISTENTE_URL` en `index.html`, o borrar la API key en la consola de Anthropic.

## Controles incluidos
- Clave de la API solo en Supabase, nunca en la web.
- Enmascarado de tarjeta (6 primeros + 4 últimos), CVV, PIN, DNI/NIE, IBAN, correo y teléfono en el navegador y otra vez en la función.
- La IA recibe solo el contenido aprobado; si responde «no cubierto», la web muestra el texto fijo de escalado y nunca texto inventado.
- Salida validada: tipos conocidos, fichas existentes, longitudes máximas.
- Límite de 20 consultas por minuto e IP (aproximado, por instancia) y tope de gasto en Anthropic.
- Limitación: el código de acceso es visible en la web pública; frena usos casuales, no a alguien decidido. Por eso el tope de gasto es obligatorio.
