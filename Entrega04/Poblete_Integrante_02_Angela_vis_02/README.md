# README - Proceso de Creación de la Visualización Atómica

## Nombre
**Angela Poblete - Visualización Atómica sobre el Envejecimiento Demográfico de Magallanes**

---

## Explicación del Proceso de Visualización

### 1. **Selección del tema y contexto**
El objetivo de esta visualización fue analizar y comunicar de manera efectiva el fenómeno del envejecimiento demográfico en la región de Magallanes entre 2002 y 2021. Este tema se seleccionó debido a su relevancia social y económica, destacando la disminución de las poblaciones jóvenes y activas y el rápido aumento de la población mayor de 60 años.

### 2. **Exploración y limpieza de la base de datos**
La base de datos utilizada contiene información sobre el cambio porcentual de población por edad y región en Chile entre los años 2002 y 2021. Las columnas principales incluyen:
- **Región**: Identifica la región geográfica.
- **0-14 años (%) cambio**: Variación porcentual en la población infantil.
- **16-59 años (%) cambio**: Variación porcentual en la población económicamente activa.
- **60 y más (%) cambio**: Variación porcentual en la población mayor.

Los pasos de procesamiento incluyeron:
1. Filtrar únicamente los datos de **Magallanes** y **Total país** para realizar una comparación representativa.
2. Reorganizar los datos con la función `melt` de Pandas para convertir los grupos etarios en una columna separada, facilitando la codificación en Altair.
3. Verificar la coherencia de los datos y corregir posibles errores de formato, como mayúsculas en nombres de columnas.

### 3. **Construcción de la visualización**
Se utilizó la biblioteca **Altair** para crear un gráfico de barras comparativo que muestra:
- En el eje **x**, los grupos etarios.
- En el eje **y**, el cambio porcentual en la población para cada grupo.
- La columna **Región**, separando visualmente a Magallanes de Total país.
- Uso de colores diferenciados para cada región mediante la codificación de color.

Las decisiones tomadas incluyeron:
- Dividir las columnas por región para enfatizar las diferencias.
- Usar colores contrastantes (esquema Tableau10) para facilitar la distinción entre Magallanes y el promedio nacional.
- Añadir un título descriptivo para orientar al usuario desde el primer vistazo.

### 4. **Exportación y prueba de la visualización**
La visualización fue exportada en formato `.html` y `.png` para garantizar compatibilidad y versatilidad. Se probó en diferentes navegadores para verificar su correcta visualización.

---

## Descripción de la Base de Datos (CSV)

### Características principales
- **Fuente:** Datos oficiales recopilados para el análisis demográfico en Chile.
- **Variables clave:**
  - `Región`: Nombre de cada región de Chile, incluyendo Total país.
  - `0-14 años (%) cambio`: Cambio porcentual en la población infantil.
  - `16-59 años (%) cambio`: Cambio porcentual en la población económicamente activa.
  - `60 y más (%) cambio`: Cambio porcentual en la población mayor.

### Observaciones
- El archivo contenía valores limpios, aunque fue necesario ajustar nombres como "Total país" para asegurar consistencia en el filtrado.
- La reorganización de los datos con `melt` fue esencial para facilitar la creación de la visualización.

---

## Preguntas que puede responder la visualización

1. **¿Cómo ha cambiado la población en Magallanes en comparación con el promedio nacional?**
   - La visualización muestra cómo los tres grupos etarios (0-14 años, 16-59 años, y 60 y más) han variado en Magallanes y a nivel nacional.

2. **¿Por qué la población de Magallanes presenta valores negativos en los grupos jóvenes y activos?**
   - Explica cómo la migración interna y la baja natalidad han afectado significativamente a la región.

3. **¿Qué región muestra el mayor envejecimiento poblacional en Chile?**
   - A través de la comparación con "Total país", se evidencia cómo Magallanes lidera el crecimiento porcentual en mayores de 60 años.

4. **¿Qué implicaciones tiene la disminución de la población joven en regiones como Magallanes?**
   - Permite discutir sobre las consecuencias económicas y sociales, como el impacto en el mercado laboral y los servicios públicos.

---

## Ejemplo de Decisión Clave: Diseño de la Visualización
La decisión de dividir el gráfico por región en columnas separadas (Magallanes y Total país) responde a la necesidad de una comparación clara. Se eligió este enfoque en lugar de un gráfico de líneas para evitar ambigüedades y enfatizar las diferencias en los valores absolutos.
