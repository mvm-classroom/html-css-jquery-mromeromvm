# Resumen Detallado 

Este proyecto consiste en la creación completa de una página web interactiva que funciona como panel de control para un alumno de 1º de ASIX. La aplicación web incluye la visualización del horario lectivo y un formulario para la actualización de datos personales. 

Para explicar cómo se ha construido, podemos imaginar la página web como si fuera una **casa**:
1. El **HTML** representa los planos y los ladrillos (la estructura desnuda).
2. El **CSS** representa la pintura, la decoración y el diseño de interiores (la estética).
3. El **JavaScript (con jQuery)** representa la instalación eléctrica y los mecanismos automatizados (los botones que hacen cosas).

---

## 1. La Estructura y el Contenido (El "Esqueleto" de la Casa)

Utilizando el lenguaje **HTML**, se ha definido qué información debe aparecer en la pantalla. Es el contenido puro y duro, organizado de manera lógica para que el usuario no se pierda:

* **Identificación del Alumno:** Una sección de bienvenida en la parte superior que presenta formalmente al creador de la página.
* **El Horario Académico:** El núcleo de la página es una tabla organizada por filas (horas) y columnas (días de la semana) donde se detallan todas las asignaturas del curso. Se ha incluido de forma destacada la hora del patio, unificando las columnas para que visualmente actúe como un descanso en la jornada.
* **Formulario de Contacto:** Un espacio al final de la página con dos casillas preparadas para que el usuario introduzca su nombre completo y su dirección de correo electrónico, acompañadas de un botón para guardar los cambios.

---

## 2. El Diseño Visual y la Estética (La "Pintura y Decoración")

Para que la página no pareciera un simple documento de texto en blanco y negro, se ha diseñado toda una capa estética utilizando **CSS**. El objetivo ha sido lograr un aspecto moderno, limpio y muy visual:

* **Efecto de Cristal (*Glassmorphism*):** El cuadro central de la página no es un color sólido; tiene un diseño translúcido que imita al cristal esmerilado, dejando intuir ligeramente el fondo de la pantalla y aportando una sensación de profundidad.
* **Código de Colores para Asignaturas:** Cada asignatura del horario tiene asignado un color de fondo único y un tono de texto a juego (por ejemplo, tonos verdes, azules o rosados según la materia). Esto permite que, de un solo vistazo, el alumno identifique qué clase le toca sin necesidad de leer el texto completo.
* **Interactividad Visual (Efecto *Hover*):** La página "reacciona" cuando pasas el ratón por encima de los elementos. Si el usuario pasa el cursor sobre las celdas del horario o sobre los botones, estos cambian suavemente de color o se elevan ligeramente, lo que da la sensación de que la página está "viva".
* **Adaptabilidad a Móviles:** Se ha configurado el diseño para que, si la página se abre desde un teléfono móvil, el contenido y la tabla del horario se reajusten automáticamente para que no se corte ningún texto y todo siga siendo cómodo de leer.

---

## 3. El Mecanismo de Interacción (La "Instalación Eléctrica")

Una página web moderna no solo se mira, también se interactúa con ella. Mediante un pequeño programa escrito en **JavaScript** (apoyado en la herramienta **jQuery**), se ha instalado un interruptor inteligente en la parte superior:

* **El Botón de Cambio de Tema (Claro / Oscuro):** Al hacer clic en el botón "Mode fosc" (Modo oscuro), el programa detecta el clic al instante y cambia por completo las "reglas de estilo" de la página. 
* **Transformación en Vivo:** Si la página estaba en modo claro (fondo azulado y letras oscuras), pasa instantáneamente a modo oscuro (fondo gris oscuro, casi negro, y letras brillantes) para que no lastime los ojos por la noche. Además, el propio texto del botón cambia de forma automática para decir "Mode clar", indicando al usuario que puede pulsar de nuevo para volver atrás.

---

## 4. Filtros de Seguridad en el Formulario (El "Control de Calidad")

Para evitar errores humanos cuando un usuario introduce sus datos en las casillas de contacto, se han configurado dos sistemas de control automático directamente en el formulario:

* **Campos Obligatorios (`required`):** Se ha colocado un candado digital en las casillas de nombre y correo. Si el usuario intenta pulsar el botón de guardar dejando los campos vacíos, la propia página web se lo impide y le avisa con un mensaje de que es obligatorio rellenarlos.
* **Detector de Correos Falsos (`type="email"`):** La casilla del correo electrónico tiene un filtro especial. No basta con escribir cualquier texto (como "hola"); el sistema analiza lo que se ha escrito y exige que cumpla con la estructura real de un correo electrónico (es decir, que contenga una arroba `@` y un dominio como `.com` o `.cat`). Si no es así, no permite enviar el formulario.

---

## 5. Herramientas y Recursos Utilizados

Para llevar a cabo el desarrollo completo de este trabajo, se han utilizado las siguientes herramientas de trabajo:

* **Visual Studio Code:** El bloc de notas avanzado donde se ha redactado manualmente cada línea de código.
* **HTML & CSS:** Los estándares que definen la estructura y el diseño visual de internet.
* **JavaScript & jQuery:** El lenguaje de programación y su biblioteca de ayuda para dar agilidad al botón interactivo.
* **Inteligencia Artificial (IA):** Utilizada como asistente de apoyo y consulta para el co-diseño de los estilos visuales avanzados del CSS.
