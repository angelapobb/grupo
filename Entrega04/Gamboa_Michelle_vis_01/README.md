## Análisis de distribución de especialistas en Chile ante el creciente envejecimiento
En este análisis, se presenta una visualización de los datos sobre la distribución de oncólogos y cardiólogos en las distintas regiones de Chile. El objetivo principal es explorar la desigualdad en la distribución de especialistas médicos frente al envejecimiento de la población, lo que podría tener implicaciones directas en la calidad de vida de las personas en áreas con una mayor proporción de adultos mayores.

La visualización fue creada utilizando Google Colab y con la librería Altair para la creación de gráfico. Se combinaron dos bases de datos: una con la **cantidad de oncólogos** y otra con la **cantidad de cardiólogos en el país**, y se ajustaron las variables necesarias para proporcionar una imagen clara de la situación actual.

- **Recolección de Datos**

Para este análisis, se utilizaron tres bases de datos principales:
1.	Oncólogos por Región (oncologos_por_region.csv): Contiene el total de oncólogos en cada región de Chile.
2.	Cardiólogos por Región (cardiologos_por_region.csv): Cantidad de cardiólogos en cada región.
3.	Datos de Adultos Mayores por Región (Envejecimiento.csv): Aunque originalmente se contemplaba usar estos datos, finalmente se simplificaron los gráficos para que solo incluyeran los oncólogos y cardiólogos sin los datos de adultos mayores.

- **Preparación de los Datos**

Los datos fueron cargados y limpiados utilizando Pandas, que es una biblioteca de Python para la manipulación y análisis de datos. Algunos de los pasos de limpieza más importantes fueron:

**1.	Corrección de datos:** Se cambiaron los nombres de las columnas y se reordenaron para asegurar que fueran consistentes y fáciles de entender. En un principio se agregó al colab las bases de datos limpias y no las tablas dinámicas, pero por un error que no se logró aclarar, en estas bases con grandes cantidades de datos (región, nombre del especialista y rut) surgían errores en la lectura del código por las tildes. A pesar de intentar varias opciones, consultar a Chatgpt sobre las soluciones a los errores en el colab, las fallas persistían por lo que se decidió optar por las tablas dinámicas que contenían menos datos, pero los relevantes para esta visualización (regiones del país y cantidad de especialistas).

**2.	Revisión:** Se usó la función **.str.strip()** que elimina cualquier espacio en blanco o caracteres extraños que puedan haber al inicio o al final de los nombres de las regiones, ya que habían problemas en las lecturas de los csv que se solucionaron de esta forma.

**3.	Filtración de datos:** Dado que el objetivo es analizar la distribución por regiones, se decidió eliminar el dato que representaba el total nacional para centrarnos solo en las regiones.

**4.	Combinar los Datos:** Finalmente, se combinaron los datos de oncólogos y cardiólogos por región usando la función pd.merge(), lo que permitió una visualización conjunta en los gráficos.

**5.	Categorizar:** Se usó la función **astype('category')** para convertir la columna **'Región'** en un tipo categórico. Al hacer esto, le decimos a Pandas que la columna **'Región'** contiene un conjunto limitado de valores, lo que puede hacer que los gráficos sean más eficientes y mejora la interpretación de las categorías en el gráfico, pues antes de esto no se visualizaba bien el eje X del gráfico.

**6.	Creación del gráfico:** En primera instancia se quiso utilizar los datos de la base de datos de mi compañera Angela, que contenía los valores de la población adulta mayor en Chile, pero dado a que estos se encontraban en porcentajes, no encontré una manera en que los datos en el gráfico se entendieran bien, por lo que se decidió usar sólo la cantidad de especialistas.
Para que el gráfico funcionara bien, se le dio al eje Y el valor de “Total de (especialista)” en cada gráfico, mientras que al eje X se le asignó la variable “Regiones” en ambos. En el gráfico de cardiólogos el eje Y se limitó al valor 250 y en el de oncólogos se limitó a 100, para que las barras se observaran de manera clara.
Con **color='Región** se le asignó un color diferente a cada barra según la región.

- **Visualización**

Para la visualización, se utilizó Altair en el Google colab. Se crearon dos gráficos:

•**Gráfico de Distribución de Oncólogos por Región:** Este gráfico de barras muestra la cantidad de oncólogos en cada región.

•	**Gráfico de Distribución de Cardiólogos por Región:** Similar al gráfico de oncólogos, pero con la cantidad de cardiólogos por región.

Ambos gráficos permiten observar cómo varía la disponibilidad de estos especialistas entre las regiones de Chile y compararlas fácilmente.

- **Preguntas que puede responder la visualización**


1.	¿Cómo se distribuyen los oncólogos y cardiólogos en las regiones de Chile?

2.	¿Cómo se relaciona la distribución de especialistas con la cantidad de adultos mayores en cada región?

3.	¿Existen diferencias significativas en la disponibilidad de especialistas médicos entre el norte, centro y sur de Chile?

4.	¿Qué regiones tienen la mayor y menor cantidad de oncólogos y cardiólogos?

5.	¿Cuáles son las regiones más críticas en términos de falta de especialistas médicos?

- **Observaciones**

•	Las visualizaciones fueron diseñadas para ser simples y claras, sin embargo, están ordenadas alfabéticamente y no de manera geográfica, lo que podría generar confusiones ya que muchas visualizaciones sobre datos regionales están ordenadas geográficamente. Se intentó mantener ese orden pero no funcionó, para una próxima visualización es algo a mejorar para que la información sea entregada más eficazmente.

•	Debido a la naturaleza de los datos, algunos valores más pequeños pueden no ser fácilmente visibles en las visualizaciones.
