"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Container, Typography, Box, Chip, Divider, Avatar, Button, Breadcrumbs, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid"
import { CalendarToday, AccessTime, Facebook, Twitter, LinkedIn, WhatsApp } from "@mui/icons-material"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Datos completos de las noticias
const noticiasData = {
  "museos-mas-visitados-espana-2023": {
    id: 1,
    title: "Los 10 museos más visitados de España en 2023",
    slug: "museos-mas-visitados-espana-2023",
    date: "15 de enero de 2023",
    author: "María González",
    authorImage: "/author-maria.png",
    readTime: "8 minutos",
    category: "Ranking",
    image: "/news-museum-ranking.png",
    excerpt:
      "Descubre cuáles son los museos españoles que han recibido más visitantes durante el último año y qué los hace tan especiales.",
    content: `
      <p>España es un país con una riqueza cultural y artística extraordinaria, lo que se refleja en la gran cantidad y calidad de sus museos. Cada año, millones de visitantes, tanto nacionales como extranjeros, recorren las salas de estas instituciones para admirar sus colecciones y exposiciones. En este artículo, analizamos cuáles han sido los museos más visitados de España durante el año 2023.</p>

      <h3>1. Museo del Prado (Madrid)</h3>
      <p>El Museo Nacional del Prado se mantiene un año más como el museo más visitado de España, con más de 3,2 millones de visitantes en 2023. La pinacoteca madrileña, que alberga obras maestras de Velázquez, Goya, El Greco, Tiziano y Rubens, entre otros, ha experimentado un incremento del 15% en el número de visitantes respecto al año anterior. Las exposiciones temporales "Picasso: El Greco" y "Velázquez y el Siglo de Oro" han sido dos de los grandes atractivos del año.</p>

      <h3>2. Museo Reina Sofía (Madrid)</h3>
      <p>El Museo Nacional Centro de Arte Reina Sofía ha recibido más de 2,8 millones de visitantes en 2023, consolidándose como el segundo museo más visitado del país. El "Guernica" de Picasso sigue siendo el gran reclamo de este museo dedicado al arte contemporáneo, aunque las exposiciones temporales dedicadas a artistas como Louise Bourgeois y Juan Muñoz también han contribuido significativamente a estas cifras.</p>

      <h3>3. Museo Guggenheim (Bilbao)</h3>
      <p>El Museo Guggenheim de Bilbao ha alcanzado la cifra de 1,5 millones de visitantes en 2023, lo que supone un récord histórico para la institución. El edificio diseñado por Frank Gehry sigue siendo un icono arquitectónico que atrae a visitantes de todo el mundo, y exposiciones como "David Hockney: Paisajes" y "Jenny Holzer: Verdades" han sido grandes éxitos de público.</p>

      <h3>4. Museo Thyssen-Bornemisza (Madrid)</h3>
      <p>Con más de 1,2 millones de visitantes, el Museo Thyssen-Bornemisza ocupa el cuarto lugar en esta lista. La exposición "Mujeres Impresionistas: Mary Cassatt, Berthe Morisot y Eva Gonzalès" ha sido uno de los grandes acontecimientos culturales del año en Madrid, atrayendo a más de 300.000 visitantes.</p>

      <h3>5. Museo Picasso (Barcelona)</h3>
      <p>El Museo Picasso de Barcelona ha recibido más de 1 millón de visitantes en 2023. La colección permanente, que incluye obras de la juventud y formación del artista malagueño, sigue siendo un gran atractivo, pero la exposición temporal "Picasso y la cerámica" ha sido uno de los grandes éxitos del año.</p>

      <h3>6. Ciudad de las Artes y las Ciencias (Valencia)</h3>
      <p>Aunque no es un museo tradicional, la Ciudad de las Artes y las Ciencias de Valencia, que incluye el Museo de las Ciencias Príncipe Felipe, ha recibido más de 900.000 visitantes en 2023. Este complejo arquitectónico diseñado por Santiago Calatrava sigue siendo uno de los grandes atractivos turísticos de Valencia.</p>

      <h3>7. Teatro-Museo Dalí (Figueres)</h3>
      <p>El Teatro-Museo Dalí de Figueres ha recibido más de 800.000 visitantes en 2023. Este museo, diseñado por el propio Salvador Dalí, es el mayor objeto surrealista del mundo y alberga una amplia colección de obras del artista catalán.</p>

      <h3>8. Museo del FC Barcelona (Barcelona)</h3>
      <p>El Museo del FC Barcelona, ubicado en el estadio Camp Nou, ha recibido más de 750.000 visitantes en 2023. Este museo deportivo, que muestra la historia del club y sus numerosos trofeos, es uno de los más visitados de Cataluña.</p>

      <h3>9. Museo Nacional de Arte Romano (Mérida)</h3>
      <p>El Museo Nacional de Arte Romano de Mérida ha recibido más de 600.000 visitantes en 2023. Diseñado por Rafael Moneo, este museo alberga una importante colección de arte y artefactos de la época romana, procedentes principalmente de las excavaciones realizadas en la ciudad de Mérida.</p>

      <h3>10. Museo Sorolla (Madrid)</h3>
      <p>El Museo Sorolla de Madrid cierra esta lista con más de 500.000 visitantes en 2023. Ubicado en la que fue la casa y taller del pintor Joaquín Sorolla, este museo ha experimentado un notable incremento de visitantes gracias al éxito de la serie "Sorolla" emitida por RTVE.</p>

      <h3>Conclusión</h3>
      <p>Los museos españoles han experimentado un notable incremento de visitantes en 2023, superando en muchos casos las cifras previas a la pandemia. Este aumento refleja tanto el interés creciente por el arte y la cultura como la recuperación del turismo internacional. Los museos continúan reinventándose para atraer a nuevos públicos, con exposiciones innovadoras, actividades interactivas y una mayor presencia digital.
      </p>
    `,
    relatedPosts: [2, 4, 7],
  },
  "nueva-exposicion-picasso-reina-sofia": {
    id: 2,
    title: "Nueva exposición de Picasso en el Museo Reina Sofía",
    slug: "nueva-exposicion-picasso-reina-sofia",
    date: "3 de febrero de 2023",
    author: "Carlos Martínez",
    authorImage: "/author-carlos.png",
    readTime: "6 minutos",
    category: "Exposiciones",
    image: "/news-picasso-exhibition.png",
    excerpt:
      "El Museo Reina Sofía inaugura una exposición temporal dedicada a la etapa menos conocida de Pablo Picasso, con obras nunca antes expuestas en España.",
    content: `
      <p>El Museo Nacional Centro de Arte Reina Sofía ha inaugurado esta semana una exposición temporal titulada "Picasso: Los años olvidados", dedicada a una de las etapas menos conocidas del artista malagueño. La muestra, que podrá visitarse hasta el 15 de junio, reúne más de 80 obras realizadas entre 1925 y 1935, muchas de las cuales nunca antes habían sido expuestas en España.</p>

      <h3>Una década de experimentación</h3>
      <p>La década de 1925 a 1935 fue un período de intensa experimentación para Pablo Picasso. Tras el éxito del cubismo y coincidiendo con su acercamiento al surrealismo, el artista exploró nuevas formas de expresión que no siempre han recibido la atención que merecen por parte de críticos e historiadores del arte.</p>

      <p>"Esta exposición pretende arrojar luz sobre una etapa fascinante pero relativamente poco estudiada de la trayectoria de Picasso", explica Manuel Borja-Villel, director del Museo Reina Sofía. "Son años en los que el artista se mueve entre diferentes estilos y técnicas, anticipando muchas de las innovaciones que desarrollaría plenamente en décadas posteriores".</p>

      <h3>Obras procedentes de colecciones internacionales</h3>
      <p>La exposición ha sido posible gracias a la colaboración de numerosos museos y coleccionistas privados de todo el mundo. Entre las instituciones que han prestado obras para la muestra se encuentran el Museum of Modern Art de Nueva York, la Tate Modern de Londres, el Centre Pompidou de París y el Museo Picasso de Barcelona.</p>

      <p>Destaca especialmente la presencia de "Mujer frente al espejo" (1932), procedente de una colección privada suiza y que no se había expuesto públicamente desde 1967. También se exhibe por primera vez en España "Naturaleza muerta con calavera y tres erizos" (1927), una obra clave para entender la evolución del lenguaje pictórico de Picasso.</p>

      <h3>Secciones de la exposición</h3>
      <p>La muestra se divide en cuatro secciones temáticas:</p>

      <p><strong>1. Metamorfosis del cuerpo:</strong> Explora las diferentes formas en que Picasso representó la figura humana durante este período, con especial atención a las distorsiones y transformaciones del cuerpo femenino.</p>

      <p><strong>2. Entre el surrealismo y el clasicismo:</strong> Analiza la compleja relación de Picasso con el movimiento surrealista y su simultáneo interés por la tradición clásica.</p>

      <p><strong>3. Experimentos técnicos:</strong> Presenta las innovaciones técnicas desarrolladas por el artista en estos años, incluyendo sus trabajos en escultura, grabado y cerámica.</p>

      <p><strong>4. Preludios del Guernica:</strong> Muestra cómo algunas de las obras de este período anticipan elementos formales y temáticos que culminarían en la creación del "Guernica" en 1937.</p>

      <h3>Actividades complementarias</h3>
      <p>Paralelamente a la exposición, el Museo Reina Sofía ha organizado un programa de actividades complementarias que incluye conferencias, talleres para familias y visitas guiadas especializadas. Destaca el ciclo de conferencias "Picasso y su tiempo", en el que participarán destacados especialistas internacionales como Anne Baldassari, John Richardson y Elizabeth Cowling.</p>

      <p>También se ha editado un catálogo exhaustivo que incluye ensayos de los comisarios de la exposición, Rosario Peiró y Manuel Fontán del Junco, así como de otros expertos en la obra de Picasso.</p>

      <h3>Información práctica</h3>
      <p>La exposición "Picasso: Los años olvidados" puede visitarse en el Museo Reina Sofía hasta el 15 de junio de 2023. El horario de visita es de lunes a sábado de 10:00 a 21:00 horas, y domingos de 10:00 a 19:00 horas (martes cerrado).</p>

      <p>El precio de la entrada general es de 12 euros, aunque existen diferentes modalidades de entrada reducida y gratuita. Se recomienda la compra anticipada de entradas a través de la página web del museo para evitar colas.</p>
    `,
    relatedPosts: [1, 3, 7],
  },
  "museo-prado-adquiere-obra-inedita-goya": {
    id: 3,
    title: "El Museo del Prado adquiere una obra inédita de Goya",
    slug: "museo-prado-adquiere-obra-inedita-goya",
    date: "20 de marzo de 2023",
    author: "Laura Sánchez",
    authorImage: "/author-laura.png",
    readTime: "7 minutos",
    category: "Adquisiciones",
    image: "/news-goya-acquisition.png",
    excerpt:
      "El Museo del Prado ha anunciado la adquisición de una obra inédita de Francisco de Goya que se encontraba en una colección privada desde el siglo XIX.",
    content: `
      <p>El Museo Nacional del Prado ha anunciado hoy la adquisición de una obra inédita de Francisco de Goya (1746-1828) que se encontraba en una colección privada británica desde mediados del siglo XIX. Se trata de "Escena de brujas", un óleo sobre lienzo de 45 x 57 cm pintado hacia 1798, que se enmarca dentro de la serie de obras de temática brujeril que el artista aragonés realizó en los últimos años del siglo XVIII.</p>

      <h3>Un hallazgo excepcional</h3>
      <p>La obra fue descubierta durante el inventario de una antigua colección aristocrática británica, donde permanecía atribuida a un "seguidor de Goya". Tras un exhaustivo estudio técnico y estilístico llevado a cabo por expertos del Museo del Prado, se ha confirmado su autoría y su excepcional estado de conservación.</p>

      <p>"Es un hallazgo verdaderamente extraordinario", ha declarado Miguel Falomir, director del Museo del Prado. "No es frecuente que aparezcan obras inéditas de Goya, y menos aún de esta calidad y en un estado de conservación tan bueno. La pintura no ha sido intervenida desde su creación y conserva incluso su bastidor original".</p>

      <h3>Temática y contexto</h3>
      <p>"Escena de brujas" representa un aquelarre nocturno en el que varias figuras femeninas aparecen realizando rituales alrededor de un gran macho cabrío, símbolo tradicional del demonio en la iconografía brujeril. La obra se relaciona directamente con las pinturas que Goya realizó para la Alameda de Osuna, conocidas como "Asuntos de brujas", y anticipa algunos elementos que el artista desarrollaría posteriormente en sus famosas Pinturas Negras.</p>

      <p>Según Manuela Mena, ex jefa de Conservación de Pintura del Siglo XVIII del Museo del Prado y una de las mayores especialistas en la obra de Goya, "esta pintura refleja el interés del artista por el mundo de lo irracional y lo nocturno, temas que le fascinaron especialmente tras su enfermedad de 1792, que le dejó sordo. La obra muestra ya el estilo suelto y expresivo que caracterizaría su producción más personal".</p>

      <h3>Proceso de adquisición</h3>
      <p>La adquisición ha sido posible gracias a la aportación extraordinaria del Ministerio de Cultura y Deporte, así como a la colaboración de la Fundación Amigos del Museo del Prado. Aunque no se ha revelado el precio exacto pagado por la obra, fuentes cercanas a la operación estiman que podría haberse situado entre los 3 y los 4 millones de euros.</p>

      <p>"Esta adquisición refuerza la ya extraordinaria colección de obras de Goya que posee el Museo del Prado, consolidándolo como el principal centro mundial para el estudio y disfrute de la obra del artista aragonés", ha señalado Javier Solana, presidente del Real Patronato del Museo del Prado.</p>

      <h3>Restauración y exhibición</h3>
      <p>Antes de su exposición al público, la obra será sometida a un proceso de estudio y documentación en los talleres de restauración del museo. Este proceso incluirá análisis de pigmentos, radiografías y reflectografías infrarrojas que permitirán conocer mejor la técnica empleada por Goya y posibles arrepentimientos o modificaciones durante el proceso creativo.</p>

      <p>Está previsto que "Escena de brujas" se presente al público en septiembre de 2023, como parte de una pequeña exposición temporal que contextualizará la obra dentro de la producción de Goya relacionada con la temática de la brujería y lo sobrenatural. Posteriormente, la pintura se integrará en la colección permanente del museo, en las salas dedicadas al artista aragonés.</p>

      <h3>Importancia para la colección</h3>
      <p>Con esta adquisición, el Museo del Prado refuerza su posición como la institución que alberga la colección más importante de obras de Francisco de Goya. El museo ya contaba con más de 150 pinturas del artista aragonés, incluyendo obras maestras como "La familia de Carlos IV", "Los fusilamientos del 3 de mayo" o "Las pinturas negras".</p>

      <p>"Esta nueva incorporación viene a completar un aspecto fundamental de la producción de Goya, como es su interés por el mundo de la brujería y la superstición, temas que reflejan tanto las inquietudes personales del artista como el contexto social y cultural de la España de finales del siglo XVIII", ha explicado Andrés Úbeda, director adjunto de Conservación del Museo del Prado.</p>
    `,
    relatedPosts: [1, 2, 7],
  },
}

