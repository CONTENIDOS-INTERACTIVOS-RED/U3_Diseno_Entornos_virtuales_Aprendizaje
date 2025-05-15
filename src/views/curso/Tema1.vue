<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de la evaluación digital'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.order-lg-2
          .p-4
            p.mb-0(data-aos="fade-up") La evolución de las tecnologías de la información y la comunicación, ha transformado profundamente los procesos educativos, especialmente en el ámbito de la evaluación. #[b La evaluación digital] se refiere al uso de herramientas y plataformas tecnológicas para medir y mejorar el aprendizaje, permitiendo una retroalimentación más inmediata y personalizada (Hinojosa Núñez, 2023). Este enfoque facilita la gestión y análisis de datos, promueve la autonomía y la autorregulación del estudiante en entornos virtuales, y contribuye al desarrollo de un aprendizaje más significativo. 
        .col-lg-auto.mb-3.mb-lg-0.order-lg-1
          figure
            img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='') 


    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Diversos estudios subrayan la importancia de adoptar estrategias de evaluación que vayan más allá de la simple calificación, enfocándose en el desarrollo de competencias y habilidades críticas. Por ejemplo, los portafolios digitales permiten al estudiante reflexionar sobre su propio aprendizaje y evidenciar su progreso a lo largo del tiempo (Wikipedia, 2023). Asimismo, modelos como el RAT (Reemplazo, Ampliación y Transformación), ofrecen un marco útil para analizar cómo la tecnología impacta las prácticas pedagógicas y los resultados de aprendizaje (Wikipedia, 2023).         

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/5.svg")
            .col-lg
              p.mb-0 No obstante, la implementación de la evaluación digital implica desafíos importantes: asegurar la validez y confiabilidad de las herramientas utilizadas, así como garantizar la formación docente en competencias digitales para su adecuada aplicación (Pérez Escoda & Rodríguez Conde, 2014). Además, se deben considerar aspectos éticos como la privacidad y seguridad de los datos estudiantiles.
        p(data-aos="fade-down") Comprender estos fundamentos es crucial para diseñar estrategias de evaluación que no solo midan el aprendizaje, sino que también lo potencien, adaptándose a las características de los estudiantes en entornos virtuales. La integración efectiva de tecnologías, requiere una planificación cuidadosa y una reflexión continua sobre las prácticas pedagógicas, con el fin de mejorar la calidad educativa y fomentar un aprendizaje duradero.             
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/6.png", data-aos="zoom-in")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Enfoques y tipos de evaluación en entornos virtuales

    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5 
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/7.png", data-aos="zoom-in")                   
          .col-lg-8
            .bg-color-7.mb-4(data-aos="fade-left")
              .row.align-items-end.px-4
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/8.svg")
                .col-lg
                  .p-4
                    p.mb-0 En los entornos virtuales de aprendizaje (EVA), la evaluación asume nuevas dimensiones que responden a las particularidades del contexto digital. Más allá de medir resultados, cumple una función orientadora que mejora el proceso formativo, al adaptarse a las necesidades del estudiante.
            h3(data-aos="fade-down") Enfoques de evaluación en EVA       
            p(data-aos="fade-down") En los EVA, los enfoques de evaluación determinan cómo se estructura la retroalimentación y el seguimiento del aprendizaje. A continuación, se describen los tres enfoques principales que orientan la evaluación en los entornos digitales:          
 
        div.row.justify-content-center.align-items-stretch.text-center
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
                img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/9.svg" alt="" style="width: 90px")
                h5 Evaluación formativa
                p.mb-0 Proporciona retroalimentación continua durante el proceso de aprendizaje. Promueve la autorregulación y la autonomía.

            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
                img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/10.svg" alt="" style="width: 90px")
                h5 Evaluación sumativa 
                p.mb-0 Se realiza al final del período formativo para determinar logros. Puede incluir proyectos, presentaciones o portafolios.

            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
                img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/11.svg" alt="" style="width: 90px")
                h5 Evaluación diagnóstica
                p.mb-0 Se aplica al inicio para saber sobre los conocimientos previos y ajustar contenidos y estrategias pedagógicas.

    h3(data-aos="fade-down") Tipos de evaluación en EVA 
    p(data-aos="fade-down") Además de los enfoques, en los entornos virtuales, se pueden implementar diferentes tipos de evaluación que diversifican la forma en que se valoran los aprendizajes y fomentan la participación activa del estudiante:

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-6.border.px-4.p-md-5.py-3(titulo="Autoevaluación" :icon="require('@/assets/bullets/icon.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Autoevaluación
            p Fomenta la reflexión sobre el aprendizaje propio y la responsabilidad personal del estudiante.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')   

      .bg-color-6.border.px-4.p-md-5.py-3(titulo="Coevaluación" :icon="require('@/assets/bullets/icon.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Coevaluación
            p Los estudiantes evalúan a sus pares, promoviendo el pensamiento crítico y el aprendizaje colaborativo.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='') 

      .bg-color-6.border.px-4.p-md-5.py-3(titulo="Heteroevaluación" :icon="require('@/assets/bullets/icon.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Heteroevaluación 
            p El docente evalúa el desempeño del estudiante, con base en criterios definidos previamente.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')                                                  

    h3(data-aos="fade-down") Herramientas digitales para la evaluación en EVA
    p(data-aos="fade-down") La tecnología ofrece un amplio abanico de herramientas que permiten aplicar de manera eficiente, los diferentes enfoques y tipos de evaluación. Estas herramientas facilitan la personalización del proceso, el seguimiento continuo y la integración de múltiples formas de evidencias de aprendizaje: 

    .bg-full-width.bg-color-info(data-aos="fade-right")
      .p-4.p-md-5.pb-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/15.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="20.5%" y="58.4%" numero="+")
                  h5 Videoconferencias 
                  p Facilitan presentaciones orales o defensas de proyectos, evaluando habilidades comunicativas y dominio del contenido. 

                .bg-color-white.box-shadow.p-3(x="23.7%" y="25.1%" numero="+")
                  h5 Portafolios digitales 
                  p Recogen evidencia del aprendizaje a lo largo del tiempo, favoreciendo una evaluación continua e integral.

                .bg-color-white.box-shadow.p-3(x="77.6%" y="25.1%" numero="+")
                  h5 Cuestionarios en línea
                  p Evalúan conocimientos con rapidez y ofrecen retroalimentación inmediata. 

                .bg-color-white.box-shadow.p-3(x="81.2%" y="58.4%" numero="+")
                  h5 Foros de discusión
                  p Permiten evaluar la participación, la argumentación y el pensamiento crítico.        

    .bg-full-width.bg-color-5.text-white.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/16.svg")
          .col-lg
            p.mb-0 La correcta combinación entre enfoques pedagógicos, tipos de evaluación y herramientas digitales, favorece una experiencia de aprendizaje más significativa, alineada con los desafíos y oportunidades de la educación virtual.   


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Evaluación formativa y sumativa en ambientes digitales
    .row.mb-5  
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/17.png", data-aos="zoom-in")          
      .col-lg-8
        p(data-aos="fade-down") En los entornos virtuales de enseñanza-aprendizaje, la evaluación cumple un papel fundamental al orientar y medir el progreso de los estudiantes. Las dos modalidades principales, #[b formativa y sumativa], se adaptan a las particularidades del medio digital, facilitando procesos de retroalimentación constante y certificación de los aprendizajes mediante el uso de tecnologías.                              
        h3(data-aos="fade-down") Evaluación formativa en ambientes digitales                          

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La evaluación formativa se enfoca en el seguimiento continuo del aprendizaje, brindando información relevante, tanto a docentes como a estudiantes, para ajustar las estrategias pedagógicas en tiempo real. En entornos virtuales, este tipo de evaluación se apoya en herramientas digitales como foros de discusión, cuestionarios en línea y actividades colaborativas, las cuales permiten identificar dificultades, ofrecer retroalimentación inmediata y reforzar el aprendizaje.

    p(data-aos="fade-down") Según Cisternas-Negrete (2024), la evaluación formativa apoyada en Tecnologías de la Información y la Comunicación (TIC), promueve una enseñanza centrada en el estudiante, fortaleciendo su autonomía y autorregulación.
    h3(data-aos="fade-down") Evaluación sumativa en ambientes digitales

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La evaluación sumativa, por su parte, se realiza al final de un período o unidad de aprendizaje, con el fin de certificar el logro de los aprendizajes esperados. En contextos virtuales, puede implementarse mediante exámenes en línea, proyectos finales o portafolios digitales que evidencian las competencias desarrolladas por el estudiante.      
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')         
            
    h3(data-aos="fade-down") Para asegurar la validez de los resultados, es indispensable diseñar estas evaluaciones considerando elementos como la autenticidad de las tareas, la seguridad de la plataforma y la adaptabilidad a las necesidades del estudiantado.  

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")            
      .col-lg-8 
        h3(data-aos="fade-down") Integración de ambas modalidades    

        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              p.mb-0 La combinación de evaluaciones formativas y sumativas en entornos digitales, permite una visión integral del proceso educativo. Mientras la formativa guía el aprendizaje en desarrollo, la sumativa verifica su consolidación. Para lograr una implementación efectiva, es necesario planificar cuidadosamente el uso de las TIC y promover la integración de distintas formas de evaluación: heteroevaluación, coevaluación y autoevaluación.

        p(data-aos="fade-down") Además, se debe considerar tanto información cuantitativa como cualitativa, garantizando una evaluación continua, contextualizada y centrada en el estudiante. Esta integración aporta valor al proceso formativo, mejora la toma de decisiones docentes y fortalece el aprendizaje significativo.   

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicio práctico aplicado: evaluación formativa y sumativa en un entorno virtual
            p.mb-4(data-aos="fade-right") Ejercicio práctico aplicado: evaluación formativa y sumativa en un entorno virtual, donde se aborda una propuesta concreta para integrar estrategias evaluativas dentro de un módulo en línea.  
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicio práctico aplicado: evaluación formativa y sumativa en un entorno virtual
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/20.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Criterios de alineación entre objetivos, actividades e instrumentos evaluativos 

    .row.align-items-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/22.svg")
      .col-lg
        p(data-aos="fade-down") En el diseño de entornos virtuales de aprendizaje, es fundamental asegurar una coherencia pedagógica entre los objetivos de aprendizaje, las actividades propuestas y los instrumentos de evaluación. Esta alineación fortalece la calidad del proceso formativo, garantiza que la evaluación sea pertinente y asegura que los aprendizajes esperados, sean efectivamente desarrollados y medidos.

        p(data-aos="fade-down") Una evaluación alineada promueve una enseñanza basada en competencias, dado que permite planificar acciones educativas centradas en lo que realmente se desea lograr con los estudiantes. 

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        h3(data-aos="fade-down") Definición de objetivos de aprendizaje          

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El primer paso para lograr esta coherencia, es la formulación clara y medible de los objetivos de aprendizaje. Estos deben describir con precisión las competencias que el estudiante debe alcanzar. Por ejemplo, si el objetivo es que el estudiante “analice críticamente teorías contemporáneas de educación virtual”, entonces tanto las actividades como las evaluaciones, deben estar orientadas al desarrollo de ese análisis crítico, no a la simple memorización.   
        h3(data-aos="fade-down") Diseño de actividades de aprendizaje

        p(data-aos="fade-down") Las actividades deben diseñarse de forma que permitan al estudiante alcanzar los objetivos propuestos, favoreciendo la interacción significativa con el contenido. En entornos virtuales, esto se traduce en la creación de #[b e-actividades], que permiten aplicar los conocimientos en contextos prácticos. 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", data-aos="zoom-in")

    .bg-full-width.bg-color-5.text-white.mb-5(data-aos="fade-up")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/23.png")
          .col-lg
            p.mb-0 Según Cabero-Almenara y Llorente-Cejudo (2013), las e-actividades son tareas que el estudiante realiza individual o colectivamente, en entornos digitales, con el propósito de lograr aprendizajes específicos. Por ello, su selección y su diseño deben estar estratégicamente vinculados a los objetivos definidos.  

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5       
          .col-lg-9.mb-3.mb-lg-0 
            h3(data-aos="fade-down") Selección de instrumentos de evaluación
            p(data-aos="fade-down") Los instrumentos deben ser pertinentes y estar directamente conectados con los objetivos y actividades. Es esencial que midan lo que se pretende alcanzar. Por ejemplo, si se busca desarrollar habilidades de análisis crítico, lo más adecuado sería utilizar estudios de caso, ensayos argumentativos o debates digitales, en lugar de pruebas objetivas.

            .bg-color-3.p-4.mb-4(data-aos="fade-left")
              p.mb-0 Guerrero-Roldán et al. (2013), destacan la necesidad de explicitar la relación entre actividades, evaluación y competencias, subrayando que la evaluación debe estar alineada con los propósitos formativos y las tareas desarrolladas.
          .col-lg-3
            figure
              img.img-a.img-t(src="@/assets/curso/temas/24.png", data-aos="zoom-in")      
            
    h3(data-aos="fade-down") La importancia de la alineación

    p(data-aos="fade-down") Cuando existe una alineación efectiva entre estos tres componentes, se fortalecen la transparencia, la equidad y la pertinencia del proceso evaluativo. El estudiante entiende qué se espera de él, cómo debe trabajar y cómo será evaluado, lo que incrementa su motivación, autonomía y compromiso. Asimismo, esta claridad permite al docente identificar con precisión, las áreas de mejora y diseñar intervenciones pedagógicas más eficaces.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/25.png', alt='')           
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Criterios de alineación entre objetivos, actividades e instrumentos evaluativos
            p.mb-4(data-aos="fade-right") Criterios de alineación entre objetivos, actividades e instrumentos evaluativos, donde se aborda la importancia de asegurar coherencia en el diseño instruccional.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Criterios de alineación entre objetivos, actividades e instrumentos evaluativos

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Portafolio_digital" target="_blank" rel="noopener noreferrer") Wikipedia. (2023). Portafolio digital. Wikipedia, la enciclopedia libre. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Modelo_RAT" target="_blank" rel="noopener noreferrer") Wikipedia. (2023). Modelo RAT. Wikipedia, la enciclopedia libre. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/3314/331466109006/html/" target="_blank" rel="noopener noreferrer") García Aretio, L. (2021). ¿Podemos fiarnos de la evaluación en los sistemas de educación a distancia y digitales? Revista Iberoamericana de Educación a Distancia, 24(2), 9-29. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/3314/331466109007/html/" target="_blank" rel="noopener noreferrer") Barberá-Gregori, E. & Suárez-Guerrero, C. (2021). Evaluación de la educación digital y digitalización de la evaluación. RIED. Revista Iberoamericana de Educación a Distancia, 24(2), 33-40.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/1942/194259585004/html/" target="_blank" rel="noopener noreferrer") Prieto Taborda, M. A., Bermón Angarita, L. & Ramírez Castañeda, L. A. (2019). Diseño, desarrollo y evaluación de un recurso educativo digital para la introducción a la Administración de Sistemas Informáticos. Revista Virtual Universidad Católica del Norte, (56), 31-51.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/abs/2302.08006" target="_blank" rel="noopener noreferrer") Jiménez-Torres, J. J. (2023). Un sistema automatizado para el adiestramiento y evaluación de estudiantes de física ante exámenes cerrados. arXiv preprint.                           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Evaluaci%C3%B3n_virtual" target="_blank" rel="noopener noreferrer") Wikipedia. (2023). Evaluación virtual. Wikipedia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=5ZA5r6B4_gE" target="_blank" rel="noopener noreferrer") Universidad Continental. (2022). Consideraciones pedagógicas en la evaluación digital.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
