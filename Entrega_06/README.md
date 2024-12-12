# Entrega 06 - Webstory 

## Descripción General

Esta entrega grupal pone aplica lo aprendido sobre periodismo de datos y visualización, creando una webstory interactiva sobre nuestro tema de investigación: **Donde el tiempo pasa más rápido: Envejecimiento y salud en el sur de Chile**, que permite comunicar información de manera clara y atractiva. Usamos librerías en altair a través de google colab, así como gráficos interactivos en Flourish, para generar una visualización de datos que facilite la comprensión del tema elegido, integrando conceptos de diseño de información y diseño de interacción. En los documentos se mestra el proceso de diseño y desarrollo de la webstory utilizando HTML, CSS y JavaScript, para finalmente dejar publicado el resultado en el repositorio. 

---

## Integrantes del Equipo

1. **Angela Poblete** 
2. **Michele Gamboa** 
3. **Constanza Inostroza** 

### **Resumen del Proyecto**
Nuestro proyecto aborda el envejecimiento acelerado en Chile, con un enfoque en la región de Magallanes, donde las brechas en el acceso a la salud son más profundas. Analizamos la escasez de especialistas médicos, como oncólogos y cardiólogos, y su impacto en la calidad de vida de la creciente población mayor. A través de datos, gráficos y análisis comparativos, destacamos cómo el aumento en la esperanza de vida, la migración interna y la baja natalidad han transformado la demografía de Magallanes, dejando a una población envejecida con necesidades críticas. Abordamos los nuevos desafíos en salud que trae consigo una sociedad envejecida, con énfasis en la desigualdad de recursos entre la zona central y los extremos norte y sur del país. Nos centramos en Magallanes por su acelerado envejecimiento, que no es acompañado de un sistema de salud capaz de atender las necesidades de las personas mayores de 60 años.

---
#### **Hipótesis Inicial**
Nuestra hipótesis inicial era analizar el envejecimiento acelerado a lo largo del país y las problemáticas que este traería. Era un tema muy amplio, que fue tomando forma a medida que investigábamos.

En la primera entrega presentamos esta idea: "Este proyecto busca explorar cómo estos cambios han afectado la estructura poblacional chilena y qué implicaciones tienen para el futuro en áreas como la fuerza laboral, la planificación urbana, los sistemas de pensiones y la atención en el sistema de salud. Este cambio demográfico afecta tanto de manera transversal a las distintas generaciones, por lo que visualizaremos datos históricos y recientes para mostrar la evolución y magnitud de estas dinámicas y anticipar posibles retos futuros."

#### **Preguntas Iniciales**

¿Cómo ha cambiado la distribución de la población chilena por edad en las últimas décadas?
¿Cuál es la proporción de personas mayores en comparación con la población joven en la actualidad? ¿Cómo ha evolucionado?
¿Qué factores han contribuido al envejecimiento de la población en mayor y menor medida? (disminución de la natalidad, aumento en la esperanza de vida, migración)
¿Cómo está afectando el envejecimiento a los sistemas de pensiones y de salud en Chile?
¿Cuáles son las proyecciones de la pirámide poblacional en Chile para las próximas décadas?
¿Cómo se compara Chile con otros países en términos de envejecimiento poblacional?
¿Qué políticas públicas se han implementado o se están debatiendo para hacer frente a este desafío?

#### **Evolución de la Hipótesis y Preguntas**

Con el pasar de las clases y los comentarios de la profesora Katherine, empezamos a buscar historias dentro de estos datos que comenzamos analizar. El envejecimiento afecta a muchas áreas y no era posible abarcarlas todas. Al analizar la natalidad, esperanza de vida y mortalidad de los datos de los últimos censos, nos dimos cuenta que había un tema muy interesante que no estaba siendo tocado por las bases de datos que encontramos: la gente vive más, ¿pero vive bien?

