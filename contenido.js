// Contenido de la herramienta. Editar este fichero para cambiar medios de pago, fichas, textos, respuestas o intenciones.
// Es un objeto JSON asignado a window.CONTENIDO para que funcione también abriendo index.html en local.
window.CONTENIDO = {
  "meta": {
    "herramienta": "Validaciones RETABET",
    "version_contenido": "1.7",
    "fecha": "2026-10-27",
    "estado": "publicado (textos generales en propuesta, pendientes marcados «consulta a SAC»)",
    "nota": "Los textos marcados con «propuesta» los ha redactado Claude a partir de las guías y del contexto de SAC; no son procedimiento oficial hasta que Mikel/Compliance los aprueben. Los pasos de cada banco son los de la guía Word original, con las correcciones editoriales aprobadas en la Fase 1."
  },
  "general": {
    "entrega": {
      "texto": "El cliente envía el justificante por correo electrónico o por el chat habitual. Indícale la dirección.",
      "direccion": "validaciones@retabet.es",
      "nota_interna": "Canal confirmado por Mikel (27/10/2026): validaciones@retabet.es.",
      "estado": "aprobado por Mikel (27/10/2026)"
    },
    "registro": {
      "texto": "Según el medio de pago (ver cada ficha).",
      "estado": "propuesta"
    },
    "archivo": {
      "texto": "El justificante se archiva según el procedimiento interno de protección de datos y se elimina cumplido el plazo de conservación. No lo guardes en el móvil ni en el equipo de la tienda.",
      "nota_interna": "Propuesta de plazo: 2 meses, alineado con la retención en estudio para validaciones@retabet.es. Confirmar con DPO.",
      "estado": "propuesta"
    },
    "escalado": {
      "texto": "Si no puedes completar el procedimiento, abre incidencia a SAC por el canal habitual (sac@ekasa.net) indicando tienda, banco y motivo. No improvises pasos que no estén en la ficha.",
      "estado": "propuesta"
    }
  },
  "situaciones": [
    {
      "id": "sin-app",
      "titulo": "El cliente no tiene la app ni acceso a banca online",
      "cliente": "Sin acceso a su banca digital no podemos obtener el justificante ahora. Puede activarla con su banco o traer un certificado de titularidad de la tarjeta emitido por su oficina.",
      "interno": "Abre incidencia a SAC (sac@ekasa.net) indicando tienda, banco y «cliente sin banca digital». Consulta a SAC si el certificado de la oficina bancaria es alternativa aceptada.",
      "estado": "propuesta",
      "medios": [
        "tarjeta"
      ]
    },
    {
      "id": "sin-app-bizum",
      "medios": [
        "bizum"
      ],
      "titulo": "El cliente no tiene acceso a su banca digital",
      "cliente": "Sin acceso a su banca digital no podemos obtener ahora el justificante de Bizum. Puede activarla con su banco.",
      "interno": "Abre incidencia a SAC (sac@ekasa.net) indicando tienda, banco y «cliente sin banca digital».",
      "estado": "propuesta"
    },
    {
      "id": "pantalla-distinta",
      "titulo": "La pantalla de su app no coincide con la guía",
      "cliente": "Las apps cambian con las actualizaciones. Busque la opción de detalle o datos de la tarjeta; si no la encuentra, lo consultamos y le avisamos.",
      "interno": "No improvises. Anota banco y, si puedes, versión de la app, y comunícalo a SAC para actualizar la ficha.",
      "estado": "propuesta"
    },
    {
      "id": "no-cumple",
      "titulo": "El justificante no cumple la regla (faltan dígitos, se ve el CVV, no aparece el nombre)",
      "cliente": "Necesito que el justificante muestre su nombre y el número de la tarjeta con los 6 primeros y los 4 últimos dígitos visibles, el resto y el CVV tapados. ¿Puede repetirlo?",
      "interno": "No aceptes ni reenvíes un justificante con el número completo o el CVV visible.",
      "estado": "derivado de la regla aprobada",
      "medios": [
        "tarjeta"
      ]
    },
    {
      "id": "no-cumple-bizum",
      "medios": [
        "bizum"
      ],
      "titulo": "El justificante de Bizum no muestra el nombre del titular ni el alias",
      "cliente": "Necesito el justificante de Bizum que genera su banco en el que aparezca su nombre o su alias de Bizum. ¿Puede enviarlo?",
      "interno": "Sin nombre ni alias no se cumple la regla, salvo en los bancos cuya ficha lo indique (Bankinter, Santander). Si el banco no lo ofrece, consulta a SAC.",
      "estado": "derivado de la regla aprobada"
    },
    {
      "id": "banco-no-listado",
      "titulo": "El banco del cliente no está en la lista",
      "cliente": "Para su banco no tenemos aún el procedimiento. Lo consultamos y le indicamos cómo obtener el justificante.",
      "interno": "No existe procedimiento validado. Abre incidencia a SAC con el nombre del banco.",
      "estado": "propuesta"
    },
    {
      "id": "asincrono",
      "titulo": "El banco emite el documento más tarde (Imagin, N26)",
      "cliente": "Su banco le hará llegar el certificado más tarde. Cuando lo reciba, envíenoslo por el mismo canal y completamos el registro.",
      "interno": "Consulta a SAC cómo queda la solicitud mientras tanto y quién la retoma.",
      "estado": "propuesta incompleta",
      "medios": [
        "tarjeta"
      ]
    }
  ],
  "faq_comunes": [
    {
      "id": "donde-envio",
      "p": "«¿Dónde os lo mando?»",
      "r": "Puede enviarlo por correo a validaciones@retabet.es o por este mismo chat. Antes de enviarlo, tape los dígitos del medio del número de la tarjeta y el CVV si aparecen.",
      "interno": null,
      "estado": "aprobado por Mikel (26/10/2026)",
      "medios": [
        "tarjeta"
      ]
    },
    {
      "id": "donde-envio-bizum",
      "medios": [
        "bizum"
      ],
      "p": "«¿Dónde os lo mando?»",
      "r": "Puede enviarlo por correo a validaciones@retabet.es o por este mismo chat, tal y como lo genera su banco.",
      "interno": null,
      "estado": "aprobado por Mikel (26/10/2026)"
    },
    {
      "p": "«¿Por qué necesitáis esto?»",
      "r": "Es una obligación legal, no una decisión de RETABET. Un real decreto nos obliga, a partir del 28 de octubre de 2026, a comprobar que el titular del medio de pago coincide con el titular de la cuenta en RETABET.",
      "interno": null,
      "estado": "aprobado por Mikel (26/10/2026)",
      "id": "por-que"
    },
    {
      "id": "otra-casa",
      "p": "«En otras casas de apuestas no me lo piden»",
      "r": "No es una decisión de RETABET: es un requisito legal que estamos obligados a aplicar a partir del 28 de octubre de 2026.",
      "interno": "No compares con otros operadores ni afirmes lo que hacen ellos. Si el cliente insiste, consulta a SAC.",
      "estado": "propuesta"
    },
    {
      "p": "«¿Os mando el número completo o el CVV para ir más rápido?»",
      "r": "No. Nunca necesitamos el número completo, el CVV ni el PIN. Si aparecen, tápelos antes de enviar el justificante.",
      "interno": null,
      "estado": "derivado de la regla aprobada",
      "id": "cvv-completo",
      "medios": [
        "tarjeta"
      ]
    },
    {
      "p": "«¿Qué hacéis con la captura después?»",
      "r": "Se guarda de forma segura solo el tiempo necesario para la comprobación y después se elimina, conforme a la normativa de protección de datos.",
      "interno": "Plazo por confirmar con DPO; si preguntan por el plazo exacto, consulta a SAC.",
      "estado": "propuesta",
      "id": "que-haceis"
    },
    {
      "p": "«¿Vale una foto de la tarjeta física?»",
      "r": "De momento necesitamos el justificante de la app o la web de su banco. Si no le es posible, lo consultamos.",
      "interno": "Las guías solo contemplan app/web del banco. Consulta a SAC si se acepta la tarjeta física con nombre y 6+4 dígitos.",
      "estado": "consulta a SAC",
      "id": "foto-tarjeta",
      "medios": [
        "tarjeta"
      ]
    }
  ],
  "intenciones": [
    {
      "id": "cvv-completo",
      "respuesta": "faq:cvv-completo",
      "patrones": [
        [
          "cvv"
        ],
        [
          "cvc"
        ],
        [
          "pin"
        ],
        [
          "codigo",
          "seguridad"
        ],
        [
          "numero",
          "completo"
        ],
        [
          "numero",
          "entero"
        ],
        [
          "tres",
          "digitos"
        ]
      ]
    },
    {
      "id": "por-que",
      "respuesta": "faq:por-que",
      "patrones": [
        [
          "por",
          "que",
          "necesit"
        ],
        [
          "para",
          "que",
          "necesit"
        ],
        [
          "para",
          "que",
          "quer"
        ],
        [
          "por",
          "que",
          "ped"
        ],
        [
          "para",
          "que",
          "sirve"
        ],
        [
          "obligatorio"
        ],
        [
          "es",
          "obligatorio"
        ],
        [
          "quien",
          "obliga"
        ],
        [
          "ley"
        ]
      ]
    },
    {
      "id": "otra-casa",
      "respuesta": "faq:otra-casa",
      "patrones": [
        [
          "otra",
          "casa"
        ],
        [
          "otras",
          "casas"
        ],
        [
          "kirol"
        ],
        [
          "otro",
          "sitio"
        ],
        [
          "no",
          "me",
          "lo",
          "piden"
        ],
        [
          "en",
          "otros"
        ],
        [
          "por",
          "que",
          "vosotros"
        ]
      ]
    },
    {
      "id": "que-haceis",
      "respuesta": "faq:que-haceis",
      "patrones": [
        [
          "que",
          "haceis"
        ],
        [
          "guardais"
        ],
        [
          "borrais"
        ],
        [
          "mis",
          "datos"
        ],
        [
          "proteccion",
          "datos"
        ],
        [
          "seguro",
          "enviar"
        ]
      ]
    },
    {
      "id": "foto-tarjeta",
      "respuesta": "faq:foto-tarjeta",
      "patrones": [
        [
          "foto",
          "tarjeta"
        ],
        [
          "foto",
          "fisica"
        ],
        [
          "tarjeta",
          "fisica"
        ]
      ]
    },
    {
      "id": "donde-envio",
      "respuesta": "faq:donde-envio",
      "patrones": [
        [
          "donde",
          "mando"
        ],
        [
          "donde",
          "envio"
        ],
        [
          "donde",
          "envi"
        ],
        [
          "a",
          "que",
          "correo"
        ],
        [
          "que",
          "email"
        ],
        [
          "que",
          "direccion"
        ]
      ]
    },
    {
      "id": "sin-app",
      "respuesta": "sit:sin-app",
      "patrones": [
        [
          "no",
          "tengo",
          "app"
        ],
        [
          "no",
          "tengo",
          "aplicacion"
        ],
        [
          "sin",
          "app"
        ],
        [
          "no",
          "uso",
          "app"
        ],
        [
          "banca",
          "online"
        ],
        [
          "banca",
          "electronica"
        ],
        [
          "no",
          "tengo",
          "movil"
        ]
      ]
    },
    {
      "id": "pantalla-distinta",
      "respuesta": "sit:pantalla-distinta",
      "patrones": [
        [
          "no",
          "me",
          "sale"
        ],
        [
          "no",
          "aparece"
        ],
        [
          "no",
          "encuentro"
        ],
        [
          "no",
          "lo",
          "veo"
        ],
        [
          "no",
          "existe",
          "opcion"
        ]
      ]
    }
  ],
  "medios": [
    {
      "id": "tarjeta",
      "nombre": "Tarjeta",
      "titulo": "Titularidad de tarjeta",
      "regla": {
        "titulo": "Regla general del justificante",
        "texto": "El justificante que entrega el cliente debe mostrar el nombre del titular y el número de la tarjeta con los 6 primeros y los 4 últimos dígitos visibles y los del medio tapados. El CVV debe estar tapado. Nunca se pide el PIN.",
        "ejemplo_numero": "1234 56•• •••• 5678",
        "estado": "aprobado por Mikel (26/10/2026: 6 primeros + 4 últimos)"
      },
      "frase_inicial": {
        "texto": "Por normativa, a partir del 28 de octubre de 2026 estamos obligados a comprobar que el titular de la tarjeta coincide con el titular de su cuenta en RETABET. Para ello necesito un justificante de su banco en el que aparezca su nombre y el número de la tarjeta. No necesito el número completo: con los 6 primeros y los 4 últimos dígitos es suficiente, y el CVV debe quedar tapado. Le indico cómo obtenerlo en su app.",
        "estado": "propuesta"
      },
      "verificacion": {
        "titulo": "Qué compruebas antes de dar por válido el justificante",
        "items": [
          "El nombre del titular coincide con el documento de identidad del cliente.",
          "Se ven los 6 primeros y los 4 últimos dígitos del número de tarjeta; los del medio están tapados.",
          "Si la pantalla o el documento del banco no muestra los 6 primeros dígitos, el justificante no cumple la regla: consulta a SAC.",
          "No se ve el CVV. Si se ve, pide al cliente que lo tape y lo reenvíe.",
          "El justificante es de la app o web real del banco (cabecera, logotipo), no un recorte sin contexto."
        ],
        "estado": "items 1-3 derivados de la regla aprobada; item 4 propuesta"
      },
      "entrega_extra": "Pídele que, antes de enviarlo, tape los dígitos del medio y el CVV si aparecen.",
      "registro": "Anota en el sistema habitual que la titularidad queda acreditada, indicando banco y los 4 últimos dígitos de la tarjeta. No copies el número completo en ningún sitio. Si no sabes dónde registrarlo, consulta a SAC.",
      "aviso_lista": "Si el banco del cliente no está en la lista, no existe procedimiento validado: consulta a SAC. Nunca pidas el número completo, el CVV ni el PIN.",
      "bancos": [
        {
          "id": "santander",
          "nombre": "Santander",
          "alias": [
            "banco santander",
            "santander"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "Para que se vean los 6 primeros dígitos hay que pulsar «Ver Nº tarjeta, CVV y caducidad», que muestra el número completo y también el CVV. Antes de enviar la captura, el cliente debe tapar los dígitos del medio y el CVV.",
          "pasos": [
            {
              "titulo": "Abre la app del Santander",
              "detalle": "Desde su dispositivo móvil.",
              "captura": null
            },
            {
              "titulo": "Introduce la clave de acceso a la app",
              "detalle": "Es la clave de la app, no el PIN de la tarjeta.",
              "captura": null
            },
            {
              "titulo": "Baja hasta el apartado «Tarjetas»",
              "detalle": "En la pantalla de inicio.",
              "captura": null
            },
            {
              "titulo": "Pulsa la tarjeta que quiere registrar",
              "detalle": null,
              "captura": null
            },
            {
              "titulo": "Pulsa «Ver detalle tarjeta»",
              "detalle": null,
              "captura": "santander/1.jpg"
            },
            {
              "titulo": "Pulsa «Ver Nº tarjeta, CVV y caducidad»",
              "detalle": "Está debajo del número, en la pantalla «Detalle de tarjeta». Muestra el número completo, el CVV y la caducidad.",
              "captura": "santander/2.jpg"
            },
            {
              "titulo": "Haz una captura y tapa los dígitos del medio y el CVV antes de enviarla",
              "detalle": "Deben verse el titular, los 6 primeros y los 4 últimos dígitos.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Captura «Detalle de tarjeta» con el número desplegado y tapado",
            "descripcion": "Titular, número con los 6 primeros y los 4 últimos dígitos visibles (los del medio tapados por el cliente) y CVV tapado.",
            "captura": "santander/2.jpg"
          },
          "verificacion_extra": [
            "Confirma que el cliente ha tapado los dígitos del medio y el CVV. Si llega sin tapar, pídele que lo reenvíe tapado y no reenvíes tú la captura."
          ],
          "faq": [
            {
              "p": "«No me sale “Ver detalle tarjeta”»",
              "r": "Compruebe que ha pulsado sobre la tarjeta, no sobre la cuenta. El botón está en la fila de iconos bajo la tarjeta.",
              "interno": "Si la pantalla no coincide con la guía, usa «No se puede completar».",
              "estado": "propuesta"
            }
          ],
          "publicado": true
        },
        {
          "id": "bbva",
          "nombre": "BBVA",
          "alias": [
            "bbva"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "La pantalla de detalle incluye el campo «PAN» (número de la tarjeta) con un botón «Copiar». En la captura de la guía el número está tapado, así que no se puede confirmar si la app lo muestra completo. Si aparece completo, el cliente debe tapar los dígitos del medio antes de enviar la captura. Si no se ven los 6 primeros dígitos, consulta a SAC.",
          "pasos": [
            {
              "titulo": "Pulsa el icono de tus productos",
              "detalle": "En la pantalla de inicio, parte superior («Tus productos»).",
              "captura": "bbva/1.jpg"
            },
            {
              "titulo": "Elige la tarjeta que quiere registrar",
              "detalle": null,
              "captura": "bbva/2.jpg"
            },
            {
              "titulo": "Pulsa de nuevo sobre la tarjeta seleccionada",
              "detalle": "Se abre el detalle con los datos de la tarjeta.",
              "captura": "bbva/3.jpg"
            },
            {
              "titulo": "Haz una captura de la pantalla de detalle y tapa los dígitos del medio",
              "detalle": "Deben verse el nombre impreso en la tarjeta y el número («PAN») con los 6 primeros y los 4 últimos dígitos.",
              "captura": "bbva/4.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura del detalle de la tarjeta",
            "descripcion": "Alias, tipo, formato, número («PAN»), validez y nombre del titular sobre la imagen de la tarjeta. NO ESPECIFICADO EN LA DOCUMENTACIÓN si el número aparece completo.",
            "captura": "bbva/4.jpg"
          },
          "verificacion_extra": [
            "Confirma que se ven los 6 primeros y los 4 últimos dígitos y que los del medio están tapados. Si la app no muestra los 6 primeros, consulta a SAC."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "caixabank",
          "nombre": "Caixabank",
          "alias": [
            "la caixa",
            "caixa",
            "caixabanknow"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "La guía lleva al cliente a la opción «Número de la tarjeta (PAN)», que muestra el número COMPLETO tras la firma electrónica. En el mismo menú están «Consultar caducidad y CVV» y «Consultar PIN»: no debe pulsarlos. Antes de enviar la captura, el cliente debe tapar los dígitos del medio.",
          "pasos": [
            {
              "titulo": "Abre la app de CaixaBank",
              "detalle": "Desde su dispositivo móvil.",
              "captura": null
            },
            {
              "titulo": "Introduce la clave de acceso a la app",
              "detalle": null,
              "captura": null
            },
            {
              "titulo": "Baja hasta el apartado «Tarjetas»",
              "detalle": "En la pantalla de inicio.",
              "captura": "caixabank/1.jpg"
            },
            {
              "titulo": "Pulsa la tarjeta y después «Mostrar más»",
              "detalle": null,
              "captura": "caixabank/2.jpg"
            },
            {
              "titulo": "Pulsa «Datos y gestión de tarjeta»",
              "detalle": null,
              "captura": "caixabank/3.jpg"
            },
            {
              "titulo": "Pulsa «Número de la tarjeta (PAN)»",
              "detalle": "Pide la firma electrónica y muestra la numeración completa.",
              "captura": "caixabank/4.jpg"
            },
            {
              "titulo": "Haz una captura y tapa los dígitos del medio antes de enviarla",
              "detalle": null,
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Captura de «Datos y gestión de tarjeta» con el número",
            "descripcion": "La guía no indica si en esta pantalla aparece el nombre del titular. Si no aparece, consulta a SAC.",
            "captura": "caixabank/4.jpg"
          },
          "verificacion_extra": [
            "Confirma que el cliente ha tapado los dígitos del medio. Si llega el número completo, pídele que lo reenvíe tapado y no reenvíes tú la captura."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "caja-rural",
          "nombre": "Caja Rural",
          "alias": [
            "rural kutxa",
            "ruralvia",
            "caja rural de navarra",
            "rural"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "Para que se vean los 6 primeros dígitos hay que pulsar «Consultar número de tarjeta y CVV», que muestra el número completo y el CVV. Antes de enviar la captura, el cliente debe tapar los dígitos del medio y el CVV. La app aparece como «Rural Kutxa» en las capturas.",
          "pasos": [
            {
              "titulo": "Pulsa el icono de tarjetas",
              "detalle": "En la pantalla de inicio, parte inferior.",
              "captura": "caja-rural/1.jpg"
            },
            {
              "titulo": "Pulsa la tarjeta que quiere registrar",
              "detalle": null,
              "captura": "caja-rural/2.jpg"
            },
            {
              "titulo": "Se abre «Información de la tarjeta»",
              "detalle": "Muestra titular, cuenta asociada y caducidad.",
              "captura": "caja-rural/3.jpg"
            },
            {
              "titulo": "Pulsa «Consultar número de tarjeta y CVV»",
              "detalle": "En la pantalla «Información de la tarjeta». Muestra el número completo y el CVV.",
              "captura": "caja-rural/3.jpg"
            },
            {
              "titulo": "Haz una captura y tapa los dígitos del medio y el CVV antes de enviarla",
              "detalle": "Deben verse el titular, los 6 primeros y los 4 últimos dígitos.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Captura de «Información de la tarjeta» con el número desplegado y tapado",
            "descripcion": "Titular, cuenta asociada, caducidad y número con los 6 primeros y los 4 últimos dígitos visibles; dígitos del medio y CVV tapados por el cliente.",
            "captura": "caja-rural/3.jpg"
          },
          "verificacion_extra": [
            "Confirma que el cliente ha tapado los dígitos del medio y el CVV. Si llega sin tapar, pídele que lo reenvíe tapado y no reenvíes tú la captura."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "kutxabank",
          "nombre": "Kutxabank",
          "alias": [
            "kutxa",
            "kutxabank",
            "bbk",
            "kutxabank es"
          ],
          "familia": "documento",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "El último paso salta de la app a la banca online (kutxabank.es). El cliente descarga un PDF, no una captura.",
          "pasos": [
            {
              "titulo": "Entra en la app y pulsa «Tarjetas»",
              "detalle": null,
              "captura": "kutxabank/1.jpg"
            },
            {
              "titulo": "Pulsa el botón rojo «+»",
              "detalle": "Abre las opciones disponibles.",
              "captura": "kutxabank/2.jpg"
            },
            {
              "titulo": "Pulsa «Otras operaciones»",
              "detalle": "En la pantalla siguiente, pulsa de nuevo «Otras operaciones». La app abre la banca online clásica.",
              "captura": "kutxabank/3.jpg"
            },
            {
              "titulo": "Marca «Tarjeta» y después «Titulares y autorizados»",
              "detalle": "En la pestaña «Consultas» de kutxabank.es.",
              "captura": "kutxabank/4.jpg"
            },
            {
              "titulo": "Descarga el justificante en PDF",
              "detalle": "Comprueba que se ha descargado correctamente antes de enviarlo.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "PDF «Titulares y autorizados»",
            "descripcion": "Documento emitido por el banco. La guía no detalla su contenido. NO ESPECIFICADO EN LA DOCUMENTACIÓN si incluye el número de tarjeta completo.",
            "captura": null
          },
          "verificacion_extra": [
            "Si el PDF muestra el número completo, aplica la regla general: pide al cliente que lo tape o acepta solo si los dígitos del medio están ocultos."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "laboral-kutxa",
          "nombre": "Laboral Kutxa",
          "alias": [
            "laboral",
            "lk",
            "caja laboral",
            "euskadiko kutxa"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "En «Detalle de la tarjeta» hay una opción «PIN · Consultar». El cliente no debe pulsarla.",
          "pasos": [
            {
              "titulo": "Pulsa el icono de tarjetas",
              "detalle": "En la pantalla de inicio, parte inferior.",
              "captura": "laboral-kutxa/1.jpg"
            },
            {
              "titulo": "Elige la tarjeta y pulsa «Más detalle»",
              "detalle": null,
              "captura": "laboral-kutxa/2.jpg"
            },
            {
              "titulo": "Pulsa «Usuarios de la tarjeta»",
              "detalle": null,
              "captura": "laboral-kutxa/3.jpg"
            },
            {
              "titulo": "Haz una captura de «Usuarios de la tarjeta»",
              "detalle": "Aparece el nombre del titular, su identificación (DNI) y la numeración.",
              "captura": "laboral-kutxa/4.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de «Usuarios de la tarjeta»",
            "descripcion": "Nombre, identificación (DNI), relación «Titular» y numeración de la tarjeta. NO ESPECIFICADO EN LA DOCUMENTACIÓN si la numeración aparece completa.",
            "captura": "laboral-kutxa/4.jpg"
          },
          "verificacion_extra": [
            "Si la numeración aparece completa, el cliente debe tapar los dígitos del medio."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "sabadell",
          "nombre": "Sabadell",
          "alias": [
            "banco sabadell",
            "banc sabadell",
            "bs"
          ],
          "familia": "captura",
          "estado": "provisional",
          "provisional": true,
          "aviso_provisional": "Guía provisional: sin capturas y sin resultado definido en la documentación. Si la pantalla del cliente no coincide, usa «No se puede completar».",
          "aviso_especifico": "La guía describe cómo ver el número completo, la caducidad y el CVV, y añade un paso para ver el PIN. El PIN NO se pide en ningún caso. El cliente debe tapar los dígitos del medio y el CVV antes de enviar la captura. La propia guía avisa de que en algunos dispositivos la pantalla no permite captura.",
          "pasos": [
            {
              "titulo": "Abre la app de Banco Sabadell e inicia sesión",
              "detalle": "Con usuario y contraseña, huella o Face ID.",
              "captura": null
            },
            {
              "titulo": "Ve a la sección «Tarjetas»",
              "detalle": "En la pantalla principal o en el menú.",
              "captura": null
            },
            {
              "titulo": "Pulsa la tarjeta que quiere registrar",
              "detalle": null,
              "captura": null
            },
            {
              "titulo": "Pulsa «Ver Detalles» (o «Detalles de la tarjeta» / «Ver datos»)",
              "detalle": "Muestra número completo, fecha de caducidad y CVV de forma temporal.",
              "captura": null
            },
            {
              "titulo": "Haz una captura y tapa los dígitos del medio y el CVV antes de enviarla",
              "detalle": "El PIN no se consulta: no acredita titularidad.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Captura de «Ver Detalles» con datos tapados",
            "descripcion": "La guía no indica si en esa pantalla aparece el nombre del titular ni qué debe entregarse. Si no aparece el nombre, consulta a SAC.",
            "captura": null
          },
          "verificacion_extra": [
            "Confirma que CVV y dígitos del medio están tapados. Si no aparece el nombre del titular, usa «No se puede completar»."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "bankinter",
          "nombre": "Bankinter",
          "alias": [
            "bk",
            "bankinter"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": true,
          "aviso_especifico": "La pantalla «Detalle de tarjeta» de la guía muestra solo los 4 últimos dígitos (****9350). La guía NO indica cómo ver el número completo en Bankinter, así que con esta pantalla no se cumple la regla de los 6 primeros dígitos. Si el cliente encuentra en su app la opción de ver el número completo, debe tapar los dígitos del medio antes de enviarlo; si no, consulta a SAC.",
          "pasos": [
            {
              "titulo": "Entra en «Mi Posición Global» y localiza la tarjeta",
              "detalle": "En la pantalla de inicio de la app.",
              "captura": "bankinter/1.jpg"
            },
            {
              "titulo": "Pulsa la tarjeta dos veces",
              "detalle": "Con una pulsación se abren los movimientos; con la segunda, el «Detalle de tarjeta».",
              "captura": null
            },
            {
              "titulo": "Haz una captura de «Detalle de tarjeta»",
              "detalle": "Deben verse el titular y el número con los 6 primeros y los 4 últimos dígitos (los del medio tapados).",
              "captura": "bankinter/2.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de «Detalle de tarjeta»",
            "descripcion": "Número, caducidad, modalidad de pago, titular y cuenta asociada. En la guía el número solo muestra los 4 últimos dígitos.",
            "captura": "bankinter/2.jpg"
          },
          "verificacion_extra": [
            "Si solo se ven los 4 últimos dígitos, el justificante no cumple la regla: consulta a SAC."
          ],
          "faq": [],
          "publicado": true,
          "aviso_provisional": "Guía incompleta para la regla de 6 + 4 dígitos: falta el paso para ver el número completo. Pendiente de actualizar la guía de Bankinter."
        },
        {
          "id": "ing",
          "nombre": "ING",
          "alias": [
            "ing direct",
            "ing"
          ],
          "familia": "documento",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "El desplegable de la tarjeta incluye «Fecha de caducidad y CVV» y «Copiar/Compartir número». El cliente solo debe usar «Extractos y certificados».",
          "pasos": [
            {
              "titulo": "Pulsa la tarjeta en la pantalla de inicio",
              "detalle": "Se abre un desplegable con opciones.",
              "captura": "ing/1.jpg"
            },
            {
              "titulo": "Elige «Extractos y certificados» y pulsa «Consultar»",
              "detalle": null,
              "captura": "ing/2.jpg"
            },
            {
              "titulo": "Se genera el «Certificado de Titularidad de Tarjeta»",
              "detalle": "Guárdalo o haz una captura completa del certificado.",
              "captura": "ing/4.jpg"
            }
          ],
          "resultado": {
            "titulo": "Certificado de Titularidad de Tarjeta (ING)",
            "descripcion": "Documento oficial con tarjeta, estado, IBAN asociado, nombre y apellidos y NIF/NIE, firmado por apoderados. NO ESPECIFICADO si el número de tarjeta aparece completo.",
            "captura": "ing/4.jpg"
          },
          "verificacion_extra": [
            "Si el certificado muestra el número completo, el cliente debe tapar los dígitos del medio."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "openbank",
          "nombre": "Openbank",
          "alias": [
            "open",
            "openbank"
          ],
          "familia": "captura",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "En «Información de tarjeta» el número aparece como «… XXXX» con un enlace «Consultar» al lado: hay que pulsarlo para ver el número completo. Antes de enviar la captura, el cliente debe tapar los dígitos del medio. No debe pulsar «Consultar CVV» ni «Consultar PIN». En esa pantalla NO aparece el nombre del titular; aparece en la pantalla anterior, sobre la imagen de la tarjeta («Tarjeta de débito | Titular»).",
          "pasos": [
            {
              "titulo": "Pulsa el icono de tarjeta",
              "detalle": "En la pantalla de inicio, parte inferior.",
              "captura": "openbank/1.jpg"
            },
            {
              "titulo": "Elige la tarjeta y pulsa «Más opciones»",
              "detalle": null,
              "captura": "openbank/3.jpg"
            },
            {
              "titulo": "Pulsa «Detalle de tarjeta»",
              "detalle": null,
              "captura": "openbank/4.jpg"
            },
            {
              "titulo": "Pulsa «Consultar» junto al número de la tarjeta",
              "detalle": "Muestra el número completo.",
              "captura": "openbank/5.jpg"
            },
            {
              "titulo": "Haz una captura y tapa los dígitos del medio antes de enviarla",
              "detalle": "Deben verse los 6 primeros y los 4 últimos dígitos.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Captura de «Información de tarjeta» con el número desplegado y tapado",
            "descripcion": "Nombre de la tarjeta, tipo, número con los 6 primeros y los 4 últimos dígitos visibles y fecha de validez. Sin nombre del titular en esta pantalla.",
            "captura": "openbank/5.jpg"
          },
          "verificacion_extra": [
            "Confirma que el cliente ha tapado los dígitos del medio.",
            "Si la captura no muestra el nombre del titular, pide también la pantalla anterior donde aparece «Titular» sobre la tarjeta. Si hay dudas, consulta a SAC."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "imagin",
          "nombre": "Imagin",
          "alias": [
            "imaginbank",
            "imagin bank",
            "imagín"
          ],
          "familia": "asincrono",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "El certificado no se obtiene al momento: Imagin llama al cliente (en las siguientes 24 h laborables según la app) y gestiona el certificado. El cliente no sale de la tienda con el justificante.",
          "pasos": [
            {
              "titulo": "Pulsa el icono de ayuda «?»",
              "detalle": "Arriba a la izquierda en la app de Imagin.",
              "captura": "imagin/1.jpg"
            },
            {
              "titulo": "Escribe «titularidad» y pulsa «Solicitar certificado de titularidad»",
              "detalle": null,
              "captura": "imagin/2.jpg"
            },
            {
              "titulo": "Pulsa «¿Necesitas otro tipo de certificado?»",
              "detalle": null,
              "captura": "imagin/3.jpg"
            },
            {
              "titulo": "Marca «Titularidad de la tarjeta» y pulsa «Continuar»",
              "detalle": null,
              "captura": "imagin/4.jpg"
            },
            {
              "titulo": "Programa la llamada",
              "detalle": "Elige franja horaria y acepta las condiciones. Imagin te llamará para generar el certificado.",
              "captura": "imagin/5.jpg"
            }
          ],
          "resultado": {
            "titulo": "Certificado de titularidad de la tarjeta (tras la llamada)",
            "descripcion": "Documento emitido por Imagin. Contenido y formato NO ESPECIFICADOS EN LA DOCUMENTACIÓN.",
            "captura": null
          },
          "verificacion_extra": [
            "Al recibirlo, aplica la regla general (nombre, 6+4 dígitos, sin CVV)."
          ],
          "faq": [
            {
              "p": "«¿Y mientras tanto qué pasa con mi tarjeta?»",
              "r": "Lo gestionamos con nuestro servicio de atención y le informamos. Cuando reciba el certificado, envíenoslo y completamos el registro.",
              "interno": "Consulta a SAC cómo queda la solicitud mientras tanto.",
              "estado": "consulta a SAC"
            }
          ],
          "publicado": true
        },
        {
          "id": "n26",
          "nombre": "N26",
          "alias": [
            "n 26",
            "n26"
          ],
          "familia": "documento",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "Se hace desde la web de N26, no desde la app. La guía indica marcar también «Saldo actual de mi cuenta»; ese dato no se necesita: basta «Número de mis tarjetas activas». Si el banco exige las dos casillas, márcalas y consulta a SAC.",
          "pasos": [
            {
              "titulo": "Entra en la web de N26 y pulsa el icono de descargas",
              "detalle": "En la pantalla de inicio.",
              "captura": "n26/1.jpg"
            },
            {
              "titulo": "Baja hasta «Confirmación de cuenta» y marca las casillas",
              "detalle": "Pulsa «Solicitar».",
              "captura": "n26/2.jpg"
            },
            {
              "titulo": "Recibe el certificado",
              "detalle": "Llega un SMS/aviso de la app con el certificado en PDF.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "Certificado de confirmación de cuenta y tarjetas activas (PDF)",
            "descripcion": "Documento emitido por N26. NO ESPECIFICADO si el número de tarjeta aparece completo.",
            "captura": null
          },
          "verificacion_extra": [
            "Si el PDF muestra el número completo, el cliente debe tapar los dígitos del medio."
          ],
          "faq": [],
          "publicado": true
        },
        {
          "id": "revolut",
          "nombre": "Revolut",
          "alias": [
            "revo",
            "revolut"
          ],
          "familia": "documento",
          "estado": "aprobado-fase1",
          "provisional": false,
          "aviso_especifico": "Según la propia app, el documento descargado incluye el número de tarjeta COMPLETO, la fecha de validez y el CVV. El cliente debe tapar los dígitos del medio y el CVV antes de enviarlo.",
          "pasos": [
            {
              "titulo": "Pulsa el icono de tarjetas",
              "detalle": "En la pantalla de inicio, arriba a la derecha.",
              "captura": "revolut/1.jpg"
            },
            {
              "titulo": "Elige la tarjeta que quiere registrar",
              "detalle": null,
              "captura": "revolut/2.jpg"
            },
            {
              "titulo": "Pulsa el icono de ayuda «?»",
              "detalle": "Esquina superior derecha.",
              "captura": "revolut/3.jpg"
            },
            {
              "titulo": "Pulsa «¿Cómo puedo verificar que esta tarjeta me pertenece?»",
              "detalle": "Segunda opción del menú de ayuda.",
              "captura": "revolut/4.jpg"
            },
            {
              "titulo": "Pulsa «Descargar documento» y tapa los dígitos del medio y el CVV antes de enviarlo",
              "detalle": null,
              "captura": "revolut/5.jpg"
            }
          ],
          "resultado": {
            "titulo": "Documento de confirmación de la tarjeta (Revolut)",
            "descripcion": "Incluye número de tarjeta, fecha de validez, CVV e información de la cuenta, según la app.",
            "captura": "revolut/5.jpg"
          },
          "verificacion_extra": [
            "Confirma que CVV y dígitos del medio están tapados. Si llega sin tapar, pide al cliente que lo reenvíe tapado y no reenvíes tú el documento."
          ],
          "faq": [],
          "publicado": true
        }
      ]
    },
    {
      "id": "bizum",
      "nombre": "Bizum",
      "titulo": "Titularidad de Bizum",
      "regla": {
        "titulo": "Regla del justificante de Bizum",
        "texto": "Se acepta el justificante de Bizum tal y como lo genera el banco, sin tapar nada. Debe aparecer el nombre del titular o el alias de Bizum, salvo en los bancos cuya ficha indique otra cosa.",
        "estado": "aprobado por Mikel (27/10/2026; excepción Bankinter y Santander)"
      },
      "frase_inicial": {
        "texto": "Por normativa, a partir del 28 de octubre de 2026 estamos obligados a comprobar que el titular del medio de pago coincide con el titular de su cuenta en RETABET. Para ello necesito el justificante de Bizum que genera su banco, en el que aparezca su nombre o su alias de Bizum. Le indico cómo obtenerlo.",
        "estado": "propuesta"
      },
      "verificacion": {
        "titulo": "Qué compruebas antes de dar por válido el justificante",
        "items": [
          "Aparece el nombre del titular o el alias de Bizum, y corresponde al cliente.",
          "Si no aparece ni el nombre del titular ni el alias, el justificante no cumple la regla (salvo excepción indicada en la ficha del banco): consulta a SAC.",
          "El justificante es el que genera la app o la web real del banco, sin recortes ni modificaciones."
        ],
        "estado": "items 1-2 derivados de la regla aprobada; item 3 propuesta"
      },
      "entrega_extra": "Lo envía tal y como lo genera su banco, sin tapar nada.",
      "registro": "Anota en el sistema habitual que la titularidad del Bizum queda acreditada, indicando el banco. Si no sabes dónde registrarlo, consulta a SAC.",
      "aviso_lista": "Solo hay guía de Bizum para estos bancos. Si el banco del cliente no está, no existe procedimiento validado: consulta a SAC.",
      "bancos": [
        {
          "id": "kutxabank",
          "nombre": "Kutxabank",
          "alias": [
            "kutxa",
            "kutxabank",
            "bbk"
          ],
          "familia": "documento",
          "estado": "aprobado",
          "provisional": false,
          "publicado": true,
          "aviso_especifico": "Se hace desde la banca online (web) de Kutxabank, no desde la app. El resultado es un PDF.",
          "pasos": [
            {
              "titulo": "Entra en la banca online de Kutxabank y abre «Servicios»",
              "detalle": "Desde la web, no desde la app.",
              "captura": null
            },
            {
              "titulo": "Selecciona «Pago móvil Bizum»",
              "detalle": "Aparecen los datos del contrato: titular, número de móvil y cuenta asociada.",
              "captura": "bizum-kutxabank/1.jpg"
            },
            {
              "titulo": "Pulsa «Generar PDF»",
              "detalle": "Abajo a la derecha. Genera el justificante con la vinculación de Bizum.",
              "captura": null
            }
          ],
          "resultado": {
            "titulo": "PDF de Bizum generado por Kutxabank",
            "descripcion": "Según la pantalla de la guía, los datos del contrato incluyen titular, tipo, número, fecha de contratación, número de móvil y cuenta asociada. La guía no incluye captura del PDF.",
            "captura": "bizum-kutxabank/1.jpg"
          },
          "verificacion_extra": [],
          "faq": []
        },
        {
          "id": "bankinter",
          "nombre": "Bankinter",
          "alias": [
            "bk",
            "bankinter"
          ],
          "familia": "captura",
          "estado": "aprobado",
          "provisional": false,
          "publicado": true,
          "aviso_especifico": "La pantalla «Configurar mi perfil» muestra el teléfono, la cuenta vinculada y el estado de Bizum. En este banco se acepta tal y como la genera el banco, aunque no aparezcan el nombre del titular ni el alias.",
          "pasos": [
            {
              "titulo": "Entra en «Mi Posición Global» y pulsa «Pagar»",
              "detalle": "En la parte inferior izquierda de la app.",
              "captura": "bizum-bankinter/1.jpg"
            },
            {
              "titulo": "Pulsa «Bizum»",
              "detalle": null,
              "captura": "bizum-bankinter/2.jpg"
            },
            {
              "titulo": "Pulsa «Configurar mi perfil»",
              "detalle": "En el apartado «Consulta y configuración».",
              "captura": "bizum-bankinter/3.jpg"
            },
            {
              "titulo": "Haz una captura de «Configurar Bizum»",
              "detalle": "Aparecen los últimos dígitos del teléfono y la cuenta a la que está vinculado.",
              "captura": "bizum-bankinter/4.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de «Configurar Bizum»",
            "descripcion": "Teléfono (últimos dígitos), cuenta vinculada, estado, compra online y Bizum Pay. Se acepta sin nombre ni alias.",
            "captura": "bizum-bankinter/4.jpg"
          },
          "verificacion_extra": [
            "Excepción: aquí no hace falta el nombre ni el alias. Comprueba que es la pantalla real de Bizum de la app del banco."
          ],
          "faq": []
        },
        {
          "id": "santander",
          "nombre": "Santander",
          "alias": [
            "banco santander",
            "santander"
          ],
          "familia": "captura",
          "estado": "aprobado",
          "provisional": false,
          "publicado": true,
          "aviso_especifico": "La pantalla de configuración de Bizum muestra el móvil asociado (solo los últimos dígitos) y la cuenta de abono. En este banco se acepta tal y como la genera el banco, aunque no aparezcan el nombre del titular ni el alias.",
          "pasos": [
            {
              "titulo": "Abre la app del Santander e inicia sesión",
              "detalle": "Con las claves habituales.",
              "captura": "bizum-santander/1.jpg"
            },
            {
              "titulo": "Pulsa la lupa y escribe «Bizum»",
              "detalle": "Aparecen varias opciones.",
              "captura": "bizum-santander/2.jpg"
            },
            {
              "titulo": "Pulsa la primera opción, «Bizum»",
              "detalle": "Identificada con el logotipo de Bizum.",
              "captura": null
            },
            {
              "titulo": "Pulsa «Más opciones» (los tres puntos)",
              "detalle": "Dentro del menú de Bizum.",
              "captura": "bizum-santander/3.jpg"
            },
            {
              "titulo": "Pulsa «QR Bizum»",
              "detalle": "Arriba a la izquierda del menú.",
              "captura": "bizum-santander/4.jpg"
            },
            {
              "titulo": "Pulsa el engranaje",
              "detalle": "Arriba a la derecha de la pantalla de QR Bizum.",
              "captura": "bizum-santander/5.jpg"
            },
            {
              "titulo": "Haz una captura de la pantalla de configuración",
              "detalle": "Aparecen los datos asociados a Bizum.",
              "captura": "bizum-santander/6.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de la configuración de Bizum",
            "descripcion": "Móvil asociado al servicio (últimos dígitos) y cuenta de abono. Se acepta sin nombre ni alias.",
            "captura": "bizum-santander/6.jpg"
          },
          "verificacion_extra": [
            "Excepción: aquí no hace falta el nombre ni el alias. Comprueba que es la pantalla real de Bizum de la app del banco."
          ],
          "faq": []
        },
        {
          "id": "sabadell",
          "nombre": "Sabadell",
          "alias": [
            "banco sabadell",
            "banc sabadell",
            "sabadell"
          ],
          "familia": "captura",
          "estado": "aprobado",
          "provisional": false,
          "publicado": true,
          "aviso_especifico": "La pantalla «Configuración» muestra el alias de Bizum («el nombre que se muestra cuando utilizas Bizum»), el teléfono vinculado y la cuenta. El alias se acepta como nombre.",
          "pasos": [
            {
              "titulo": "Pulsa las tres líneas",
              "detalle": "Arriba a la derecha en la app de Banco Sabadell.",
              "captura": null
            },
            {
              "titulo": "Pulsa «Bizum»",
              "detalle": null,
              "captura": "bizum-sabadell/1.jpg"
            },
            {
              "titulo": "Pulsa «Configuración»",
              "detalle": null,
              "captura": "bizum-sabadell/2.jpg"
            },
            {
              "titulo": "Haz una captura de la pantalla «Configuración»",
              "detalle": null,
              "captura": "bizum-sabadell/3.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de «Configuración» de Bizum",
            "descripcion": "Alias, número de teléfono vinculado y cuenta con la que opera.",
            "captura": "bizum-sabadell/3.jpg"
          },
          "verificacion_extra": [],
          "faq": []
        },
        {
          "id": "caja-rural-navarra",
          "nombre": "Caja Rural de Navarra",
          "alias": [
            "caja rural de navarra",
            "caja navarra",
            "caja rural",
            "rural kutxa",
            "ruralvia",
            "rural"
          ],
          "familia": "captura",
          "estado": "aprobado",
          "provisional": false,
          "publicado": true,
          "aviso_especifico": "La pantalla «Perfil Bizum» muestra el alias, el número de móvil y la cuenta asociada. El alias se acepta como nombre.",
          "pasos": [
            {
              "titulo": "Abre la app y pulsa «Bizum»",
              "detalle": "En la barra inferior.",
              "captura": "bizum-caja-rural-navarra/1.jpg"
            },
            {
              "titulo": "Pulsa «Ver más opciones»",
              "detalle": null,
              "captura": "bizum-caja-rural-navarra/2.jpg"
            },
            {
              "titulo": "Pulsa «Mi perfil»",
              "detalle": "La primera opción.",
              "captura": "bizum-caja-rural-navarra/3.jpg"
            },
            {
              "titulo": "Haz una captura de «Perfil Bizum»",
              "detalle": "Aparecen alias, número de móvil y cuenta corriente asociada.",
              "captura": "bizum-caja-rural-navarra/4.jpg"
            }
          ],
          "resultado": {
            "titulo": "Captura de «Perfil Bizum»",
            "descripcion": "Alias, número de móvil y cuenta asociada.",
            "captura": "bizum-caja-rural-navarra/4.jpg"
          },
          "verificacion_extra": [],
          "faq": []
        }
      ]
    }
  ]
};
