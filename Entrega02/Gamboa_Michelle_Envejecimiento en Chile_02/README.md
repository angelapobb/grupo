# Proceso de Limpieza de Datos

## Nombre: Michelle Gamboa Palma

## Bases de datos
Para este proceso de limpieza de datos se obtuvo información del documento de trabajo **“Envejecimiento en Chile: Evolución, características de las personas mayores y desafíos demográficos para la población”** del INE, específicamente del punto **5.3: Principales causas de muerte de las personas mayores 2010-2019.**
También se utilizaron datos obtenidos del **[Registro Nacional de Prestadores Individuales de Salud de la Superintendencia de Salud](https://rnpi.superdesalud.gob.cl/#)** sobre cardiólogos y oncólogos en las diferentes regiones del país.  
- **Justificación de las bases escogidas:**
  
Los datos que ya tenemos de los censos (analizados por mi compañera Angela), nos muestran que en regiones del sur del país, como Ñuble, Magallanes y Aysén, existe un acelerado envejecimiento. A partir de esto, llegamos a la conclusión de que el aumento de la población de la cuarta edad, traerá consigo dificultades en el sistema de salud, que necesitará mayor infraestructura y especialistas para atender las enfermedades que prevalecen en los adultos mayores.

Una rápida comparación de las tasas de envejecimiento de los censos con la cantidad de especialistas en el país, a partir de esta nota de La Tercera, nos ayudó a comprobar que, aunque en la región Metropolitana ha aumentado la población adulta mayor, no hay una falta de especialistas tan urgente como sí la hay en regiones del sur, que tienen un envejecimiento similar o incluso mayor que la capital.

La información del documento **"Envejecimiento en Chile: Evolución, características de las personas mayores y desafíos demográficos para la población"** fue seleccionada debido a su enfoque en las principales causas de muerte entre personas mayores. Conocer estos datos es esencial para evaluar la presión sobre el sistema de salud en regiones con alto envejecimiento poblacional. 

El informe detalla que las enfermedades cardiovasculares y el cáncer son las principales causas de mortalidad en adultos mayores, por lo que recopilamos datos del **Registro Nacional de Prestadores Individuales de Salud** para evaluar la disponibilidad de especialistas, como cardiólogos y oncólogos, en diferentes áreas del país.

Contar con esta información nos permite realizar un análisis más profundo sobre el acceso a la salud en personas mayores, para lograr comparar la realidad del sistema de salud en diferentes regiones del país, e identificar si la falta de especialistas se debe sólo al rápido envejecimiento de la población o tiene otras causas, como las diferencias en regiones más urbanizadas versus regiones más rurales. 
## Creación de nuevas bases de datos
Para el documento **"Envejecimiento en Chile: Evolución, características de las personas mayores y desafíos demográficos para la población"**, se extrajo manualmente la información obtenida del Gráfico 40: Porcentaje de defunciones de personas mayores según principales grupos de causas de muerte. 2010-2019 (página 67) y se introdujo punto por punto los datos de causas de muerte y porcentajes en un documento Excel.

En cuanto al **Registro Nacional de Prestadores Individuales de Salud**, se filtró la información de especialistas al buscar específicamente por “cardiología” y “oncología” en todo el país. Los datos se extrajeron de forma manual para ambas opciones, pues no había opción de descargar en archivo csv, y luego fueron incorporados a dos documentos Excel separados.
## Proceso de limpieza de datos
Para seleccionar los datos de interés para este trabajo, se realizaron los siguientes pasos de limpieza:

**1.Corrección de errores ortográficos:** Algunos de los nombres de regiones estaban mal escritos, con falta de tildes e incluso con omisión de letras (p.ej: se tuvo que cambiar “Benado Ohiggins” por “Bernardo O’Higgins”). 

**2.Estandarización de datos:** En la base de especialistas, las regiones estaban escritas de diferente manera, por ejemplo, en el caso de la 6ta región, algunas veces era identificada como “O’Higgins” y otras como “Libertador Bernardo O’Higgins”. Esto también pasó con “Bío-bio” y “Bío Bío” o la región de “Arica” y “Arica y Parinacota”. Se decidió establecer sólo un nombre estándar para cada región en ambas bases de datos, y así evitar confusiones u omisiones de algún dato.

**3.Registros faltantes:** Se eliminaron de la base de datos de especialistas, aquellos en donde la ubicación del médico se registraba como “no informada” o directamente estaba en blanco.

**4.Elección de especialistas:** Se eliminaron de la base de datos los especialistas que no eran médicos, como matronas o tecnólogos.

**5.Validación de datos:** Para asegurar la precisión de los datos, se compararon los datos del CSV con el gráfico 40 del informe sobre envejecimiento. Además, se usaron fórmulas en Excel para verificar que los valores porcentuales y la cantidad de especialistas sumaran correctamente.

**6.Eliminación de categorías:** En el caso de la base de datos de causas de muerte, sólo se mantuvieron los datos de las muertes por “Tumores malignos” y “Enfermedades sistema circulatorio”, para los años 2010 y 2019, puesto que sólo entre estas dos categorías se concentra más del 50% de las muertes en adultos mayores, lo que guió la elección de especialistas en las siguientes bases de datos.

**7.Tablas dinámicas:** Finalmente, los datos de oncólogos y cardiólogos se limpiaron y ordenaron a través de la creación de tablas dinámicas, con el fin de obtener la cantidad de cada especialista por región, y luego ambas tablas dinámicas se unieron en sólo un archivo csv.

## Preguntas que pueden responder las bases de datos limpias

1. ¿Cuáles son las principales causas de muerte en personas mayores en Chile?

2. ¿Cómo ha evolucionado la mortalidad en personas mayores entre 2010 y 2019, y cómo se compara con la disponibilidad de especialistas?

3. ¿Qué regiones de Chile tienen una mayor y una menor cantidad de cardiólogos y oncólogos en relación con la población de personas mayores? (se vincula con la base de datos de los censos)
## Código en Google Colab
El siguiente código se utilizó para cargar la base de datos limpia en un notebook de Google Colaboratory:

```python
import pandas as pd
df = pd.read_csv("Tabla dinámica Especialistas.csv", encoding='latin-1')

#Ahora puedes trabajar con el DataFrame df

df
