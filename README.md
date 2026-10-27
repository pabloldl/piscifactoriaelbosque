# Piscifactoría El Bosque / Bajo la superficie

Presentación documental local. HTML5, CSS3 y JavaScript vanilla, sin dependencias de ejecución, compilación ni despliegue. Abrir `index.html` con Live Server. Todos los recursos son locales y usan rutas relativas.

## Investigación

Revisión: **27 de octubre de 2026**. No se encontró confirmación fiable de reapertura. No se ha llamado ni comprobado físicamente el recinto. La referencia del encargo a una ficha marcada como cerrada no se presenta como comprobación independiente de Google Maps.

- [Diario de Cádiz, 05/04/2019: cierre](https://www.diariodecadiz.es/noticias-provincia-cadiz/piscifactoria-Bosque-echa-cierre-actividad_0_1342966066.html). Fuente histórica de la antigua cría y comercialización; no prueba una actividad actual.
- [misPeces, 13/11/2023: intención de reactivación](https://www.mispeces.com/noticias/El-alcalde-de-El-Bosque-Cadiz-quiere-reactivar-la-actividad-de-la-legendaria-piscifactoria/). Una intención no acredita reapertura.
- [Portal de Cádiz, 18/05/2025: negociaciones sobre cesión de las antiguas instalaciones](https://www.portaldecadiz.com/provinciacadiz/130379-el-bosque-perfila-con-la-junta-el-futuro-de-la-piscifactoria-y-de-varias-infraestructuras-verdes). Tampoco acredita reapertura.
- [Junta de Andalucía, Rutas del agua en Cádiz, PDF histórico](https://www.juntadeandalucia.es/medioambiente/web/Bloques_Tematicos/agencia_andaluza_agua/participacion/campanas_publicidad_sensibilizacion/sensibilizacion/rutas_agua/rutas_del_agua_cadiz.pdf). Vínculo histórico entre Majaceite, piscifactoría y truchas.
- [Diputación de Cádiz, ficha ambiental del Majaceite, PDF](https://www.dipucadiz.es/export/sites/default/desarrollo_sostenible/educacion-ambiental/urbanismo/ciudad-21/Desarrollo-urbano-sostenible/.galeria_de_ficheros/Programa_Rio_Majaceite/Ficha.Rio-Majaceite.pdf). Contexto geográfico y bosque en galería; sus referencias productivas no se trasladan al presente.

Dirección y teléfono son los facilitados en el encargo. Maps es una búsqueda por nombre y dirección, sin coordenadas inventadas. JSON-LD usa `Place`, sin horarios, productos, reservas o estado operativo.

## Pendiente antes de publicar

1. Confirmar situación actual, titularidad, denominación, vigencia del teléfono y autorización para publicarlo.
2. Confirmar si hay acceso al público. Verificar por separado cualquier horario, venta, producción, actividad, precio o reserva antes de incorporarlos.
3. Confirmar dirección y resultado exacto de Google Maps con el responsable.
4. Solicitar fotografías propias y permiso escrito para mostrar instalaciones reales.
5. Incorporar aviso legal y datos del responsable que correspondan. No se han inventado NIF, razón social ni correo.
6. Al disponer de dominio, convertir `og:image` en URL absoluta y añadir canonical y `og:url`. La ruta relativa es válida localmente; algunos rastreadores sociales exigen URL absoluta.
7. Revisar de nuevo las fuentes y actualizar la fecha si transcurre tiempo antes de publicar.

## Fotografías y tipografía

Las dos fotografías se sustituyeron conservando los nombres de archivo, contenedores, estilos y tratamiento visual.

| Archivo | Fuente y autor | Licencia comercial | Dimensiones |
| --- | --- | --- | --- |
| img/agua.jpg | [Piscifactoría de El Bosque](https://commons.wikimedia.org/wiki/File:Piscifactor%C3%ADa_de_El_Bosque.jpg), Cayetano Ruiz de Alarcón Quintero | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | 1920 × 1280, original 3456 × 2304 |
| img/ribera.jpg | [Rainbow trout fishes underwater](https://commons.wikimedia.org/wiki/File:Rainbow_trout_fishes_underwater_oncorhynchus_mykiss.jpg), Eric Engbretson / U.S. Fish and Wildlife Service | Dominio público, uso comercial permitido | 2100 × 1500 |

La primera es una fotografía real del establecimiento tomada el 6 de diciembre de 2014: se identifica como histórica y no acredita actividad actual. La segunda muestra truchas arcoíris y es ilustrativa, ajena al establecimiento. No son imágenes generadas ni se reutilizaron de otros proyectos. Sin marcas de agua en la inspección visual.

Descargas originales verificadas y decodificadas con System.Drawing. Archivos finales JPEG optimizados a calidad 85: 475165 y 200499 bytes. Primera imagen redimensionada; segunda conserva resolución. Se mantienen desaturación, object-fit: cover y encuadre CSS originales. La adaptación de la primera fotografía se distribuye bajo CC BY-SA 4.0; atribución, fuente, licencia y transformaciones constan en los créditos fotográficos existentes. Esto no cambia la licencia del resto de la web. Las descargas iniciales fallaron con HTTP 429; se obtuvieron correctamente con curl desde Wikimedia. Metadatos originales de licencia conservados en .qa/image-metadata.json.

Fuente local **Commissioner**, The Commissioner Project Authors, SIL Open Font License 1.1 incluida en `css/OFL.txt`. Favicon y líneas SVG creados para este proyecto.

## Diseño y accesibilidad

Portada horizontal con texto separado de fotografía. Navegación visible de cuatro tramos, dos por dos en móvil; no requiere menú oculto. Ensayo tipográfico, diagrama de relaciones históricas, archivo cronológico, paisaje horizontal y contacto con retícula cartográfica abstracta. La retícula no es un mapa ni representa accesos reales.

Movimiento limitado a navegación suave, subrayados y deformación de líneas al pasar el cursor. Sin contenido oculto, carruseles ni parallax. Respeta `prefers-reduced-motion`. Incluye salto al contenido, foco visible, texto alternativo y mensajes de copia accesibles. Sin JavaScript siguen disponibles contenido, navegación, llamada y Maps. Clipboard API y alternativa `execCommand` gestionan éxito y fallo sin anunciar éxitos falsos.

Comparación de originalidad limitada al HTML accesible de los cinco proyectos abiertos: Elegua, García Chaves, Taberna El Algarrobo, Pastelería Paquí y Bar Majaceite. No se afirma comparar todos los proyectos ni sus estados visuales. El registro de agua, la navegación posterior a fotografía, el archivo y el contacto se diseñaron para este encargo.

## Validación

Resultados y límites en `VALIDACION.md`. Las herramientas temporales de comprobación quedan en `.qa/`, ignoradas y ajenas a los recursos necesarios para la web.
