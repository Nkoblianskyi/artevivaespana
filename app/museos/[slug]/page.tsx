import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Container,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import { AccessTime, LocationOn, Info, CalendarMonth } from "@mui/icons-material"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryCarousel from "@/components/gallery-carousel"

// Datos de ejemplo para los museos
const museosData = {
  prado: {
    name: "Museo del Prado",
    description:
      "El Museo Nacional del Prado, en Madrid, España, alberga una de las colecciones de pintura más importantes del mundo. Fundado en 1819, el museo cuenta con obras maestras de artistas como Velázquez, Goya, El Greco, Tiziano, Rubens y El Bosco, entre otros.",
    longDescription:
      'El Museo del Prado es la principal institución artística de España y uno de los museos más importantes del mundo. Su colección refleja los gustos artísticos de los monarcas españoles a lo largo de la historia, con especial énfasis en la pintura española, italiana y flamenca. Entre sus obras más destacadas se encuentran "Las Meninas" de Velázquez, "La familia de Carlos IV" de Goya, "El jardín de las delicias" de El Bosco y "El Descendimiento" de Van der Weyden.',
    history: `
      <p>El Museo del Prado abrió al público por primera vez en noviembre de 1819, bajo el nombre de Real Museo de Pinturas. El edificio que lo alberga, diseñado por el arquitecto Juan de Villanueva, fue construido originalmente para albergar el Gabinete de Ciencias Naturales por orden de Carlos III.</p>
      
      <p>Sin embargo, el destino del edificio cambió cuando el nieto de Carlos III, Fernando VII, animado por su esposa María Isabel de Braganza, decidió destinar el edificio a la creación de un Real Museo de Pinturas y Esculturas. El museo se inauguró con 311 pinturas de la Colección Real, todas de autores españoles.</p>
      
      <p>A lo largo de los años, el museo ha ido ampliando sus colecciones a través de adquisiciones, donaciones y legados. En 1868, tras la revolución que destronó a Isabel II, el museo pasó a ser propiedad del Estado y recibió el nombre de Museo Nacional del Prado.</p>
      
      <p>En el siglo XX, el museo experimentó importantes reformas y ampliaciones. La más reciente y significativa fue la inaugurada en 2007, obra del arquitecto Rafael Moneo, que supuso un aumento del 50% de la superficie expositiva.</p>
      
      <p>Hoy en día, el Museo del Prado alberga más de 8.000 pinturas, de las cuales se exhiben unas 1.700, así como una importante colección de esculturas, dibujos, grabados y artes decorativas.</p>
    `,
    collection: `
      <p>La colección del Museo del Prado es una de las más importantes del mundo y refleja el gusto artístico de los monarcas españoles a lo largo de la historia. Destacan especialmente las colecciones de pintura española, flamenca e italiana.</p>
      
      <p><strong>Pintura Española:</strong> El Prado posee la colección más completa de pintura española del mundo, con obras maestras de artistas como Velázquez, Goya, El Greco, Murillo, Zurbarán y Ribera. Entre las obras más destacadas se encuentran "Las Meninas" y "Las Hilanderas" de Velázquez, "La familia de Carlos IV" y "Los fusilamientos del 3 de mayo" de Goya, y "El caballero de la mano en el pecho" de El Greco.</p>
      
      <p><strong>Pintura Flamenca:</strong> La colección de pintura flamenca es una de las más importantes fuera de los Países Bajos, con obras de artistas como Rubens, Van Dyck y El Bosco. Destaca especialmente "El jardín de las delicias" de El Bosco, una de las obras más enigmáticas y fascinantes de la historia del arte.</p>
      
      <p><strong>Pintura Italiana:</strong> El museo cuenta con una importante colección de pintura italiana, con obras de artistas como Tiziano, Rafael, Botticelli, Fra Angelico y Caravaggio. Entre las obras más destacadas se encuentran "El emperador Carlos V en la batalla de Mühlberg" de Tiziano y "El lavatorio" de Tintoretto.</p>
      
      <p><strong>Otras Escuelas:</strong> Aunque en menor medida, el museo también cuenta con importantes obras de la escuela francesa, alemana y holandesa, con artistas como Poussin, Durero y Rembrandt.</p>
    `,
    image: "/prado-facade-autumn.png",
    gallery: [
      "/royal-studio-scene.png",
      "/placeholder.svg?key=b47ki",
      "/placeholder.svg?key=a0xw3",
      "/prado-gallery-view.png",
    ],
    carouselItems: [
      {
        image: "/royal-studio-scene.png",
        title: "Las Meninas de Velázquez",
        description: "Una de las obras maestras más importantes de la historia del arte occidental, pintada en 1656.",
        link: "/museos/prado",
      },
      {
        image: "/placeholder.svg?key=xvhm7",
        title: "El Jardín de las Delicias de El Bosco",
        description: "Tríptico fascinante que representa el paraíso, el mundo terrenal y el infierno.",
        link: "/museos/prado",
      },
      {
        image: "/placeholder.svg?key=jwew1",
        title: "Los fusilamientos del 3 de mayo de Goya",
        description: "Obra que representa la resistencia española contra las tropas napoleónicas.",
        link: "/museos/prado",
      },
    ],
    location: "Paseo del Prado, s/n, 28014 Madrid",
    schedule: "Lunes a Sábado: 10:00 - 20:00, Domingos y festivos: 10:00 - 19:00",
    category: "Arte",
    events: [
      {
        title: "Exposición Temporal: Goya y la corte ilustrada",
        date: "15 de Mayo - 30 de Septiembre, 2023",
        description: "Una mirada a la relación entre Francisco de Goya y la corte española del siglo XVIII.",
      },
      {
        title: "Visitas guiadas: Obras maestras del Renacimiento",
        date: "Todos los martes y jueves, 11:00",
        description: "Recorrido por las principales obras renacentistas de la colección permanente.",
      },
    ],
  },
  fcb: {
    name: "Museo del Fútbol Club Barcelona",
    description:
      "El Museo del FC Barcelona, ubicado en el estadio Camp Nou, es uno de los museos más visitados de Cataluña. Ofrece un recorrido por la historia del club, sus trofeos y momentos más emblemáticos.",
    longDescription:
      "El Museo del FC Barcelona, inaugurado en 1984, permite a los visitantes sumergirse en la rica historia del club catalán. A lo largo de sus salas, se pueden contemplar los numerosos trofeos conquistados por el equipo, incluyendo Copas de Europa, Ligas y Copas del Rey. Además, el museo cuenta con espacios interactivos, proyecciones audiovisuales y una extensa colección de objetos relacionados con los jugadores más emblemáticos que han vestido la camiseta azulgrana, como Kubala, Cruyff, Maradona, Ronaldinho y Messi.",
    history: `
      <p>El Museo del FC Barcelona fue inaugurado el 24 de septiembre de 1984, bajo la presidencia de Josep Lluís Núñez. En sus inicios, ocupaba una pequeña parte del estadio Camp Nou, pero con el paso de los años ha ido creciendo hasta convertirse en uno de los museos más visitados de Cataluña.</p>
      
      <p>En 2000, el museo fue completamente renovado y ampliado, pasando a llamarse "Museo Presidente Núñez". En 2010, coincidiendo con el 111 aniversario del club, se llevó a cabo otra importante renovación que incluyó la incorporación de elementos interactivos y multimedia.</p>
      
      <p>La última gran renovación tuvo lugar en 2015, cuando se creó el actual "Camp Nou Experience", que combina la visita al museo con un recorrido por las instalaciones del estadio, incluyendo el terreno de juego, los vestuarios, la sala de prensa y otras áreas normalmente restringidas al público.</p>
      
      <p>A lo largo de su historia, el museo ha recibido más de 35 millones de visitantes, convirtiéndose en uno de los museos deportivos más visitados del mundo y en una parada obligatoria para los aficionados al fútbol que visitan Barcelona.</p>
    `,
    collection: `
      <p>El Museo del FC Barcelona alberga una impresionante colección que documenta la rica historia del club desde su fundación en 1899 hasta la actualidad. Entre los elementos más destacados se encuentran:</p>
      
      <p><strong>Trofeos:</strong> El museo exhibe todos los trofeos conquistados por el club a lo largo de su historia, incluyendo las Copas de Europa/Champions League, Ligas españolas, Copas del Rey, Mundiales de Clubes y muchos más. Destaca especialmente la sección dedicada a las cinco Champions League ganadas por el equipo.</p>
      
      <p><strong>Zona Messi:</strong> Un espacio dedicado al que muchos consideran el mejor jugador de la historia del club, Lionel Messi. Aquí se exhiben sus Balones de Oro, Botas de Oro y otros reconocimientos individuales, así como objetos personales y vídeos de sus mejores momentos.</p>
      
      <p><strong>Espacio Multimedia:</strong> Área interactiva donde los visitantes pueden revivir los momentos más gloriosos del club a través de pantallas táctiles, proyecciones audiovisuales y otros elementos multimedia.</p>
      
      <p><strong>Colección de Camisetas:</strong> El museo cuenta con una extensa colección de camisetas históricas del club, desde las primeras de principios del siglo XX hasta las más recientes, pasando por las utilizadas en finales y partidos memorables.</p>
      
      <p><strong>Objetos Históricos:</strong> Diversos objetos que narran la historia del club, como el acta fundacional, documentos históricos, banderas, balones utilizados en partidos importantes, botas de jugadores legendarios, etc.</p>
    `,
    image: "/placeholder.svg?key=0pq26",
    gallery: [
      "/barcelona-champions-league-display.png",
      "/stadium-tunnel-view.png",
      "/barcelona-jersey-wall.png",
      "/barcelona-football-treasures.png",
    ],
    carouselItems: [
      {
        image: "/barcelona-champions-league-display.png",
        title: "Colección de Trofeos de Champions League",
        description: "Las cinco Copas de Europa ganadas por el FC Barcelona a lo largo de su historia.",
        link: "/museos/fcb",
      },
      {
        image: "/stadium-tunnel-view.png",
        title: "Camp Nou Experience",
        description: "Recorrido por las instalaciones del estadio, incluyendo vestuarios y terreno de juego.",
        link: "/museos/fcb",
      },
      {
        image: "/barcelona-football-treasures.png",
        title: "Espacio Messi",
        description: "Zona dedicada al mejor jugador de la historia del club, con sus trofeos y recuerdos.",
        link: "/museos/fcb",
      },
    ],
    location: "C. d'Arístides Maillol, 12, 08028 Barcelona",
    schedule: "Lunes a Sábado: 10:00 - 18:30, Domingos y festivos: 10:00 - 14:30",
    category: "Deporte",
    events: [
      {
        title: "Exposición: Barça, más que un club",
        date: "Permanente",
        description:
          'Un recorrido por los valores y la filosofía que han convertido al FC Barcelona en "más que un club".',
      },
      {
        title: "Encuentros con leyendas del Barça",
        date: "Consultar calendario",
        description: "Sesiones de firmas y charlas con exjugadores emblemáticos del club.",
      },
    ],
  },
  nadal: {
    name: "Museo del Tenis Rafael Nadal",
    description:
      "El Rafa Nadal Museum Xperience, ubicado en Manacor, Mallorca, es un espacio interactivo dedicado a la carrera del tenista español Rafael Nadal y al deporte en general.",
    longDescription:
      "El Museo Rafael Nadal ofrece a los visitantes la oportunidad de conocer de cerca la trayectoria de uno de los mejores tenistas de la historia. El recorrido incluye sus trofeos más importantes, como los de Roland Garros, Wimbledon, US Open y Australian Open, así como equipamiento deportivo utilizado por el campeón mallorquín. Además, el museo cuenta con una zona interactiva donde los visitantes pueden poner a prueba sus habilidades en diferentes deportes mediante simuladores de última generación.",
    history: `
      <p>El Rafa Nadal Museum Xperience fue inaugurado en 2016 como parte del complejo Rafa Nadal Academy by Movistar, en Manacor, Mallorca, ciudad natal del tenista. El museo nació con el objetivo de compartir con el público la trayectoria deportiva de Rafael Nadal y transmitir los valores que han guiado su carrera.</p>
      
      <p>El proyecto fue concebido por el propio Nadal y su equipo, quienes querían crear un espacio que no solo mostrara sus logros deportivos, sino que también ofreciera una experiencia interactiva y educativa para los visitantes, especialmente para los más jóvenes.</p>
      
      <p>Desde su apertura, el museo ha ido ampliando sus instalaciones y contenidos, incorporando nuevos trofeos y recuerdos a medida que Nadal ha seguido cosechando éxitos en su carrera. En 2019, coincidiendo con la duodécima victoria de Nadal en Roland Garros, se inauguró una nueva sala dedicada específicamente a sus triunfos en el torneo parisino.</p>
      
      <p>El museo forma parte de un complejo deportivo más amplio que incluye la academia de tenis, instalaciones deportivas de primer nivel y un centro de fitness y spa, convirtiéndose en un referente para el turismo deportivo en Mallorca.</p>
    `,
    collection: `
      <p>El Rafa Nadal Museum Xperience alberga una impresionante colección que documenta la carrera de uno de los mejores tenistas de todos los tiempos. Entre los elementos más destacados se encuentran:</p>
      
      <p><strong>Trofeos de Grand Slam:</strong> El museo exhibe réplicas de los trofeos de Grand Slam ganados por Nadal, incluyendo sus numerosos Roland Garros, Wimbledon, US Open y Australian Open. Cada trofeo está acompañado de información sobre el torneo y la final correspondiente.</p>
      
      <p><strong>Equipamiento Deportivo:</strong> Una colección de raquetas, zapatillas y ropa utilizada por Nadal en partidos importantes a lo largo de su carrera. Destacan especialmente las raquetas con las que ganó sus primeros grandes títulos.</p>
      
      <p><strong>Zona de Experiencias Interactivas:</strong> Un área donde los visitantes pueden poner a prueba sus habilidades en diferentes deportes mediante simuladores de última generación. Incluye simuladores de tenis, fútbol, ciclismo, Fórmula 1, entre otros.</p>
      
      <p><strong>Galería de Campeones:</strong> Una sección dedicada a otros grandes deportistas que han donado objetos personales al museo. Incluye recuerdos de figuras como Michael Jordan, Usain Bolt, Cristiano Ronaldo, Roger Federer, entre otros.</p>
      
      <p><strong>Exposición Audiovisual:</strong> Una sala de proyecciones donde se muestran los momentos más destacados de la carrera de Nadal, así como entrevistas y documentales sobre su trayectoria.</p>
    `,
    image: "/rafael-nadal-museum-exterior.png",
    gallery: [
      "/tennis-trophy-display.png",
      "/tennis-racket-display.png",
      "/nadal-interactive-zone.png",
      "/nadal-olympic-triumph.png",
    ],
    carouselItems: [
      {
        image: "/tennis-trophy-display.png",
        title: "Colección de Trofeos de Grand Slam",
        description: "Los numerosos trofeos de Roland Garros, Wimbledon, US Open y Australian Open ganados por Nadal.",
        link: "/museos/nadal",
      },
      {
        image: "/tennis-racket-display.png",
        title: "Colección de Raquetas",
        description: "Las raquetas utilizadas por Nadal en los momentos más importantes de su carrera.",
        link: "/museos/nadal",
      },
      {
        image: "/nadal-interactive-zone.png",
        title: "Zona Interactiva",
        description: "Área con simuladores deportivos donde los visitantes pueden poner a prueba sus habilidades.",
        link: "/museos/nadal",
      },
    ],
    location: "Carretera Cales de Mallorca s/n, 07500 Manacor, Mallorca",
    schedule: "Lunes a Domingo: 10:00 - 18:00",
    category: "Deporte",
    events: [
      {
        title: "Clínicas de tenis para jóvenes",
        date: "Sábados, 10:00 - 12:00",
        description:
          "Sesiones de entrenamiento para jóvenes tenistas impartidas por entrenadores de la Academia Rafa Nadal.",
      },
      {
        title: "Exhibición: La evolución del tenis",
        date: "Permanente",
        description: "Un recorrido por la historia del tenis, desde sus orígenes hasta la era moderna.",
      },
    ],
  },
  flamenco: {
    name: "Museo del Baile Flamenco",
    description:
      "El Museo del Baile Flamenco de Sevilla es el primer y único museo del mundo dedicado íntegramente a este arte declarado Patrimonio Cultural Inmaterial de la Humanidad.",
    longDescription:
      "Fundado por la bailaora Cristina Hoyos, el Museo del Baile Flamenco ofrece un recorrido por la historia, estética y evolución de este arte tan arraigado en la cultura española, especialmente en Andalucía. A través de exposiciones interactivas, proyecciones audiovisuales y una cuidada selección de trajes, fotografías y objetos relacionados con el flamenco, los visitantes pueden sumergirse en el apasionante mundo de este baile. Además, el museo organiza regularmente espectáculos de flamenco en su tablao, así como talleres y clases para quienes deseen iniciarse en este arte.",
    history: `
      <p>El Museo del Baile Flamenco fue fundado en 2006 por la reconocida bailaora Cristina Hoyos, figura emblemática del flamenco que ha llevado este arte por todo el mundo. El museo está ubicado en un edificio del siglo XVIII en el corazón del barrio de Santa Cruz, en Sevilla, que fue completamente rehabilitado para albergar esta institución.

      <p>La idea de crear un museo dedicado exclusivamente al flamenco surgió de la propia Cristina Hoyos, quien tras una exitosa carrera internacional como bailaora, decidió crear un espacio que preservara y difundiera este arte tan arraigado en la cultura andaluza.</p>
      
      <p>El museo fue inaugurado oficialmente el 7 de septiembre de 2006, convirtiéndose en el primer museo del mundo dedicado íntegramente al baile flamenco. Desde entonces, se ha consolidado como uno de los espacios culturales más visitados de Sevilla y un referente para los amantes del flamenco de todo el mundo.</p>
      
      <p>En 2010, coincidiendo con la declaración del flamenco como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, el museo amplió sus instalaciones y renovó parte de su contenido para ofrecer una visión aún más completa de este arte.</p>
      
      <p>A lo largo de los años, el museo ha acogido numerosas exposiciones temporales, espectáculos, talleres y actividades educativas, contribuyendo de manera significativa a la difusión y preservación del flamenco.</p>
    `,
    collection: `
      <p>El Museo del Baile Flamenco alberga una rica y variada colección que permite a los visitantes sumergirse en el apasionante mundo del flamenco. Entre los elementos más destacados se encuentran:</p>
      
      <p><strong>Trajes y Vestuario:</strong> Una extensa colección de trajes de flamenca y vestuario utilizado por artistas reconocidos, incluyendo algunos diseños exclusivos utilizados por Cristina Hoyos en sus actuaciones internacionales. Destacan los vestidos de bata de cola, mantones bordados y otros elementos característicos del vestuario flamenco.</p>
      
      <p><strong>Instrumentos Musicales:</strong> Una selección de guitarras, castañuelas, cajones flamencos y otros instrumentos utilizados en este arte. Algunas piezas han pertenecido a reconocidos músicos flamencos y están acompañadas de información sobre su historia y características.</p>
      
      <p><strong>Archivo Audiovisual:</strong> Una extensa colección de grabaciones históricas, tanto de audio como de vídeo, que documentan la evolución del flamenco desde principios del siglo XX hasta la actualidad. Incluye actuaciones de figuras legendarias como Carmen Amaya, Antonio Gades, Paco de Lucía y la propia Cristina Hoyos.</p>
      
      <p><strong>Fotografías y Documentos:</strong> Un archivo fotográfico y documental que recoge momentos clave en la historia del flamenco, carteles de espectáculos históricos, programas de mano y otros documentos de interés.</p>
      
      <p><strong>Instalaciones Interactivas:</strong> El museo cuenta con diversas instalaciones interactivas que permiten a los visitantes experimentar de primera mano algunos aspectos del flamenco, como el compás, el zapateado o los diferentes palos.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200&query=Flamenco Dance Museum, Seville",
    gallery: [
      "/placeholder.svg?height=600&width=800&query=Flamenco dancers performance",
      "/placeholder.svg?height=600&width=800&query=Traditional flamenco dresses exhibition",
      "/placeholder.svg?height=600&width=800&query=Flamenco guitars display",
      "/placeholder.svg?height=600&width=800&query=Interactive flamenco history exhibit",
    ],
    carouselItems: [
      {
        image: "/placeholder.svg?height=600&width=800&query=Flamenco dancers performance",
        title: "Espectáculos de Flamenco",
        description: "Actuaciones diarias de bailaores, cantaores y guitarristas profesionales en el tablao del museo.",
        link: "/museos/flamenco",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=Traditional flamenco dresses exhibition",
        title: "Colección de Trajes",
        description: "Exposición de trajes tradicionales de flamenca y vestuario utilizado por artistas reconocidos.",
        link: "/museos/flamenco",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=Interactive flamenco history exhibit",
        title: "Historia Interactiva del Flamenco",
        description: "Recorrido multimedia por la evolución del flamenco desde sus orígenes hasta la actualidad.",
        link: "/museos/flamenco",
      },
    ],
    location: "C. Manuel Rojas Marcos, 3, 41004 Sevilla",
    schedule: "Lunes a Domingo: 10:00 - 19:00, Espectáculos: 19:30 y 21:00",
    category: "Danza",
    events: [
      {
        title: "Espectáculo de flamenco tradicional",
        date: "Todos los días, 19:30",
        description: "Actuación de bailaores, cantaores y guitarristas profesionales en un entorno íntimo.",
      },
      {
        title: "Taller de iniciación al flamenco",
        date: "Sábados, 12:00",
        description: "Clase introductoria para aprender los pasos básicos del flamenco.",
      },
    ],
  },
  taurino: {
    name: "Museo Taurino de Madrid",
    description:
      "El Museo Taurino de Madrid, ubicado junto a la Plaza de Toros de Las Ventas, alberga una importante colección de objetos relacionados con la tauromaquia española.",
    longDescription:
      "El Museo Taurino de Madrid ofrece un recorrido por la historia de la tauromaquia en España a través de una extensa colección que incluye trajes de luces, capotes, carteles históricos, esculturas, pinturas y fotografías. Entre las piezas más destacadas se encuentran los trajes de célebres toreros como Manolete, El Cordobés y José Tomás, así como cabezas disecadas de toros legendarios. El museo permite a los visitantes comprender la evolución de esta tradición cultural española y su influencia en el arte y la sociedad a lo largo de los siglos.",
    history: `
      <p>El Museo Taurino de Madrid fue inaugurado en 1951 con el objetivo de preservar y difundir el patrimonio histórico y cultural relacionado con la tauromaquia española. Inicialmente, el museo estaba ubicado en las dependencias de la antigua Plaza de Toros de la Puerta de Alcalá, pero tras la demolición de ésta en 1874, la colección fue trasladada a diferentes ubicaciones hasta encontrar su sede definitiva junto a la Plaza de Toros de Las Ventas.</p>
      
      <p>La Plaza de Toros de Las Ventas, inaugurada en 1931, es considerada la más importante del mundo taurino, y en 1968 se decidió establecer el museo en sus instalaciones, donde permanece hasta la actualidad.</p>
      
      <p>A lo largo de los años, el museo ha ido ampliando sus fondos gracias a donaciones de toreros, ganaderos, aficionados y coleccionistas. En 1996 se llevó a cabo una importante renovación que modernizó sus instalaciones y mejoró la presentación de las colecciones.</p>
      
      <p>En 2014, coincidiendo con el 75 aniversario de la Plaza de Toros de Las Ventas, el museo fue nuevamente renovado, ampliando su superficie expositiva y actualizando su discurso museográfico para ofrecer una visión más completa y didáctica de la historia de la tauromaquia.</p>
    `,
    collection: `
      <p>El Museo Taurino de Madrid alberga una de las colecciones más importantes del mundo relacionadas con la tauromaquia. Entre los elementos más destacados se encuentran:</p>
      
      <p><strong>Trajes de Luces:</strong> Una extensa colección de trajes de torear pertenecientes a figuras legendarias como Manolete, Juan Belmonte, El Cordobés, Paco Camino y José Tomás, entre otros. Destacan especialmente los trajes utilizados en tardes históricas o en las alternativas de estos maestros.</p>
      
      <p><strong>Capotes y Muletas:</strong> Una selección de capotes de paseo ricamente bordados y muletas utilizadas por grandes figuras del toreo. Algunos de estos capotes son auténticas obras de arte textil, con bordados en oro y seda de gran valor artístico.</p>
      
      <p><strong>Carteles Históricos:</strong> Una importante colección de carteles taurinos que abarca desde el siglo XVIII hasta la actualidad, documentando la evolución gráfica y estética de estos elementos publicitarios tan característicos de la fiesta.</p>
      
      <p><strong>Arte Taurino:</strong> Pinturas, esculturas y grabados de temática taurina realizados por artistas como Goya, Picasso, Zuloaga y Roberto Domingo, que muestran la influencia de la tauromaquia en el arte español.</p>
      
      <p><strong>Cabezas de Toros:</strong> Una colección de cabezas disecadas de toros que protagonizaron faenas memorables o que destacaron por su bravura. Cada pieza está acompañada de información sobre el toro, el torero que lo lidió y la fecha de la corrida.</p>
      
      <p><strong>Documentos Históricos:</strong> Un archivo documental que incluye contratos, reglamentos, entradas y otros documentos que ilustran la evolución administrativa y organizativa de los espectáculos taurinos.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200&query=Bullfighting Museum, Madrid",
    gallery: [
      "/placeholder.svg?height=600&width=800&query=Historic bullfighting posters",
      "/placeholder.svg?height=600&width=800&query=Matador costumes display",
      "/placeholder.svg?height=600&width=800&query=Bullfighting artifacts collection",
      "/placeholder.svg?height=600&width=800&query=Las Ventas bullring, Madrid",
    ],
    carouselItems: [
      {
        image: "/placeholder.svg?height=600&width=800&query=Historic bullfighting posters",
        title: "Carteles Históricos",
        description: "Colección de carteles taurinos desde el siglo XVIII hasta la actualidad.",
        link: "/museos/taurino",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=Matador costumes display",
        title: "Trajes de Luces",
        description: "Exposición de trajes utilizados por grandes figuras del toreo como Manolete y El Cordobés.",
        link: "/museos/taurino",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=Las Ventas bullring, Madrid",
        title: "Plaza de Toros de Las Ventas",
        description: "Visita a la plaza de toros más importante del mundo, inaugurada en 1931.",
        link: "/museos/taurino",
      },
    ],
    location: "C. de Alcalá, 237, 28028 Madrid",
    schedule: "Martes a Domingo: 10:00 - 14:00, Lunes: Cerrado",
    category: "Tauromaquia",
    events: [
      {
        title: "Conferencia: Historia de la tauromaquia en España",
        date: "Primer jueves de cada mes, 18:00",
        description: "Charla sobre los orígenes y evolución del arte taurino a cargo de expertos en la materia.",
      },
      {
        title: "Visita guiada a la Plaza de Toros de Las Ventas",
        date: "Sábados y domingos, 11:00",
        description: "Recorrido por las instalaciones de la plaza de toros más importante de España.",
      },
    ],
  },
  thyssen: {
    name: "Museo Thyssen-Bornemisza",
    description:
      "El Museo Thyssen-Bornemisza alberga una de las colecciones de arte privadas más importantes del mundo, ahora de propiedad pública, que abarca desde el siglo XIII hasta el siglo XX.",
    longDescription:
      "El Museo Thyssen-Bornemisza ofrece al visitante un recorrido por el arte occidental desde el siglo XIII hasta finales del siglo XX. En las cerca de mil obras expuestas, el visitante podrá contemplar los principales periodos y escuelas pictóricas del arte occidental como el Renacimiento, el Manierismo, el Barroco, el Rococó, el Romanticismo y el arte de los siglos XIX y XX hasta el Pop Art. Se incluyen también algunos movimientos carentes de representación en las colecciones estatales, como el Impresionismo, el Fauvismo, el Expresionismo alemán y las Vanguardias experimentales de principios del siglo XX.",
    history: `
      <p>El Museo Thyssen-Bornemisza tiene su origen en la colección privada del barón Heinrich Thyssen-Bornemisza (1875-1947), quien comenzó a adquirir obras de arte en los años 1920. Su hijo, Hans Heinrich Thyssen-Bornemisza (1921-2002), continuó ampliando la colección hasta convertirla en una de las más importantes del mundo en manos privadas.</p>
      
      <p>En 1988, el barón Hans Heinrich Thyssen-Bornemisza firmó un acuerdo con el gobierno español para el préstamo de la mayor parte de su colección durante un periodo de nueve años y medio. Para albergar estas obras, se rehabilitó el Palacio de Villahermosa, un edificio neoclásico situado en el Paseo del Prado, frente al Museo del Prado.</p>
      
      <p>El museo fue inaugurado oficialmente en octubre de 1992 por los Reyes de España, Juan Carlos I y Sofía. Poco después, en 1993, el Estado español adquirió la colección, que pasó a ser de propiedad pública.</p>
      
      <p>En 2004, el museo se amplió para albergar la colección Carmen Thyssen-Bornemisza, esposa del barón, que incluye importantes obras del siglo XIX y principios del XX, especialmente del impresionismo, postimpresionismo y expresionismo alemán.</p>
      
      <p>A lo largo de los años, el museo ha seguido enriqueciendo sus fondos con nuevas adquisiciones y ha organizado numerosas exposiciones temporales de gran relevancia internacional.</p>
    `,
    collection: `
      <p>La colección del Museo Thyssen-Bornemisza ofrece un recorrido completo por la historia de la pintura occidental desde el siglo XIII hasta finales del siglo XX, complementando perfectamente las colecciones del Museo del Prado y el Museo Reina Sofía.</p>
      
      <p><strong>Pintura Primitiva Italiana y Flamenca:</strong> La colección incluye obras maestras de artistas como Duccio di Buoninsegna, Jan van Eyck y Hans Memling, que representan los inicios de la pintura occidental.</p>
      
      <p><strong>Renacimiento:</strong> Destacan obras de artistas como Fra Angelico, Ghirlandaio, Carpaccio y Durero, que muestran la evolución del arte durante este periodo crucial.</p>
      
      <p><strong>Barroco y Rococó:</strong> La colección cuenta con importantes obras de Caravaggio, Rubens, Van Dyck, Rembrandt y Tiepolo, entre otros maestros de estos periodos.</p>
      
      <p><strong>Pintura Norteamericana del siglo XIX:</strong> Una de las secciones más singulares del museo, con obras de artistas como Winslow Homer, John Singer Sargent y James Abbott McNeill Whistler.</p>
      
      <p><strong>Impresionismo y Postimpresionismo:</strong> Incluye obras maestras de Monet, Renoir, Degas, Cézanne, Van Gogh y Gauguin, que representan uno de los periodos más revolucionarios en la historia del arte.</p>
      
      <p><strong>Vanguardias del siglo XX:</strong> La colección abarca movimientos como el Fauvismo, el Expresionismo, el Cubismo, el Dadaísmo y el Surrealismo, con obras de artistas como Matisse, Kandinsky, Picasso, Dalí y Magritte.</p>
      
      <p><strong>Arte Contemporáneo:</strong> Incluye obras de movimientos como el Expresionismo Abstracto, el Pop Art y el Hiperrealismo, con artistas como Jackson Pollock, Roy Lichtenstein y Edward Hopper.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200&query=Thyssen Museum, Madrid, facade",
    gallery: [
      "/placeholder.svg?height=600&width=800&query=Thyssen Museum interior gallery",
      "/placeholder.svg?height=600&width=800&query=Impressionist paintings, Thyssen Museum",
      "/placeholder.svg?height=600&width=800&query=American art collection, Thyssen Museum",
      "/placeholder.svg?height=600&width=800&query=Modern art section, Thyssen Museum",
    ],
    carouselItems: [
      {
        image: "/placeholder.svg?height=600&width=800&query=Impressionist paintings, Thyssen Museum",
        title: "Colección Impresionista",
        description:
          "Una de las mejores colecciones de pintura impresionista fuera de Francia, con obras de Monet, Renoir y Degas.",
        link: "/museos/thyssen",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=American art collection, Thyssen Museum",
        title: "Arte Norteamericano",
        description: "Una singular colección de pintura norteamericana del siglo XIX, única en Europa.",
        link: "/museos/thyssen",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=Modern art section, Thyssen Museum",
        title: "Vanguardias del Siglo XX",
        description:
          "Obras maestras de los principales movimientos artísticos del siglo XX, desde el Expresionismo hasta el Pop Art.",
        link: "/museos/thyssen",
      },
    ],
    location: "Paseo del Prado, 8, 28014 Madrid",
    schedule: "Martes a Domingo: 10:00 - 19:00, Lunes: Cerrado",
    category: "Arte",
    events: [
      {
        title: "Exposición Temporal: Mujeres Impresionistas",
        date: "10 de Febrero - 15 de Mayo, 2023",
        description:
          "Una mirada a las artistas femeninas del movimiento impresionista, como Berthe Morisot y Mary Cassatt.",
      },
      {
        title: "Visitas guiadas: Maestros del Renacimiento",
        date: "Todos los miércoles, 11:00",
        description: "Recorrido por las obras renacentistas de la colección permanente.",
      },
    ],
  },
  // Añadir más museos según sea necesario
}

export default function MuseoPage({ params }: { params: { slug: string } }) {
  const museo = museosData[params.slug as keyof typeof museosData]

  if (!museo) {
    notFound()
  }

  // Datos estructurados para SEO (Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: museo.name,
    description: museo.description,
    image: museo.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: museo.location.split(",")[0],
      addressLocality: museo.location.split(",")[1]?.trim() || "",
      addressRegion: "España",
    },
    openingHours: museo.schedule,
    // No se incluye información de precios
    telephone: "+34 915 135 516",
    url: `https://artevivaespana.com/museos/${params.slug}`,
    sameAs: ["https://www.facebook.com/artevivaespana", "https://www.instagram.com/artevivaespana"],
  }

  return (
    <main>
      <Header />

      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("${museo.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {museo.name}
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", my: 3 }} />

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {museo.description}
          </Typography>
        </Container>
      </Box>

      {/* Breadcrumbs */}
      <Box sx={{ bgcolor: "#1a1a1a", py: 2 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "rgba(255,255,255,0.7)" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Inicio
            </Link>
            <Link href="/museos" style={{ color: "inherit", textDecoration: "none" }}>
              Museos
            </Link>
            <Typography color="white">{museo.name}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Museum Details */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                Sobre el Museo
              </Typography>

              <Box sx={{ width: "80px", height: "2px", bgcolor: "#d4af37", mb: 4 }} />

              <Typography variant="body1" sx={{ mb: 4 }}>
                {museo.longDescription}
              </Typography>

              {/* Historia */}
              <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3 }}>
                Historia
              </Typography>

              <Box dangerouslySetInnerHTML={{ __html: museo.history }} sx={{ mb: 4 }} />

              {/* Colección */}
              <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3 }}>
                Colección
              </Typography>

              <Box dangerouslySetInnerHTML={{ __html: museo.collection }} sx={{ mb: 4 }} />

              {/* Carousel */}
              <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3 }}>
                Galería Destacada
              </Typography>

              <GalleryCarousel items={museo.carouselItems} />

              {/* Gallery Grid */}
              <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3 }}>
                Galería
              </Typography>

              <Grid container spacing={2}>
                {museo.gallery.map((image, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "75%",
                        borderRadius: "4px",
                        overflow: "hidden",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${museo.name} - Imagen ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Events */}
              <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3 }}>
                Eventos y Exposiciones
              </Typography>

              <Grid container spacing={3}>
                {museo.events.map((event, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper sx={{ p: 3, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white", height: "100%" }}>
                      <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#d4af37", display: "block", mb: 2 }}>
                        {event.date}
                      </Typography>
                      <Typography variant="body2">{event.description}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white" }}>
                <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                  Información
                </Typography>

                <List>
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <LocationOn sx={{ color: "#d4af37" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Ubicación"
                      secondary={museo.location}
                      secondaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                    />
                  </ListItem>

                  <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <AccessTime sx={{ color: "#d4af37" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Horario"
                      secondary={museo.schedule}
                      secondaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                    />
                  </ListItem>

                  <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Info sx={{ color: "#d4af37" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Categoría"
                      secondary={museo.category}
                      secondaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.7)" } }}
                    />
                  </ListItem>
                </List>

                <Button
                  component={Link}
                  href="/contacto"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 4,
                    backgroundColor: "#d4af37",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#b8971f",
                    },
                  }}
                >
                  Solicitar Más Información
                </Button>
              </Paper>

              <Paper sx={{ p: 4, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white", mt: 4 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                  Próximos Eventos
                </Typography>

                {museo.events.map((event, index) => (
                  <Box key={index} sx={{ mb: index < museo.events.length - 1 ? 3 : 0 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CalendarMonth sx={{ color: "#d4af37", mr: 1, fontSize: "1rem" }} />
                      <Typography variant="subtitle2">{event.date}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {event.title}
                    </Typography>
                    {index < museo.events.length - 1 && (
                      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mt: 2 }} />
                    )}
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mb: 3,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            ¿Quieres Saber Más?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}>
            Contacta con nosotros para obtener información detallada sobre visitas guiadas, eventos especiales y
            exposiciones temporales en {museo.name}.
          </Typography>

          <Button
            component={Link}
            href="/contacto"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#d4af37",
              color: "black",
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: "#b8971f",
              },
            }}
          >
            Hacer un Descubrimiento
          </Button>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
