const fakeData = [
  {
    id: 1,
    title: "Introducción a React",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Aprende los conceptos básicos de React en este video tutorial.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=1",
    duration: "10:00",
  },
  {
    id: 2,
    title: "El Futuro de JavaScript",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Explora las tendencias emergentes en el mundo de JavaScript.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=2",
    duration: "12:30",
  },
  {
    id: 3,
    title: "Cómo Usar Git en Proyectos Colaborativos",
    type: "article",
    content: `Git es una herramienta fundamental para el control de versiones en proyectos colaborativos. En su núcleo, Git permite a los desarrolladores hacer un seguimiento de los cambios en el código fuente, lo que facilita la colaboración en proyectos grandes. 

    La principal ventaja de usar Git es su capacidad para mantener un historial detallado de todos los cambios realizados. Cada vez que un desarrollador realiza un cambio en el código, Git lo registra, lo que permite ver qué cambios se realizaron, cuándo y por quién. Esto es particularmente útil cuando se trabaja en equipos grandes y se requiere un seguimiento claro de las modificaciones realizadas en el código.

    Git también permite crear ramas, lo que facilita el trabajo paralelo en diferentes características o correcciones sin interferir con el código principal. Las ramas permiten a los desarrolladores realizar cambios sin afectar el código principal hasta que estos cambios sean aprobados y fusionados con la rama principal.

    Además de la gestión de cambios, Git permite a los desarrolladores revertir cambios. Si un cambio en el código causa un error o no funciona como se esperaba, es fácil volver a una versión anterior del código que funcionaba correctamente.

    Por estas razones, Git se ha convertido en una herramienta imprescindible en el desarrollo de software moderno, especialmente cuando se trabaja en equipos grandes o cuando se requiere un control riguroso de las versiones.

    Ventajas de usar Git en proyectos colaborativos:
    - Control de versiones: Git permite gestionar y seguir de cerca todas las versiones de un proyecto.
    - Trabajo en equipo: Los desarrolladores pueden trabajar en paralelo en diferentes partes del proyecto sin interferencias.
    - Fusión eficiente: Git facilita la integración de cambios realizados por diferentes desarrolladores en un solo proyecto.
    - Deshacer cambios: Si algo sale mal, Git permite revertir fácilmente a una versión anterior sin perder el trabajo realizado.

    Cómo empezar con Git:
    Para empezar a usar Git en tu proyecto, primero necesitas instalarlo en tu sistema. Una vez instalado, puedes inicializar un repositorio Git en tu proyecto mediante el comando "git init". Luego, puedes comenzar a realizar cambios, hacer commits para guardar esos cambios y usar ramas para organizar el flujo de trabajo.

    Para colaborar con otros desarrolladores, puedes usar un servicio de alojamiento de repositorios como GitHub, GitLab o Bitbucket, que facilita la gestión de repositorios remotos y la colaboración en línea.

    En resumen, Git es una herramienta poderosa y esencial para el control de versiones y la colaboración en proyectos de desarrollo de software. Ya sea que trabajes en un proyecto personal o en un equipo grande, aprender a usar Git te permitirá gestionar tu código de manera más eficiente y sin riesgos.`,
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=3",
  },
  {
    id: 4,
    title: "Entendiendo el DOM",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "En este video, entenderás cómo funciona el DOM y cómo interactuar con él.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=4",
    duration: "15:20",
  },
  {
    id: 5,
    title: "Accesibilidad en la Web",
    type: "podcast",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    description: "Un podcast sobre la importancia de hacer las aplicaciones web accesibles.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=5",
  },
  {
    id: 6,
    title: "API de Fetch en JavaScript",
    type: "article",
    content: `La API Fetch es una de las formas más modernas de hacer solicitudes HTTP en JavaScript. A diferencia de su predecesor, XMLHttpRequest, Fetch es más sencilla de usar, más poderosa y compatible con Promesas, lo que permite escribir un código más limpio y fácil de entender.

    Cómo funciona Fetch:
    Fetch es un método que se utiliza para realizar solicitudes de red y obtener datos de un servidor. El método devuelve una Promesa, lo que significa que se puede usar con "then" y "catch" para manejar la respuesta o cualquier error que ocurra.

    Un ejemplo simple de una solicitud Fetch para obtener datos de una API sería el siguiente:

    Realizando la solicitud HTTP:
    La API Fetch permite realizar solicitudes GET y POST, entre otras. Puedes utilizarla para obtener datos de un servidor remoto o enviar datos a un servidor.

    Manejo de errores con Fetch:
    Aunque Fetch es muy útil, no maneja automáticamente los errores de HTTP. Esto significa que una respuesta con un código de error como 404 o 500 no será rechazada de inmediato. En su lugar, deberás comprobar manualmente si la respuesta es exitosa utilizando la propiedad "response.ok".

    Ventajas de la API Fetch:
    - Sintaxis moderna y simple basada en Promesas.
    - Mayor compatibilidad con JavaScript moderno.
    - Soporte integrado para manejar errores.
    - Soporte completo para solicitudes asincrónicas y APIs RESTful.

    Conclusión:
    La API Fetch es una excelente opción para hacer solicitudes HTTP en JavaScript, y con el tiempo ha reemplazado a XMLHttpRequest debido a su simplicidad y facilidad de uso. A medida que sigas desarrollando aplicaciones, aprender a usar Fetch será una habilidad esencial para interactuar con datos remotos y APIs.`,
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=6",
  },
  {
    id: 7,
    title: "Prácticas de Seguridad en Desarrollo Web",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "En este video, aprenderás sobre las mejores prácticas de seguridad al desarrollar aplicaciones web.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=7",
    duration: "20:00",
  },
  {
    id: 8,
    title: "Desarrollando con Node.js",
    type: "podcast",
    thumbnail: "https://source.unsplash.com/150x150/?react,technology",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    description: "Un podcast sobre las mejores prácticas y herramientas al trabajar con Node.js.",
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=8",
  },
  {
    id: 9,
    title: "API de Fetch en TypeScript",
    type: "article",
    content: `La API Fetch es una de las formas más modernas de hacer solicitudes HTTP en JavaScript. A diferencia de su predecesor, XMLHttpRequest, Fetch es más sencilla de usar, más poderosa y compatible con Promesas, lo que permite escribir un código más limpio y fácil de entender.

    Cómo funciona Fetch:
    Fetch es un método que se utiliza para realizar solicitudes de red y obtener datos de un servidor. El método devuelve una Promesa, lo que significa que se puede usar con "then" y "catch" para manejar la respuesta o cualquier error que ocurra.

    Un ejemplo simple de una solicitud Fetch para obtener datos de una API sería el siguiente:

    Realizando la solicitud HTTP:
    La API Fetch permite realizar solicitudes GET y POST, entre otras. Puedes utilizarla para obtener datos de un servidor remoto o enviar datos a un servidor.

    Manejo de errores con Fetch:
    Aunque Fetch es muy útil, no maneja automáticamente los errores de HTTP. Esto significa que una respuesta con un código de error como 404 o 500 no será rechazada de inmediato. En su lugar, deberás comprobar manualmente si la respuesta es exitosa utilizando la propiedad "response.ok".

    Ventajas de la API Fetch:
    - Sintaxis moderna y simple basada en Promesas.
    - Mayor compatibilidad con JavaScript moderno.
    - Soporte integrado para manejar errores.
    - Soporte completo para solicitudes asincrónicas y APIs RESTful.

    Conclusión:
    La API Fetch es una excelente opción para hacer solicitudes HTTP en JavaScript, y con el tiempo ha reemplazado a XMLHttpRequest debido a su simplicidad y facilidad de uso. A medida que sigas desarrollando aplicaciones, aprender a usar Fetch será una habilidad esencial para interactuar con datos remotos y APIs.`,
    thumbnail: "https://cataas.com/cat?width=150&height=150&id=9",
  },
  {
    id: 10,
    title: "Entendiendo el DOM",
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "En este video, entenderás cómo funciona el DOM y cómo interactuar con él.",
    thumbnail: "https://cataas.com/cat?width=150&height=150",
    duration: "15:20",
  },
];

export default fakeData;
