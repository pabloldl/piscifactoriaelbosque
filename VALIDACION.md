# Validación · 27 de octubre de 2026

## Comprobaciones ejecutadas

- `node --check js/script.js`: correcto.
- Chrome real en modo headless, controlado con Playwright sobre un servidor HTTP local temporal. Servidor cerrado al finalizar.
- Tamaños **375, 768, 1440 y 1920 px**: sin desbordamiento horizontal; imágenes decodificadas y fuente Commissioner cargada; todos los destinos de enlaces internos existen.
- Sin errores de ejecución JavaScript ni respuestas HTTP fallidas en los recursos locales durante la prueba.
- Capturas completas de los cuatro tamaños. Inspección visual de las capturas de 375 y 1440 px: texto separado de las fotografías, navegación visible, composición móvil y contacto legibles.
- Teclado: primer Tab muestra el salto al contenido; Enter lo activa.
- Navegación: clic en el enlace de contacto cambia a `#contacto`.
- Copia: clic en el botón y lectura real del portapapeles devuelven `615 548 570`; mensaje de éxito correcto.
- Fallo de copia: rechazo simulado de Clipboard API muestra el aviso de copia manual. La alternativa `execCommand` está implementada pero no se ejecutó en esta comprobación.
- Movimiento reducido: `scroll-behavior` computado es `auto`.
- Créditos: el desplegable nativo abre correctamente.
- JavaScript desactivado: portada y navegación permanecen visibles.
- Teléfono comprobado en DOM: `tel:+34615548570`.
- Google Maps comprobado en DOM: búsqueda por nombre y dirección; sin coordenadas inventadas.
- Tras la sustitución solicitada, las dos fotografías se abrieron y decodificaron con System.Drawing como JPEG; dimensiones reales 1920 × 1280 y 2100 × 1500, también verificadas por Chrome. Peso conjunto: 675664 bytes, aproximadamente 676 kB.

## Corrección de las dos fotografías

Sustituidas únicamente las imágenes existentes, conservando sus nombres y las reglas CSS. Portada: instalaciones reales de Piscifactoría El Bosque en 2014, Cayetano Ruiz de Alarcón Quintero, CC BY-SA 4.0. Segunda imagen: truchas arcoíris, Eric Engbretson / USFWS, dominio público. Sin marcas de agua en la inspección de los originales.

Actualizados solo los atributos de imagen, la descripción Open Graph de la fotografía, las atribuciones de los pies y los créditos fotográficos existentes, además de la documentación correspondiente. Los textos editoriales, estructura, navegación, botones y secciones se conservan. CSS y JavaScript mantienen sus hashes anteriores a la corrección.

Repetida la comprobación Chrome en 375, 768, 1440 y 1920 px: ambas fotografías cargan, no hay desbordamientos ni errores de recursos o JavaScript. Revisadas visualmente las capturas completas de 375 y 1440 px: el encuadre conserva canales y circulación de agua en portada y truchas visibles en la segunda imagen. No fue necesario cambiar object-position ni el tamaño de los contenedores. Las pruebas de navegación y portapapeles también siguen pasando.

## Límites

No se ha realizado una llamada, abierto una aplicación telefónica ni confirmado una ruta o marcador en Google Maps. La comprobación de enlaces externos se limita a su destino configurado y a las fuentes consultadas para la investigación; no se ha verificado cada PDF en un visor. No se ha ejecutado auditoría automatizada completa WCAG, prueba con lector de pantalla ni revisión en Safari/Firefox o dispositivos físicos. La revisión visual se hizo sobre capturas de escritorio y móvil; 768 y 1920 se comprobaron por métricas y captura.

No se ha desplegado. La actividad del establecimiento, el acceso y la vigencia de los datos facilitados siguen pendientes de confirmación según el README.

Artefactos técnicos reproducibles: `.qa/check.cjs`, `.qa/results.json` y `.qa/screen-*.png`, ignorados por Git y ajenos a los recursos necesarios de la web.
