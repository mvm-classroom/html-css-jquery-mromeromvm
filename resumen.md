# Resumen Detallado 

Este trabajo consiste en representar nuestro horario escolar de 1r de ASIX usando html, añadiendole estilos como es css y para finalizar un pequeño script que cambie la manera de ver el horario.

Para explicar cómo lo he creado, son 3 pasos sencillos:
1. Usando **HTML** he creado toda la estructura base, los cuadrados el texto, la posicion del texto, si va en mayusculas o en minusculas, etc.
2. El **CSS** representa lo que viene siendo el color que le ha dado vida a esa estructura antes creada con html.
3. Y para acabar el **JavaScript (con jQuery)** representa el pequeño extra que le hemos añadido para la gente que le guste ver las cosas en modo oscuro o en modo brillo.

---

## 1. La Estructura y el Contenido

Utilizando el lenguaje **HTML**, se ha definido qué información debe aparecer en la pantalla, todos los nombres, los nombres de las asignaturas, los titulos entre lo demas:

* **Quién soy:** He puesto un saludo arriba del todo para que se sepa que la página es mía y que es para mi clase de 1º de ASIX.
* **El Horario:** He montado una tabla con sus filas y columnas para meter las asignaturas de la semana. Para la hora del patio (la del "furbo"), he fusionado las celdas para que quede como una barra horizontal que corta el día, simulando el descanso.
* **Ficha de contacto:** Abajo del todo dejé un par de cajas para que cualquiera pueda poner su nombre y su correo, junto a un botón para guardar los datos.

---

## 2. CSS 

Para que la página no pareciese un documento soso de Word en blanco y negro, le metí mano al diseño con **CSS** para dejarla mejor visualmente:

* **Efectos:** El cuadro del centro no es un color plano aburrido; tiene un efecto translúcido, como si fuera un cristal borroso. Hace que se intuya el fondo de la pantalla y le da un toque moderno.
* **Colores para no perderse:** Cada asignatura tiene su propio color de fondo y su letra a juego. Así, de un solo vistazo y sin tener que leer, ya sabes si te toca sistemas, redes o programación por el color de la celda.
* **Cosas que se mueven** La página reacciona cuando pasas el ratón por encima. Si te pones sobre las asignaturas o los botones, estos cambian suavemente de color o se elevan un poco. Da la sensación de que la web está "viva" y responde a lo que haces.

---

## 3. El JavaScript 
Usando **JavaScript** y una ayuda llamada **jQuery**, le he metido un boton arriba del todo:

* **El boton de Modo Oscuro:** Cuando haces clic en el botón "Mode fosc", la web se da cuenta al instante y cambia el color.
* **Cambio:** Si estás con la pantalla en blanco (modo claro) y te molesta a los ojos, le das al botón y se vuelve todo gris oscuro y negro con las letras brillantes para no cansarte mas la vista. Además, el texto del propio botón cambia solo a "Mode clar" para avisarte de que puedes volver a cambiarlo cuando quieras.

---

## 4. Las normas del formulario

Para que la gente no ponga cualquier cosa en las casillas de contacto, les he puesto un par de normas automáticas:

* **No vale dejarlo en blanco (`required`):** Le he puesto un aviso obligatorio al nombre y al correo. Si intentas darle al botón de guardar y no has escrito nada, la web responde y te dice que "tienes que rellenar este campo" obligatoriamente.
* **Detector de correos (`type="email"`):** En la casilla del correo tendras que escribir obligatoriamente un correo, si no no te dejara. El sistema revisa lo que has puesto y, si no ve una arroba (`@`) y un final tipo `.com` o `.cat`, te salta un error y no te deja enviar nada.

---

## 5. Herramientas
Para hacer todo esto realidad, he usado esto:

* **Visual Studio Code:** El programa donde he escrito todo el código.
* **HTML y CSS:** El lenguaje para crear la web y el estilo o los colores que he preferido.
* **JavaScript y jQuery:** El lenguaje de programación y su "ayudante" para que el botón de modo oscuro funcione.
* **Inteligencia Artificial (IA):** Un ayudante que me ayudo a poder desarrollar con mas amplitud algunas partes del codigo.
