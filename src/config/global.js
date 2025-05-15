export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evaluación y mejora de entornos virtuales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de la evaluación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Enfoques y tipos de evaluación en entornos virtuales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación formativa y sumativa en ambientes digitales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Criterios de alineación entre objetivos, actividades e instrumentos evaluativos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño y aplicación de instrumentos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Pruebas digitales automatizadas y recursos de evaluación multimedia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estrategias para la retroalimentación formativa en plataformas virtuales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Silva Quiroz, J. (2011). Diseño y moderación de entornos virtuales de aprendizaje (EVA). Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33530 ',
    },
    {
      referencia:
        'Barrera García, A. R. (2010). Diseño didáctico de un entorno virtual de aprendizaje para la capacitación de directivos del poder popular. D - Instituto Superior Politécnico José Antonio Echeverría. CUJAE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/85861',
    },
    {
      referencia:
        'Bautista Pérez, G., Borges Sáiz, F. & Forés Miravalles, A. (2016). Didáctica universitaria en entornos virtuales de enseñanza-aprendizaje. Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46047 ',
    },
    {
      referencia:
        'Acevedo-Blanco, A. J. Díaz Perea, M. Y. & Fernández Rodríguez, J. (2024). El aprendizaje-servicio en el entorno virtual: pedagogía innovadora para la Universidad del siglo XXI. Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275427',
    },
    {
      referencia:
        'Ramírez Chirinos, L. A. (2013). Entornos virtuales de aprendizaje (EVA): aproximación al mejoramiento de la calidad comunicacional en una universidad venezolana. A - UCLA Universidad Centroccidental Lisandro Alvarado. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/14239',
    },
    {
      referencia:
        'Torres Quiñones, A. (2015). La construcción de las estrategias de aprendizaje en la formación inicial del profesional de la educación desde los entornos virtuales de aprendizaje. Editorial Universitaria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/90692',
    },
    {
      referencia:
        'Alanya Beltran, J. E. & Padilla Caballero, J. E. A. (Dir.). (2022). Estilo de aprendizaje de los estudiantes universitarios en entornos virtuales desde la mirada docente. D - Universidad César Vallejo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228698',
    },
    {
      referencia:
        'Almidón Elescano, A. & Maquera Quispe, H. G. (Dir.). (2021). Entorno virtual como soporte en el proceso de la enseñanza aprendizaje de los estudiantes de Ingeniería Electrónica de la Universidad Nacional de Huancavelica. D - Universidad Nacional del Centro del Perú. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228303',
    },
    {
      referencia:
        'Pérez Escoda, A. & Rodríguez Conde, M. J. (2019). Evaluación de las competencias digitales autopercibidas en profesores de educación primaria en Castilla y León (España). Revista de Investigación Educativa, 34(2), 399-415.',
      link: 'https://www.redalyc.org/pdf/2833/283346043008.pdf',
    },
    {
      referencia:
        'Colmenares, A. M. (2012). Los aprendizajes en entornos virtuales evaluados bajo la concepción formadora. Revista Electrónica Interuniversitaria de Formación del Profesorado, 15(1), 125–134. ',
      link: 'https://www.redalyc.org/articulo.oa?id=217024398010',
    },
    {
      referencia:
        'Guerrero-Roldán, A. E., Huertas, M. A., Mor, E. & Rodríguez, M. E. (2013). Explicitando la interrelación entre las actividades de aprendizaje, el proceso de evaluación y la adquisición de competencias. RIED. Revista Iberoamericana de Educación a Distancia, 16(2), 127–146. ',
      link: 'https://www.redalyc.org/pdf/3314/331429869006.pdf',
    },
    {
      referencia:
        'Guerrero-Roldán, A., Huertas, M. A., Mor, E. & Rodríguez, M. E. (2013). Explicitando la interrelación entre las actividades de aprendizaje, el proceso de evaluación y la adquisición de competencias. RIED-Revista Iberoamericana de Educación a Distancia, 16(2), 127-146. ',
      link: 'https://www.redalyc.org/pdf/368/36846509016.pdf',
    },
    {
      referencia:
        'Agreda Montoro, M., Hinojo Lucena, M. A, & Sola Reche, J. M. (2016). Diseño y validación de un instrumento para evaluar la competencia digital de los docentes en la educación superior española. Pixel-Bit. Revista de Medios y Educación, (49), 39-56. ',
      link: 'https://www.redalyc.org/pdf/368/36846509004.pdf',
    },
    {
      referencia:
        'Tirado, F., Backhoff, E. & Larrazolo, N. (2016). La revolución digital y la evaluación: un nuevo paradigma. Perfiles Educativos, XXXVIII(152), 182-201.',
      link: 'https://www.redalyc.org/pdf/132/13244824011.pdf',
    },
    {
      referencia:
        'Peñalosa Castro, E., (2010). Evaluación de los aprendizajes y estudio de la interactividad en entornos en línea: un modelo para la investigación. RIED-Revista Iberoamericana de Educación a Distancia, 13(1), 17-38. ',
      link: 'https://www.redalyc.org/pdf/3314/331427212002.pdf',
    },
    {
      referencia:
        'Zapata, M. (2003). Sistemas de gestión del aprendizaje – Plataformas de teleformación. RED. Revista de Educación a Distancia, (9). ',
      link: 'https://www.redalyc.org/pdf/547/54700903.pdf',
    },
    {
      referencia:
        'Granizo-Garrido, R. (2024). Educar y Practicar la Ética Digital. Revista Tecnológica-Educativa Docentes 2.0, 17(1), 79-86.',
      link: 'https://ve.scielo.org/pdf/rted/v17n1/2665-0266-rted-17-01-79.pdf',
    },
    {
      referencia:
        'Aznarte, J. L. (2020). Consideraciones éticas en torno al uso de tecnologías basadas en datos masivos en la UNED. RIED. Revista Iberoamericana de Educación a Distancia, 23(2), 237–247. ',
      link:
        'https://www.redalyc.org/jatsRepo/3314/331463171012/331463171012.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Capacidad de un entorno virtual para ser utilizado por todas las personas, incluidas aquellas con discapacidades, sin barreras tecnológicas o cognitivas.',
    },
    {
      termino: 'Analítica del aprendizaje',
      significado:
        'Proceso de recopilación, medición y análisis de datos sobre los estudiantes, para mejorar la enseñanza y el aprendizaje.',
    },
    {
      termino: 'Asincronía',
      significado:
        'Modalidad de comunicación en la que la interacción no ocurre en tiempo real, permitiendo flexibilidad temporal.',
    },
    {
      termino: 'Competencias digitales',
      significado:
        'Conjunto de habilidades necesarias para usar tecnologías de forma efectiva, en procesos educativos.',
    },
    {
      termino: 'Contenido interactivo',
      significado:
        'Material educativo que permite la participación activa del estudiante mediante acciones como clics, respuestas, o navegación personalizada.',
    },
    {
      termino: 'Didáctica digital',
      significado:
        'Disciplina que estudia y aplica métodos y estrategias de enseñanza, adaptados al entorno digital.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Tipo de evaluación que se realiza durante el proceso de aprendizaje, con el fin de retroalimentar y mejorar.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Uso de elementos propios del juego en contextos educativos, para motivar el aprendizaje.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Práctica que garantiza la participación de todos los estudiantes, sin importar sus condiciones sociales, culturales o personales.',
    },
    {
      termino: 'Instrumento de evaluación',
      significado:
        'Aplicación de elementos de juego en contextos educativos, con el fin de motivar y aumentar la participación del estudiante. ',
    },
    {
      termino: 'LMS (<i>Learning Management System</i>)',
      significado:
        'Plataforma digital que gestiona, organiza y distribuye contenidos educativos y actividades de evaluación.',
    },
    {
      termino: 'Metacognición',
      significado:
        'Capacidad del estudiante para reflexionar sobre sus propios procesos de aprendizaje.',
    },
    {
      termino: 'Moodle',
      significado:
        'Sistema de gestión de aprendizaje de código abierto, ampliamente utilizado en entornos educativos virtuales.',
    },
    {
      termino: 'Objetivos de aprendizaje',
      significado:
        'Declaraciones claras que indican lo que se espera que el estudiante logre al finalizar una unidad o curso.',
    },
    {
      termino: 'Participación activa',
      significado:
        'Grado de involucramiento del estudiante en su proceso de aprendizaje mediante actividades colaborativas o individuales.',
    },
    {
      termino: 'Plataforma educativa',
      significado:
        'Entorno digital que integra herramientas para la enseñanza, el aprendizaje, la comunicación y la evaluación.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información que se proporciona al estudiante sobre su desempeño para mejorar su aprendizaje.',
    },
    {
      termino: 'Rúbrica',
      significado:
        'Guía de evaluación que describe los criterios y niveles de desempeño para valorar una tarea o actividad.',
    },
    {
      termino: 'Sincronía',
      significado:
        'Interacción educativa que ocurre en tiempo real, como en videoconferencias o chats en vivo.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Facilidad con la que los usuarios pueden interactuar con una plataforma o recurso digital de manera efectiva y satisfactoria.',
    },
  ],
}
