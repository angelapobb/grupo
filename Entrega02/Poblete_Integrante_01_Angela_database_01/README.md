## 1. Nombre
**Angela Poblete**

## 2. Explicación de cómo se realizó el proceso de limpieza de datos

El proceso de limpieza de los datos se realizó en varias etapas clave para garantizar la consistencia y usabilidad de la base de datos. A continuación, se detallan los pasos seguidos y las decisiones tomadas:

- **Extracción de datos**: Se tomaron las tablas originales de los gráficos y tablas extraídos del documento "Envejecimiento en Chile: evolución, características de las personas mayores y desafíos demográficos de la población" del Instituto Nacional de Estadísticas (INE). Estas tablas fueron transformadas en archivos CSV para una mayor manipulación y análisis.

- **Conversión de gráficos a tablas CSV**: Los datos presentados en gráficos y tablas del informe fueron cuidadosamente transcritos y convertidos en archivos CSV. Cada gráfico o tabla relevante fue transformado en un conjunto de datos separado, lo que permitió estructurar la información de manera tabular.

- **Homologación de columnas**: En algunos casos, fue necesario estandarizar los nombres de las columnas para facilitar su comprensión. Por ejemplo, columnas como “% de personas mayores de 60 años” fueron renombradas para estandarizar las categorías de edad entre los distintos conjuntos de datos.

- **Revisión de consistencias**: Se revisaron las cifras para asegurar que los valores fueran consistentes y no hubiera duplicaciones o datos contradictorios.

- **Relleno de datos faltantes**: En los casos en que faltaban algunos datos (como un año específico en una tabla), se decidió no estimar ni interpolar valores, manteniendo la integridad de los datos proporcionados por el INE.

- **Conversión a formato CSV**: Finalmente, todos los archivos se guardaron en formato CSV, haciendo que la base de datos esté lista para ser utilizada en análisis y visualización de datos.

## 3. Lista de las fuentes de datos utilizadas y una explicación de por qué las eligieron

Los datos fueron obtenidos directamente del documento oficial del **Instituto Nacional de Estadísticas (INE)** titulado *"Envejecimiento en Chile: evolución, características de las personas mayores y desafíos demográficos de la población"*. Esta fuente fue elegida debido a su relevancia en el contexto chileno, su confiabilidad como fuente oficial y la precisión de los datos demográficos que proporciona sobre la evolución de la población mayor en Chile. 

Las tablas seleccionadas reflejan indicadores clave como:

- Tasa de fecundidad.
- Tasa de mortalidad.
- Esperanza de vida al nacer y a los 60 años.
- Distribución porcentual de la población por grandes grupos de edad.
- Porcentaje de población en la cuarta edad (80 años o más).
- Índice de envejecimiento por región.

## 4. Ejemplos sobre preguntas que se pueden responder con la base de datos limpia

A continuación, algunos ejemplos de preguntas que se pueden responder utilizando la base de datos limpia:

1. **¿Cómo ha evolucionado la población mayor de 60 años en cada región de Chile entre 2002 y 2021?**  
   Con la base de datos limpia, se puede realizar un análisis comparativo del crecimiento de la población mayor de 60 años en cada región durante las últimas dos décadas.

2. **¿Cuáles son las diferencias en la esperanza de vida entre hombres y mujeres en distintas regiones de Chile?**  
   Los datos sobre la esperanza de vida permiten identificar diferencias significativas entre hombres y mujeres en varias regiones, revelando posibles disparidades de salud a nivel regional.

3. **¿Cuál es la tasa de envejecimiento en Chile y cómo se compara entre las regiones más envejecidas y las menos envejecidas del país?**  
   Utilizando los índices de envejecimiento, se pueden realizar comparaciones regionales para identificar cuáles son las regiones con mayores y menores tasas de envejecimiento.
