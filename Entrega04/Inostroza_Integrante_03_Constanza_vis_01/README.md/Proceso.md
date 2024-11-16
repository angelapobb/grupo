# Proceso_ConstanzaInostroza
## I° Visualización
1. Para visualizar los datos en un gráfico, pocedí a instalar **Altair** a través de un notebook en Google Colab, ingresando el codigo de instalación pude proceder a subir mis archivos que continen las tablas para ser visualizadas en gráfico de barras.
2. Una vez subido los archivos, ingresé el codigo para que el programa leyera las tablas contenidas en mi documento (CSV) y las visualizara en tablas.
3. Si bien, ambas tablas visualizadas tenían una misma variable X (años), una de las tablas tenía una cantidad mucho mayor de variables, que la otra. En ese sentido, me ví en la obligación de limpiar algunos datos, con el fin de que ambos gráficos quedaran con una relación evidente entre las variables X.
4. Una vez limpiados los datos, quedó consignada la **Tabla1 'Evolución de la edad promedio en Chile'** y **Tabla2 'Evolución del porcentaje de adultos mayores de 60 años en Chile'**
5. Despés de cada tabla ingresé el codigo **chart** para crear el gráfico y mediante el uso de **mark_bar** definí que ambos fueran gráficos de barras.
6.  Una vez logrado visulizar ambos gráficos de barras, procedí a ingresar códigos nuevos en cada programación, con el fin  de darle mayor interactividad a los gráficos, por ejempolo: **Color=alt.color()** para agregarle color a las varialbes, **scale=alt.Scale(scheme='spectral')** para ingresar un espectro de colores determinado a las variables, **tooltip** para agregar el texto descriptivo sobre las áreas de cada variable presente en los gráficos.
7.  Luego, abrí el apartado de **Properties** donde ingresé las codigos para agregarle un titulo a los gráficos y determinar el tamaño y dimensiones de su visualización
8.  Una vez teniendo ambos graficos visualizados de forma interactiva, y con datos correlativos (variable x), procedí combinar ambos gráficos en forma horizontal mediante el código **combined_chart = alt.hconcat(chart1, chart2)**, finalmente ingresé el codigo  **combined_chart** para visualizarlos.

## II° Base de datos utilizada
- La base de datos escogida busca responder a dos cosas importantes:
  1. Cómo ha variado el promedio de la edad en nuestro país
  2. Cuales son los porcentajes de población de adultos mayores (+60)
- La tabla utilizada para el primer gráfico en csv **(i°)** tenía muchas variables (desde 1950 hasta 2100), mientras que la tabla utilizada para el segundo gáfico (también en csv) **(ii°)** tenía variables desde 1990 hasta 2025), por ende, la se procedió a limpiar los datos de la primera tambla, con el fin que coincidera con las variables de la segunda tabla, en terminos de rangos de año.
- **El motivo de escoger ambas bases de datos**, es lograr constrastar el aumento de el promedio etario de nuestro país, junto con un acentuado aumeto de los mayores de edad. Ambos gráficos buscan confirmar nuestra hipotesis sobre el envejecimiento de la población chilena, dónde existe un aumento continuo de las personas mayores de 60 años, mientras que la población juvenil es cada vez más escasa (visualizado mediante el promedio de la población), esto a su vez, se puede explicar con datos externos (usados por una de mis compañeras de trabajo) sobre la tasa de natalidad, que ha disminuido especialmente durante la última década (2010-2020).
- En conclusión, el análisis conjunto de ambas bases de datos permite no solo visualizar, sino también comprender con mayor profundidad la evolución del envejecimiento en Chile. **La simultaneidad entre el aumento sostenido del promedio de edad y el crecimiento del porcentaje de adultos mayores evidencia un cambio demográfico significativo**, con implicancias sociales y económicas de gran envergadura. Este fenómeno, reforzado por la disminución de la natalidad, apunta a un escenario que demanda una reconfiguración y una adaptación del país a las nuevas necesidades de una población cada vez más envejecida.

## III° Preguntas a responder
Ambos gráficos dan una clara imgran de como se está redistribuyendo etariamente la población de nuestro páis con el paso de los años.
- Las preguntas que se podrían responder mediante la visualización de los graficos son:
  1. ¿Cómo ha cambiado la edad promedio de la población chilena en las últimas décadas, y qué tan relacionado está con el aumento del porcentaje de adultos mayores?
  2. **¿Qué desafíos sociales y estatales podría enfrentar Chile al observar estas tendencias en la edad promedio y en el envejecimiento?**
  3. ¿Cómo podrían evolucionar la edad promedio y el porcentaje de adultos mayores en los próximos años si estas tendencias continúan?
    