A partir de esta pregunta, aún sin mucho desarrollo, comenzamos a investigar la salud de los adultos mayores en Chile. Rápidamente nos dimos cuenta que los datos sobre enfermedades y mortalidad no coincidían con la cantidad de especialistas médicos disponibles. Al enfocar nuestra historia, nos inclinamos por la región de Magallanes como nuestra protagonista, pues cumplía con todo lo que hasta el momento habíamos recabado: es la región con mayor envejecimiento en los últimos años, la población sobre 60 años sigue creciendo pero algunos de los especialistas médicos más requeridos por las necesidades de este grupo etario, que identificamos serían cardiólogos y oncólogos, era una de las más bajas a nivel nacional. Esta inequidad extrema coincidía con las características de la región: es una de las zona más apartadas del país y enfrenta climas extremos, además de las problemáticas mencionadas.

Finalmente, nuestra hipótesis quedó en: la desigualdad en la distribución de especialistas médicos agravan las brechas de acceso a la salud en las regiones extremas de Chile, impactando negativamente la calidad de vida de sus habitantes mayores.

Las preguntas que buscamos responder con nuestra investigación son:
1. ¿Cuáles son las regiones con mayor tasa de envejecimiento en el país?
2. ¿Qué regiones tienen la mayor y menor cantidad de oncólogos y cardiólogos?
3. ¿Qué regiones muestran mayores desigualdades entre la población mayor y los especialistas médicos?
4. ¿Cómo se compara Magallanes con otras regiones en términos de acceso a especialistas?
5. ¿Existen diferencias significativas en la disponibilidad de especialistas médicos entre el norte, centro y sur de Chile?

---

### **Narrativa y Diseño de Información**

#### **Narrativa en Tres Actos**
1. **Contexto:** Análisis del envejecimiento en Chile, destacando el aumento porcentual de adultos mayores y sus implicancias a nivel regional.
2. **Foco:** Introducción al caso de Magallanes, con comparaciones clave respecto al promedio nacional para resaltar las desigualdades.
3. **Exploración:** Visualizaciones de datos que muestran la realidad de la salud en adultos mayores y distribución de especialistas médicos por región, con un relato que conecta el envejecimiento con la disponibilidad de recursos.

#### **Flujo de Usuario**

- El usuario inicia con un resumen contextual del problema, con la posibilidad de dirigirse a la sección que decida a través de botones interactivos.
- Se encuentra con crónicas que relatan la investigación, comenzando por el contexto nacional del envejecimiento, luego centrándose en el caso de Magallanes para terminar con una comparación de los nuevos desafíos en salud y la necesidad de especialistas médicos.
- Navega a través de gráficos interactivos que permiten explorar la desigualdad en la distribución de especialistas.
- Finaliza con un resumen de la investigación y propuestas sobre cómo enfrentar el fenómeno del envejecimiento y las nuevas problématicas que surgen en salud.

---

### **Visualizaciones Atómicas**

1. **Gráfico 1:** Aumento porcentual de adultos mayores (2002-2021) por región. 
   - **Dimensión:** Comparativa.
   - **Mensaje:** Evidenciar el envejecimiento acelerado y sus diferencias regionales, con algunas con un envejecimiento más acelerado en comparación con otras.

2. **Gráfico 2:** Comparación del envejecimiento en Magallanes versus el total país.
   - **Dimensión:** Comparativa.
   - **Mensaje:** Compara el envejecimiento de la población en la región de Magallanes con el envejecimiento promedio de la población nacional. El gráfico resalta las particularidades de Magallanes, mostrando una tendencia de envejecimiento más pronunciada que en otras regiones del país.
     
3. **Gráfico 3:** Porcentaje de defunciones de personas mayores según principales causas de muerte.
   - **Dimensión:** Categórica.
   - **Mensaje:** Muestra el porcentaje de defunciones en personas mayores, desglosado según las principales causas de muerte. La intención es destacar las patologías que afectan de manera más grave a la población adulta mayor.

