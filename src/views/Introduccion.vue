<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.mb-5  
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/1.png", data-aos="zoom-in")          
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/2.svg")
            .col-lg
              p.mb-0 En los entornos virtuales de aprendizaje, la evaluación adquiere un papel estratégico no solo como mecanismo de verificación de conocimientos, sino como un proceso continuo orientado a mejorar la calidad educativa y fortalecer la experiencia formativa. Esta unidad se centra en el diseño de estrategias y herramientas digitales que permitan evaluar con rigor, retroalimentar de manera efectiva y generar aprendizajes significativos en ambientes mediados por tecnologías.

        p(data-aos="fade-down") El desarrollo de esta unidad permitirá comprender cómo la evaluación digital puede convertirse en una oportunidad para innovar, hacer seguimiento al progreso individual y grupal, y garantizar procesos más inclusivos, objetivos y transparentes. La integración de herramientas como Google Forms, Kahoot y Socrative, así como el análisis de datos de aprendizaje, brindará fundamentos prácticos y transferibles a contextos educativos reales.                
             
    .bg-full-width.bg-h85
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0.text-white.mt-5 La unidad está organizada en cuatro bloques temáticos: tipos y enfoques de evaluación digital; diseño de instrumentos de evaluación; uso de herramientas y analítica del aprendizaje, y seguridad digital en el contexto evaluativo. A través de actividades prácticas, análisis de casos y diseño de propuestas evaluativas, se propiciará el aprendizaje activo y reflexivo.            
              .col-lg-auto(data-aos="zoom-in")
                img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0            



</template>
