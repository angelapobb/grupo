# Proceso de Limpieza de Datos

## Nombre: Angela Poblete

## Explicación del Proceso de Limpieza de Datos

El proceso de limpieza de los datos se realizó cuidadosamente siguiendo varios pasos para asegurar que los datos estuvieran listos para su análisis y visualización. A continuación, se describen los pasos y decisiones tomadas en detalle:

1. **Revisión Inicial de los Datos Originales:**
   Se recibieron múltiples tablas en formato gráfico, las cuales contenían datos sobre la distribución de la población por edad, región y otros indicadores demográficos. Estas tablas fueron convertidas manualmente a formato CSV.

2. **Conversión a CSV:**
   Utilizamos herramientas de procesamiento de imágenes para extraer los datos de los gráficos originales del documento del Instituto Nacional de Estadísticas de Chile (INE). Cada tabla fue cuidadosamente revisada para asegurarse de que los datos numéricos extraídos fueran correctos y fieles a los gráficos originales. El formato CSV fue elegido para garantizar la interoperabilidad y facilidad de uso en herramientas de análisis de datos.

3. **Eliminación de Columnas Innecesarias:**
   Durante la extracción, se incluyeron varias columnas innecesarias con títulos o datos irrelevantes. Estas columnas fueron eliminadas en el proceso de limpieza. Por ejemplo, las columnas de "Unnamed" que representaban datos sin etiquetas significativas fueron descartadas.

4. **Renombrado de Columnas:**
   Las columnas sin etiquetas claras fueron renombradas para proporcionar descripciones claras y comprensibles. Ejemplos de esto incluyen el renombrado de “Unnamed 1” a “0-14 años (%)”, “Unnamed 2” a “15-59 años (%)” y “Unnamed 3” a “60 y más (%)”.

5. **Corrección de Errores Tipográficos:**
   Se encontraron pequeños errores tipográficos, principalmente en los nombres de regiones. Estos errores fueron corregidos para mantener la coherencia y garantizar que las regiones fueran identificadas correctamente.

6. **Conversión de Datos Numéricos:**
   Los datos extraídos en formato porcentual fueron revisados y convertidos en números decimales de acuerdo con las convenciones necesarias para su análisis en un entorno de programación.

7. **Normalización de Registros Faltantes:**
   Se identificaron algunos datos faltantes en ciertas celdas. Estos valores se manejaron utilizando la convención de "NA" o 0% cuando no había información disponible en el gráfico original.

8. **Validación de los Datos:**
   Para asegurar la calidad y precisión de los datos, se compararon los datos del CSV con los gráficos originales. Además, se utilizó un script de validación para verificar que los valores porcentuales sumaran correctamente y que las regiones estuvieran representadas de manera uniforme.

9. **Estandarización del Formato de Fechas y Regiones:**
   Las fechas y nombres de las regiones fueron estandarizados para garantizar uniformidad en el análisis posterior.

## Fuentes de Datos Utilizadas

- **Fuente Principal:**
  Todos los datos fueron extraídos del documento "Envejecimiento en Chile: evolución, características de las personas mayores y desafíos demográficos de la población", del Instituto Nacional de Estadísticas (INE). Este documento proporcionó una visión detallada de la demografía chilena desde 1992 hasta 2021, lo que nos permitió construir una base de datos robusta y completa.

- **Razón para Elegir Estas Fuentes:**
  Elegimos el documento del INE porque es una fuente oficial y confiable que contiene datos relevantes y actualizados sobre la población chilena. Además, proporciona una cobertura a largo plazo (1992-2021), lo que es clave para analizar tendencias de envejecimiento y distribución demográfica en Chile.

## Preguntas que se Pueden Responder con la Base de Datos Limpia

1. **¿Cómo ha cambiado la distribución porcentual de la población por grupos de edad en cada región de Chile entre 2002 y 2021?**
   La base de datos permite comparar los porcentajes de las poblaciones de 0-14 años, 15-59 años, y 60 y más años en todas las regiones, y cómo esos porcentajes han cambiado en las dos décadas cubiertas.

2. **¿Cuáles son las regiones con mayor proporción de población mayor de 60 años en 2021?**
   Con la base de datos limpia, podemos calcular fácilmente cuáles son las regiones que tienen una mayor proporción de personas mayores de 60 años y cómo eso se compara con el promedio nacional.

3. **¿Qué regiones han experimentado un mayor envejecimiento poblacional (incremento en la proporción de personas mayores de 60 años) entre 2002 y 2021?**
   Esta pregunta se puede responder utilizando los datos de 2002 y 2021 para calcular el cambio en la proporción de personas mayores de 60 años en cada región y determinar qué regiones han envejecido más rápido.

## Código Utilizado para Cargar la Base de Datos Limpia en Google Colab

El siguiente código se utilizó para cargar la base de datos limpia en un notebook de Google Colaboratory:

```python
import pandas as pd

# Asegúrate de poner el nombre del archivo entre comillas
df = pd.read_csv('Angela_database - Hoja 1 (1).csv')

# Visualizar las primeras filas del DataFrame
df.head()