5. **Gráfico 4:** Número de personas con garantías de oportunidad GES retrasadas, según patologías.
   - **Dimensión:** Categórica.
   - **Mensaje:** Muestra el número de personas mayores que tienen garantías de oportunidad GES retrasadas, desglosado por diferentes patologías. El objetivo es visualizar el impacto de la espera en el acceso a tratamientos médicos y cómo esto afecta a la población adulta mayor. El análisis de este gráfico se puede comparar con los resultados evidenciados en las principales causas de muerte consignadas en el gráfico anterior.
     
6. **Gráfico 5:** Distribución de oncólogos y cardiólogos por región.
   - **Dimensión:** Comparativa.
   - **Mensaje:** Muestra cómo se distribuyen los oncólogos y cardiólogos en las distintas regiones de Chile, destacando la escasez de especialistas en ciertas zonas geográficas. Se busca mostrar las carencias específicas de especialistas en la región de Magallanes, que presenta una falta crítica de profesionales médicos en estas áreas.

7. **Gráfico 6:** Tasa de especialistas por cada 100 habitantes mayores de 60 años.
   - **Dimensión:** Relacional.
   - **Mensaje:** Ilustra la tasa de especialistas por cada 100 habitantes mayores de 60 años en distintas regiones de Chile. Su objetivo es evaluar la disponibilidad de atención médica especializada para la población adulta mayor en las diversas regiones, destacando las inequidades y áreas con mayor necesidad.
---

### **Responsabilidades del Equipo**

| Elemento                       | Michele Gamboa          | Constanza Inostroza      | Ángela Poblete          |
|---------------------------------|--------------------------|--------------------------|--------------------------|
| Logotipo "Chile"               |                          |                          |       ✅                    |
| Imagen título "Donde el tiempo..." |          ✅               |                          |                          |
| Botones interactivos            |          ✅                |                          |                          |
| Estilo CSS                      |           ✅                 |                          |       ✅                   |
| Edición HTML                    |          ✅                |                          |                          |
| Carrusel y videos |                   | ✅               |     ✅          |
| Crónica un país que envejece    |                          |           ✅               |                          |
| Gráfico Altair variación población |                        |           ✅               |                          |
| Crónica éxodo Magallanes        |                          |                          |         ✅                 |
| Gráfico Altair cambio en Magallanes |                       |                          |         ✅                 |
| Crónica nuevos desafíos         |             ✅             |                          |                          |
| Gráfico defunciones             |            ✅              |                          |                          |
| Gráfico GES                     |            ✅              |                          |                          |
| Crónica especialistas           |            ✅              |                          |                          |
| Gráficos especialistas          |            ✅              |                          |                          |
| Card interactiva                |                          |           ✅               |                          |
| Búsqueda de imágenes            |             ✅             |           ✅               |                          |
| Organización repositorio Github |                          |                          |             ✅             |
| Handout |                    |                     |  ✅   |
| Investigación                   |       ✅                   |          ✅                |            ✅              |
| Readme                          |        ✅                  |                          |              ✅          |
| Lista referencias               |   ✅   |              |              |      

---

### **Decisiones Visuales**
- **Colores:** Paleta basada en tonos naranjos y azules para transmitir profesionalismo y cercanía a la vez.
- **Tipografía:** League Gothic para los títulos y Bree Serif en el cuerpo de la página para facilitar la lectura.
- **Logos y Branding:** Identidad visual consistente con el tema de salud y envejecimiento, con un logo que tiene la palabra "Chile" con la letra "i" reemplazada por un adulto mayor, con fondo naranjo para seguir la paleta de colores elegida.

---

### **Enlaces**
- **Video de Presentación:** [[Aquí](https://youtube.com/shorts/p2kUPmjWDLQ?feature=share)]
- **Carrusel:** [[Aquí](https://github.com/angelapobb/grupo/blob/main/Entrega_05/Carrusel%20instagram%20entrega%202%20(6).pdf.pdf)]
- **Webstory Publicada:** [[Aquí](https://angelapobb.github.io/grupo/)]

---

### **Comentarios Finales**
Este proyecto combina análisis de datos, diseño de información y periodismo narrativo para abordar una problemática urgente en Chile. La documentación detallada y las decisiones informadas buscan garantizar que el resultado sea claro, coherente y replicable.