export default function NoticiaDetallePage() {
  const { slug } = useParams()
  const [noticia, setNoticia] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [noticiasRelacionadas, setNoticiasRelacionadas] = useState<any[]>([])

  // Datos de todas las noticias para mostrar relacionadas
  const todasLasNoticias = [
    {
      id: 1,
      title: "Los 10 museos más visitados de España en 2023",
      slug: "museos-mas-visitados-espana-2023",
      date: "15 de enero de 2023",
      category: "Ranking",
      image: "/news-museum-ranking.png",
      excerpt:
        "Descubre cuáles son los museos españoles que han recibido más visitantes durante el último año y qué los hace tan especiales.",
    },
    {
      id: 2,
      title: "Nueva exposición de Picasso en el Museo Reina Sofía",
      slug: "nueva-exposicion-picasso-reina-sofia",
      date: "3 de febrero de 2023",
      category: "Exposiciones",
      image: "/news-picasso-exhibition.png",
      excerpt:
        "El Museo Reina Sofía inaugura una exposición temporal dedicada a la etapa menos conocida de Pablo Picasso, con obras nunca antes expuestas en España.",
    },
    {
      id: 3,
      title: "El Museo del Prado adquiere una obra inédita de Goya",
      slug: "museo-prado-adquiere-obra-inedita-goya",
      date: "20 de marzo de 2023",
      category: "Adquisiciones",
      image: "/news-goya-acquisition.png",
      excerpt:
        "El Museo del Prado ha anunciado la adquisición de una obra inédita de Francisco de Goya que se encontraba en una colección privada desde el siglo XIX.",
    },
    {
      id: 4,
      title: "El Museo Thyssen celebra su 30 aniversario con entrada gratuita",
      slug: "museo-thyssen-celebra-30-aniversario",
      date: "8 de abril de 2023",
      category: "Eventos",
      image: "/news-thyssen-anniversary.png",
      excerpt:
        "Con motivo de su 30 aniversario, el Museo Thyssen-Bornemisza ofrecerá entrada gratuita durante todo el mes de octubre y organizará actividades especiales.",
    },
    {
      id: 7,
      title: "Restauran 'Las Meninas' de Velázquez tras un estudio exhaustivo",
      slug: "restauran-las-meninas-velazquez",
      date: "10 de julio de 2023",
      category: "Restauración",
      image: "/news-meninas-restoration.png",
      excerpt:
        "Tras dos años de estudio, el Museo del Prado ha completado la restauración de 'Las Meninas' de Velázquez, revelando detalles hasta ahora desconocidos.",
    },
  ]

  useEffect(() => {
    // Simulamos una carga de datos
    setLoading(true)
    setTimeout(() => {
      const noticiaEncontrada = noticiasData[slug as keyof typeof noticiasData]

      if (noticiaEncontrada) {
        setNoticia(noticiaEncontrada)

        // Obtenemos las noticias relacionadas
        if (noticiaEncontrada.relatedPosts && noticiaEncontrada.relatedPosts.length > 0) {
          const relacionadas = todasLasNoticias.filter(
            (n) => noticiaEncontrada.relatedPosts.includes(n.id) && n.id !== noticiaEncontrada.id,
          )
          setNoticiasRelacionadas(relacionadas)
        }
      }

      setLoading(false)
    }, 500)
  }, [slug])

  // Si la noticia no existe, mostramos la página 404
  if (!loading && !noticia) {
    notFound()
  }

  if (loading || !noticia) {
    return (
      <main>
        <Header />
        <Box sx={{ height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h4">Cargando noticia...</Typography>
        </Box>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />

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
            backgroundImage: `url("${noticia.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 1 }}>
          <Chip
            label={noticia.category}
            sx={{
              bgcolor: "#d4af37",
              color: "black",
              fontWeight: "bold",
              mb: 3,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {noticia.title}
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
            {noticia.excerpt}
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
            <Link href="/noticias" style={{ color: "inherit", textDecoration: "none" }}>
              Noticias
            </Link>
            <Typography color="white">{noticia.title}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Contenido de la Noticia */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              {/* Meta información */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={noticia.authorImage} alt={noticia.author} sx={{ mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    Por <span style={{ color: "white", fontWeight: "bold" }}>{noticia.author}</span>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 0, sm: 2 } }}>
                  <CalendarToday sx={{ fontSize: "0.9rem", color: "#d4af37", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    {noticia.date}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", ml: { xs: 0, sm: 2 } }}>
                  <AccessTime sx={{ fontSize: "0.9rem", color: "#d4af37", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    Tiempo de lectura: {noticia.readTime}
                  </Typography>
                </Box>
              </Box>

              {/* Contenido principal */}
              <Box
                sx={{
                  "& p": { mb: 3, lineHeight: 1.8 },
                  "& h3": { mt: 4, mb: 2, color: "#d4af37" },
                  "& strong": { color: "#d4af37" },
                }}
                dangerouslySetInnerHTML={{ __html: noticia.content }}
              />

              {/* Compartir */}
              <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Compartir este artículo
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Sidebar */}
              <Box sx={{ position: "sticky", top: "100px" }}>
                {/* Categorías */}
                <Box sx={{ mb: 6, p: 3, bgcolor: "rgba(26, 26, 26, 0.8)", borderRadius: "8px" }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                    Categorías
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {[
                      "Ranking",
                      "Exposiciones",
                      "Adquisiciones",
                      "Eventos",
                      "Restauración",
                      "Descubrimientos",
                      "Tecnología",
                    ].map((cat) => (
                      <Chip
                        key={cat}
                        label={cat}
                        component={Link}
                        href={`/noticias?categoria=${cat}`}
                        sx={{
                          bgcolor: cat === noticia.category ? "#d4af37" : "rgba(255,255,255,0.1)",
                          color: cat === noticia.category ? "black" : "white",
                          fontWeight: cat === noticia.category ? "bold" : "normal",
                          "&:hover": {
                            bgcolor: cat === noticia.category ? "#b8971f" : "rgba(255,255,255,0.2)",
                          },
                          mb: 1,
                        }}
                        clickable
                      />
                    ))}
                  </Box>
                </Box>

                {/* Noticias relacionadas */}
                {noticiasRelacionadas.length > 0 && (
                  <Box sx={{ mb: 6, p: 3, bgcolor: "rgba(26, 26, 26, 0.8)", borderRadius: "8px" }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                      Noticias Relacionadas
                    </Typography>
                    {noticiasRelacionadas.map((noticia, index) => (
                      <Box key={noticia.id}>
                        <Box sx={{ display: "flex", mb: 3 }}>
                          <Box sx={{ position: "relative", width: "80px", height: "60px", flexShrink: 0 }}>
                            <Link href={`/noticias/${noticia.slug}`}>
                              <Image
                                src={noticia.image || "/placeholder.svg"}
                                alt={noticia.title}
                                fill
                                style={{ objectFit: "cover", borderRadius: "4px" }}
                              />
                            </Link>
                          </Box>
                          <Box sx={{ ml: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: "bold", lineHeight: 1.3 }}>
                              <Link
                                href={`/noticias/${noticia.slug}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                              >
                                {noticia.title}
                              </Link>
                            </Typography>
                            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                              {noticia.date}
                            </Typography>
                          </Box>
                        </Box>
                        {index < noticiasRelacionadas.length - 1 && (
                          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />
                        )}
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Suscripción */}
                <Box sx={{ p: 3, bgcolor: "rgba(26, 26, 26, 0.8)", borderRadius: "8px" }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                    Boletín de Noticias
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "rgba(255,255,255,0.7)" }}>
                    Suscríbete para recibir las últimas noticias sobre museos y arte en España.
                  </Typography>
                  <Button
                    component={Link}
                    href="/contacto"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#d4af37",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#b8971f",
                      },
                    }}
                  >
                    Suscribirse
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
