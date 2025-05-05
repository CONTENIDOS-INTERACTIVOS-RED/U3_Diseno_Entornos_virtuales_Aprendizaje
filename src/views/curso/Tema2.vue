<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diseño y aplicación de instrumentos digitales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.align-items-center.mb-5
      .col-lg
        .bg-color-2.p-4(data-aos="fade-left")      
          p.mb-0(data-aos="fade-down") En entornos virtuales de educación superior, las rúbricas y los instrumentos en línea, se han convertido en herramientas indispensables para una evaluación efectiva, transparente y centrada en las competencias. Las rúbricas permiten valorar el desempeño del estudiante mediante criterios claros y niveles de logro definidos, lo que mejora tanto la objetividad como la retroalimentación del proceso evaluativo.       
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/27.png")

    h3(data-aos="fade-down") Diseño de rúbricas en línea
    p(data-aos="fade-down") El diseño de una rúbrica digital debe comenzar con la definición precisa de los criterios de evaluación y la descripción detallada de los niveles de desempeño. Las rúbricas pueden ser:     

    .row.mb-5       
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-4.j1.h-100(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/28.png")
            .col-lg
              h5 Holísticas
              p.mb-0 Proporcionan una valoración global del desempeño.    

      .col-lg-6
        .bg-color-10.p-4.mb-4.j1.h-100(data-aos="fade-right")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/28.png")
            .col-lg
              h5 Analíticas
              p.mb-0 Desglosan el desempeño en varios criterios específicos.                      


    p(data-aos="fade-down") La elección entre una y otra, dependerá del tipo de actividad y del nivel de detalle deseado.

    h3(data-aos="fade-down") Ventajas de las rúbricas en entornos virtuales

    p(data-aos="fade-down") Las rúbricas en línea, ofrecen múltiples beneficios:

    .bg-full-width-1.bg-fondo-2.mb-5.py-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-stretch.text-center
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/29.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Retroalimentación inmediata y específica 
                p.mb-0 Lo cual potencia la autoevaluación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/30.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Transparencia y claridad
                p.mb-0 Los estudiantes conocen de antemano los criterios de evaluación.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/31.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Motivación
                p.mb-0 Al saber qué se espera de ellos, los estudiantes participan con mayor compromiso.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.br-1
              img.custom-image-card__image(src="@/assets/curso/temas/32.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Facilidad de integración
                p.mb-0 Pueden aplicarse fácilmente en plataformas virtuales.
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in")      
      .col-lg-8
        h3(data-aos="fade-down") Herramientas digitales para crear rúbricas
        p(data-aos="fade-down") Diversas plataformas permiten diseñar, compartir y aplicar rúbricas en línea, de manera sencilla y efectiva. Algunas de las más utilizadas son:
        .bg-color-8.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Moodle.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Google Classroom.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Canvas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Herramientas específicas como Rubistar, CoRubrics, iRubric o Quick Rubric.
        .bg-color-9.p-4.mb-3(data-aos="fade-left")                      
          p.mb-0 Estas herramientas permiten diseñar rúbricas personalizadas, exportarlas y vincularlas directamente a tareas o foros, dentro de un curso. 

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        h3 Ejemplo 1 
        p.mb-0 #[b Objetivo de aprendizaje.] Analizar críticamente teorías del aprendizaje en entornos digitales y argumentar con base teórica, en un foro asincrónico. 


    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Rúbrica para evaluar un foro académico virtual

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Criterio
            th Excelente (4)
            th Bueno (3)
            th Aceptable (2)
            th Insuficiente (1)
        tbody
          tr
            td.text-bold Claridad en la argumentación. 
            td Argumenta con profundidad y coherencia.                              
            td Presenta ideas claras con apoyo parcial.                              
            td Argumentos vagos o poco estructurados.                              
            td No presenta argumentos claros.  

          tr
            td.text-bold Uso de referencias académicas.
            td Usa más de 2 fuentes actualizadas y pertinentes.                              
            td Usa hasta 2 fuentes pertinentes.                              
            td Usa solo una fuente o no es pertinente.                               
            td No se evidencian referencias.    

          tr
            td.text-bold Interacción con compañeros.
            td Responde con calidad y fomenta el diálogo.                              
            td Interactúa, pero de forma superficial.                              
            td Interactúa mínimamente.                              
            td No interactúa.    

          tr
            td.text-bold Redacción y ortografía. 
            td Sin errores.                               
            td Mínimos errores.                              
            td Errores frecuentes.                              
            td Dificulta la comprensión.                                                                  
    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        h3 Ejemplo 1 
        p.mb-0 #[b Objetivo de aprendizaje.] Diseñar un recurso educativo, digital, interactivo, que facilite el aprendizaje significativo en un entorno virtual.              

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Rúbrica para evaluar un recurso educativo digital (Genially o H5P)

    .tabla-a-1(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Criterio
            th Excelente (4)
            th Bueno (3)
            th Aceptable (2)
            th Insuficiente (1)
        tbody
          tr
            td.text-bold Diseño instruccional.
            td Contiene objetivos y una estructura clara y lógica.                            
            td Estructura comprensible con mínimos ajustes.                               
            td Presenta organización parcial.                              
            td Falta coherencia en la estructura. 

          tr
            td.text-bold Interactividad.
            td Incluye recursos interactivos diversos y funcionales.                               
            td Incluye algunos elementos interactivos.                               
            td Uso limitado de interactividad.                               
            td No incluye interactividad.   

          tr
            td.text-bold Accesibilidad e inclusión.
            td Usa colores, fuentes y formatos accesibles; incluye ayudas.                              
            td Accesible, en su mayoría.                              
            td Tiene limitaciones de accesibilidad.                              
            td No cumple con criterios básicos.   

          tr
            td.text-bold Aplicación pedagógica.
            td Vinculado claramente con el objetivo y el nivel del curso.                              
            td Relación parcial con el objetivo.                              
            td Se desvía del objetivo de aprendizaje.                              
            td No tiene relación con el objetivo. 

    .bg-color-5.p-4.mb-5(data-aos="fade-right")                      
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/34.svg")
        .col-lg
          p.mb-0.text-white Ambas rúbricas pueden integrarse fácilmente a plataformas digitales y ser utilizadas para realizar evaluaciones automatizadas, formativas o sumativas, según el contexto del curso. 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Pruebas digitales automatizadas y recursos de evaluación multimedia

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En la educación superior, el uso de pruebas digitales automatizadas y recursos multimedia, ha transformado los procesos evaluativos, permitiendo métodos más dinámicos, personalizados y eficientes. Estas herramientas contribuyen a evaluar, tanto conocimientos como competencias, de forma flexible y adaptada al entorno virtual.                          
        h3(data-aos="fade-down") Pruebas digitales automatizadas
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Las pruebas digitales automatizadas permiten la generación, aplicación y corrección inmediata de exámenes, lo que reduce la carga docente y proporciona retroalimentación instantánea, al estudiante. Además, pueden adaptarse al nivel de competencia del usuario, facilitando una evaluación más precisa.  
        p(data-aos="fade-down") Según Tirado, Backhoff y Larrazolo (2016), estas herramientas marcan una nueva era en la evaluación educativa, abriendo posibilidades que antes eran impensables.                       

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/35.png", data-aos="zoom-in") 

    .bg-full-width-1.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.mb-5  
          .col-lg-3.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/36.png", data-aos="zoom-in")          
          .col-lg-9
            h3(data-aos="fade-down") Recursos de evaluación multimedia                          

            .bg-color-2.mb-4(data-aos="fade-left")
              .row.align-items-end.px-4
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/37.svg")
                .col-lg
                  .p-4
                    p.mb-0 La incorporación de videos, audios, simulaciones y entornos interactivos, permite evaluar competencias prácticas en contextos realistas. Estos recursos favorecen una comprensión más profunda del contenido y promueven la aplicación de conocimientos en situaciones auténticas.

            h3(data-aos="fade-down") Consideraciones para su implementación        

            p(data-aos="fade-down") Es esencial asegurar la validez y confiabilidad de los instrumentos digitales, así como la equidad en el acceso a las tecnologías. También se requiere formación docente en el uso pedagógico de estas herramientas y atención a la privacidad de los datos estudiantiles.

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 3. 
      span Comparación: pruebas automatizadas vs. recursos multimedia

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Aspecto
            th Pruebas digitales automatizadas
            th Recursos de evaluación multimedia
        tbody
          tr
            td.text-bold Propósito.
            td Medir conocimientos de forma objetiva y rápida      
            td Evaluar competencias prácticas y teóricas en contextos reales o simulados 

          tr
            td.text-bold Formato.
            td Preguntas cerradas, opción múltiple, verdadero/falso, etc.      
            td Videos, simulaciones, audios, juegos, realidad aumentada.  

          tr
            td.text-bold Corrección.
            td Automática, inmediata.      
            td Requiere observación o rúbricas para evaluación contextualizada.  

          tr
            td.text-bold Ventajas.
            td Ahorro de tiempo, retroalimentación rápida, adaptabilidad     
            td Realismo, motivación, evaluación de habilidades complejas   

          tr
            td.text-bold Desafíos.
            td Riesgos de superficialidad o memorización       
            td Requiere mayor planificación y recursos técnicos  

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estrategias para la retroalimentación formativa en plataformas virtuales

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") La retroalimentación formativa es un componente clave en entornos virtuales, puesto que proporciona al estudiante información constante sobre su desempeño. Esta retroalimentación permite detectar errores, consolidar aprendizajes y mejorar procesos mientras la enseñanza está en curso, a diferencia de la evaluación sumativa que ocurre al finalizar.       

        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/38.svg")
            .col-lg
              p.mb-0 En contextos en línea, donde el docente y el estudiante no comparten un espacio físico, el feedback eficaz fortalece el vínculo pedagógico, mantiene la motivación y contribuye a un aprendizaje profundo y autónomo.
        h3(data-aos="fade-down") Estrategias efectivas de retroalimentación formativa         
        p(data-aos="fade-down") A continuación, se presentan las estrategias más relevantes para implementar una retroalimentación formativa eficaz en entornos digitales:           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", data-aos="zoom-in")  

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/40.png", alt="", data-aos="zoom-in")     
      .col-lg-8
        LineaTiempoD.color-secundario.large(data-aos="fade-left")
          p(numero="1" titulo="Retroalimentación inmediata y específica") Comentarios entregados poco después de una actividad; ayudan a corregir errores y fortalecer conceptos.
          p(numero="2" titulo="Uso de herramientas interactivas") Gamificación, encuestas o ejercicios autocorregidos permiten recibir retroalimentación continua y detectar debilidades.
          p(numero="3" titulo="Retroalimentación entre pares") Promueve pensamiento crítico y colaboración. Al revisar trabajos ajenos, los estudiantes reflexionan sobre sus propios procesos.
          p(numero="4" titulo="Retroalimentación personalizada") Comentarios adaptados al perfil del estudiante; las rúbricas y el #[i feedforward] fortalecen la mejora progresiva.
          p(numero="5" titulo="Retroalimentación dialógica") Se promueve un diálogo entre docente y estudiante mediante preguntas orientadoras que estimulan la metacognición.

    h3(data-aos="fade-left") Ejemplo práctico: proyecto integrador en entorno virtual
    p(data-aos="fade-left").mb-5 Un curso de posgrado en línea propone un proyecto de innovación educativa. La retroalimentación formativa se implementa en tres niveles:

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Foro de discusión semanal
              p Los estudiantes comparten avances y reciben comentarios del docente y sus pares, promoviendo el diálogo académico.       
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/41.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Entregas iterativas con rúbrica
              p Se establecen hitos evaluativos. El docente proporciona feedback personalizado utilizando rúbricas, permitiendo la mejora progresiva de los trabajos.      
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/42.png")   
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Cuestionarios de autoevaluación
              p Al finalizar cada módulo, los estudiantes completan cuestionarios autocorregibles con retroalimentación instantánea y recursos de repaso.      
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/43.png")

    .bg-full-width.bg-color-11.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        p.mb-0 Este enfoque integral, permite una retroalimentación constante, diversa y centrada en el estudiante, fortaleciendo el proceso de aprendizaje autónomo. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in")      
      .col-lg-8
        h3(data-aos="fade-down") Importancia de la retroalimentación formativa en entornos virtuales
        p(data-aos="fade-down") La retroalimentación continua guía el aprendizaje, refuerza la motivación y asegura que el estudiante cumpla con sus objetivos formativos. Su implementación eficaz mejora la calidad del curso, favorece la autogestión y fortalece el compromiso del estudiante, con su proceso educativo.
        .bg-color-8.p-4(data-aos="fade-left")
          h3 Estrategias formativas efectivas en plataformas virtuales

          p.mb-0 A continuación, se exploran algunas estrategias formativas que han demostrado ser especialmente efectivas en plataformas virtuales.                          


    .row.justify-content-center.align-items-center.bg-color-10.p-4(data-aos="fade-left").mb-5
      .col-lg-4.p-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-left").mb-4 A continuación, se aborda cómo el estado emocional de los estudiantes influye directamente en su capacidad para concentrarse y aprender.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Estrategias formativas efectivas en plataformas virtuales"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )

    h3(data-aos="fade-down") Consideraciones claves para una retroalimentación efectiva     
    p(data-aos="fade-down") Para que estas estrategias se apliquen de forma exitosa, es esencial considerar los siguientes aspectos:
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center       
          .col-lg-8.mb-3.mb-lg-0
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Adaptación al contexto:] la estrategia debe ajustarse al nivel educativo, los contenidos y las características del grupo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Tono respetuoso y motivador:] evitar tecnicismos innecesarios y usar un lenguaje claro, constructivo y empático.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 #[b Enfoque orientador:] el objetivo no es solo señalar errores, sino proporcionar caminos de mejora y fomentar la autoconfianza del estudiante.
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/46.png', alt='') 

    h3(data-aos="fade-down") Ejemplo práctico de aplicación en un curso virtual  
    p(data-aos="fade-down") A continuación, se describe un ejemplo de implementación integrada de estrategias de retroalimentación en un curso de posgrado:

    p(data-aos="fade-down") #[b Escenario.] Un curso virtual de posgrado incluye un proyecto integrador dividido en entregas parciales durante el semestre.  

    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", alt="", data-aos="zoom-in")     
      .col-lg-8
        LineaTiempoD.color-secundario.large(data-aos="fade-left")
          p(numero="1" titulo="Foro de discusión semanal") Cada estudiante publica avances de su proyecto. El docente brinda retroalimentación inmediata y específica, mientras que los compañeros comentan entre pares, usando rúbricas orientativas.
          p(numero="2" titulo="Entregas iterativas con revisión personalizada") Los borradores se evalúan con rúbricas detalladas, y el docente entrega comentarios individualizados. Los estudiantes luego mejoran su trabajo a partir del feedback recibido (feedforward).
          p(numero="3" titulo="Cuestionarios de autoevaluación con retroalimentación automatizada") Al final de cada módulo temático, los estudiantes completan cuestionarios no calificativos que explican las respuestas correctas e incorrectas, promoviendo la autogestión del aprendizaje.
          p(numero="4" titulo="Entrega final del proyecto") Se incorporan todas las mejoras basadas en las retroalimentaciones previas, consolidando el aprendizaje progresivo.           
              
    p(data-aos="fade-down") Este enfoque integrado garantiza una #[b retroalimentación constante, personalizada] y multifuente (docente, pares, plataforma), generando un entorno de aprendizaje motivador, autorregulado y significativo.   

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Aplicadas tácticamente, estas estrategias de retroalimentación formativa en plataformas virtuales, no solo mejoran el desempeño académico, sino que también desarrollan habilidades blandas claves como la comunicación, la reflexión crítica y la autonomía. Así, se promueve una formación más humana, cercana y efectiva, incluso a distancia.   
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')           

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/49.png', alt='')           
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Herramientas y analítica para la mejora continua
            p.mb-4(data-aos="fade-right") Herramientas y analítica para la mejora continua, donde se aborda el papel de la analítica del aprendizaje y el uso de herramientas digitales para fortalecer la calidad educativa. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.docx')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas y analítica para la mejora continua

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>                

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/5343/534367764009/html/" target="_blank" rel="noopener noreferrer") Contreras-Germán, J., Piedrahita-Ospina, A. & Ramírez-Velásquez, I. (2019). Competencias digitales, desarrollo y validación de un instrumento para su valoración en el contexto colombiano. Trilogía Ciencia Tecnología Sociedad, 11(20), 205-232.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.5944/ried.24.2.29107 " target="_blank" rel="noopener noreferrer") Espasa-Roca, A. & Guasch-Pascual, T. (2021). ¿Cómo implicar a los estudiantes para que utilicen el feedback online? RIED. Revista Iberoamericana de Educación a Distancia, 24(2), 127–148. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.5281/zenodo.12549650" target="_blank" rel="noopener noreferrer") Imaicela Vega, R. E., Conza Chuquirima, J. H., Conza Chuquirima, M. E., Jiménez Chuquimarca, K. de la N., Cango Alejandro, M. C. & Vega Lanchi, M. M. (2025). Estrategias de retroalimentación formativa para potenciar el desempeño escolar. REVISTA INVECOM, 5(1). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.54808/CICIC2024.01.36" target="_blank" rel="noopener noreferrer") Tippe-Marmolejo, S. D., Ramos-Neyra, M. F., Bardales-Aguirre, L. B., Munive-Pérez, E. M. & Dionicio-Quesñay, G. V. (2024). Perspectivas acerca de la retroalimentación en entornos virtuales universitarios: Una revisión sistemática de la literatura en Hispanoamérica (2017–2022). Memorias de la Décima Cuarta Conferencia Iberoamericana de Complejidad, Informática y Cibernética: CICIC 2024, 36-42.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.1016/j.edumed.2020.01.004" target="_blank" rel="noopener noreferrer") Fernández-Vega, I., Santos-Juanes Jiménez, J. & Quirós, L. M. (2020). Uso de la app Kahoot para cuantificar el grado de atención del alumno en la asignatura de Anatomía Patológica en Medicina y evaluación de la experiencia. Educación Médica, 22(5), 3755–379. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=384569922009" target="_blank" rel="noopener noreferrer") Moreno Ruiz, M. O., Ramírez Romero, J. L. & Vera Noriega, J. A. (2022). Conocimientos tecnológicos-pedagógicos y uso de tecnologías digitales en la enseñanza remota de emergencia por docentes universitarios. Espacios en blanco. Serie indagaciones, 2(32), 125-134. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.47606/acven/ph0225" target="_blank" rel="noopener noreferrer") Solano Maza, L. O., Farías Gonsález, M. J., Fernández Pereira, M. D., & Porras Fernández, M. I. (2024). Uso de herramientas y tecnologías emergentes en la enseñanza de la educación superior. Prohominum. Revista de Ciencias Sociales y Humanas, 6(1), 55–70.    

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://edu-labs.co/articulos/evaluacion-formativa-en-entornos-virtuales/" target="_blank" rel="noopener noreferrer") Edu Labs. (2024). Evaluación formativa en entornos virtuales [entrada de blog]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.14483/23448350.17547" target="_blank" rel="noopener noreferrer") Contreras-Bravo, L. E., Tarazona-Bermúdez, G. M., & Rodríguez-Molano, J. I. (2021). Tecnología y analítica del aprendizaje: una revisión a la literatura. Revista Científica, 41(2), 150–168. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=aLBrihGmOAU" target="_blank" rel="noopener noreferrer") Universidad Continental (2020). Diseño gráfico para los negocios. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=SOt1JZ1uV3s" target="_blank" rel="noopener noreferrer") DESDE LA U-CANAL UCR. (2022). Mundo TICS: Reutilización de entornos virtuales.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
