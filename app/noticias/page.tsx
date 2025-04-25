"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container, Typography, Box, Button, Breadcrumbs, Chip, Divider, CircularProgress } from "@mui/material"
import Grid from "@mui/material/Grid"
import { CalendarToday, ArrowForward } from "@mui/icons-material"
import Header from "@/components/header"
import Footer from "@/components/footer"

const noticias = [
  {
    id: 1,
    title: "Los 10 museos más visitados de España en 2025",
    slug: "museos-mas-visitados-espana-2025",
    date: "15 de enero de 2025",
    category: "Ranking",
    image: "/news-museum-ranking.png",
    excerpt:
      "Descubre cuáles son los museos españoles que han recibido más visitantes durante el último año y qué los hace tan especiales.",
    featured: true,
  },
  {
    id: 2,
    title: "Nueva exposición de Picasso en el Museo Reina Sofía",
    slug: "nueva-exposicion-picasso-reina-sofia",
    date: "3 de febrero de 2025",
    category: "Exposiciones",
    image: "/news-picasso-exhibition.png",
    excerpt:
      "El Museo Reina Sofía inaugura una exposición temporal dedicada a la etapa menos conocida de Pablo Picasso, con obras nunca antes expuestas en España.",
    featured: true,
  },
  {
    id: 3,
    title: "El Museo del Prado adquiere una obra inédita de Goya",
    slug: "museo-prado-adquiere-obra-inedita-goya",
    date: "20 de marzo de 2025",
    category: "Adquisiciones",
    image: "/news-goya-acquisition.png",
    excerpt:
      "El Museo del Prado ha anunciado la adquisición de una obra inédita de Francisco de Goya que se encontraba en una colección privada desde el siglo XIX.",
    featured: true,
  },
  {
    id: 4,
    title: "El Museo Thyssen celebra su 30 aniversario con entrada gratuita",
    slug: "museo-thyssen-celebra-30-aniversario",
    date: "8 de abril de 2025",
    category: "Eventos",
    image: "/news-thyssen-anniversary.png",
    excerpt:
      "Con motivo de su 30 aniversario, el Museo Thyssen-Bornemisza ofrecerá entrada gratuita durante todo el mes de octubre y organizará actividades especiales.",
    featured: false,
  },
  {
    id: 5,
    title: "Descubren pinturas rupestres en una cueva de Cantabria",
    slug: "descubren-pinturas-rupestres-cueva-cantabria",
    date: "12 de mayo de 2025",
    category: "Descubrimientos",
    image: "/el-greco-museum-display.png",
    excerpt:
      "Un grupo de arqueólogos ha descubierto un conjunto de pinturas rupestres de más de 15.000 años de antigüedad en una cueva de Cantabria.",
    featured: false,
  },
  {
    id: 6,
    title: "El Museo Guggenheim Bilbao presenta su programación para 2026",
    slug: "guggenheim-bilbao-programacion-2026",
    date: "25 de junio de 2025",
    category: "Programación",
    image: "/bstract-forms-reina-sofia.png",
    excerpt:
      "El Museo Guggenheim de Bilbao ha presentado su programación de exposiciones para el año 2026, con grandes nombres del arte contemporáneo.",
    featured: false,
  },
  {
    id: 7,
    title: "Restauran 'Las Meninas' de Velázquez tras un estudio exhaustivo",
    slug: "restauran-las-meninas-velazquez",
    date: "10 de julio de 2025",
    category: "Restauración",
    image: "/Prado-Museum-Artifact.png",
    excerpt:
      "Tras dos años de estudio, el Museo del Prado ha completado la restauración de 'Las Meninas' de Velázquez, revelando detalles hasta ahora desconocidos.",
    featured: false,
  },
  {
    id: 8,
    title: "El Museo Arqueológico Nacional renueva sus salas de prehistoria",
    slug: "museo-arqueologico-renueva-salas-prehistoria",
    date: "5 de agosto de 2025",
    category: "Renovaciones",
    image: "/tennis-trophy-display.png",
    excerpt:
      "El Museo Arqueológico Nacional ha renovado completamente sus salas dedicadas a la prehistoria, incorporando nuevas tecnologías y piezas nunca expuestas.",
    featured: false,
  },
]

// Categorías para filtrar
const categorias = [
  "Todas",
  "Exposiciones",
  "Eventos",
  "Adquisiciones",
  "Restauración",
  "Descubrimientos",
  "Tecnología",
  "Estadísticas",
]

export default function NoticiasPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [noticiasFiltradas, setNoticiasFiltradas] = useState(noticias)
  const [cargando, setCargando] = useState(false)
  const [visibles, setVisibles] = useState(6)

  // Noticias destacadas para el slider
  const noticiasDestacadas = noticias.filter((noticia) => noticia.featured)

  // Función para filtrar noticias por categoría
  const filtrarPorCategoria = (categoria: string) => {
    setCargando(true)
    setCategoriaSeleccionada(categoria)

    setTimeout(() => {
      if (categoria === "Todas") {
        setNoticiasFiltradas(noticias)
      } else {
        setNoticiasFiltradas(noticias.filter((noticia) => noticia.category === categoria))
      }
      setVisibles(6)
      setCargando(false)
    }, 500)
  }

  // Función para cargar más noticias
  const cargarMas = () => {
    setCargando(true)
    setTimeout(() => {
      setVisibles((prev) => Math.min(prev + 3, noticiasFiltradas.length))
      setCargando(false)
    }, 500)
  }

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          height: "50vh",
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
            backgroundImage: 'url("/abstract-shapes-museum.png")',
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
            Noticias y Actualidad
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
            Mantente al día con las últimas novedades del mundo de los museos y el arte en España
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
            <Typography color="white">Noticias</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Noticias Destacadas */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 4,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Noticias Destacadas
          </Typography>

          <Grid container spacing={4}>
            {noticiasDestacadas.map((noticia) => (
              <Grid item xs={12} md={4} key={noticia.id}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "220px",
                      mb: 2,
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Link href={`/noticias/${noticia.slug}`}>
                      <Image
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </Link>
                    <Chip
                      label={noticia.category}
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: "#d4af37",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CalendarToday sx={{ fontSize: "0.9rem", color: "#d4af37", mr: 1 }} />
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {noticia.date}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    <Link href={`/noticias/${noticia.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {noticia.title}
                    </Link>
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {noticia.excerpt}
                  </Typography>

                  <Button
                    component={Link}
                    href={`/noticias/${noticia.slug}`}
                    sx={{
                      color: "#d4af37",
                      p: 0,
                      alignSelf: "flex-start",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Leer más <ArrowForward sx={{ ml: 0.5, fontSize: "1rem" }} />
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Filtros y Listado de Noticias */}
      <Box sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 4,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Todas las Noticias
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
              {categorias.map((categoria) => (
                <Chip
                  key={categoria}
                  label={categoria}
                  onClick={() => filtrarPorCategoria(categoria)}
                  sx={{
                    bgcolor: categoriaSeleccionada === categoria ? "#d4af37" : "rgba(255,255,255,0.1)",
                    color: categoriaSeleccionada === categoria ? "black" : "white",
                    fontWeight: categoriaSeleccionada === categoria ? "bold" : "normal",
                    "&:hover": {
                      bgcolor: categoriaSeleccionada === categoria ? "#b8971f" : "rgba(255,255,255,0.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {cargando && visibles === 6 ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress sx={{ color: "#d4af37" }} />
            </Box>
          ) : noticiasFiltradas.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                No se encontraron noticias en esta categoría
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Por favor, selecciona otra categoría o vuelve a "Todas"
              </Typography>
            </Box>
          ) : (
            <>
              {noticiasFiltradas.slice(0, visibles).map((noticia, index) => (
                <Box key={noticia.id}>
                  <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          position: "relative",
                          height: { xs: "200px", md: "240px" },
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <Link href={`/noticias/${noticia.slug}`}>
                          <Image
                            src={noticia.image || "/placeholder.svg"}
                            alt={noticia.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </Link>
                        <Chip
                          label={noticia.category}
                          sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            bgcolor: "#d4af37",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <CalendarToday sx={{ fontSize: "0.9rem", color: "#d4af37", mr: 1 }} />
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                          {noticia.date}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontSize: { xs: "1.5rem", md: "1.75rem" },
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        <Link href={`/noticias/${noticia.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {noticia.title}
                        </Link>
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          mb: 3,
                        }}
                      >
                        {noticia.excerpt}
                      </Typography>

                      <Button
                        component={Link}
                        href={`/noticias/${noticia.slug}`}
                        variant="outlined"
                        sx={{
                          borderColor: "#d4af37",
                          color: "#d4af37",
                          "&:hover": {
                            borderColor: "#d4af37",
                            backgroundColor: "rgba(212, 175, 55, 0.1)",
                          },
                        }}
                      >
                        Leer artículo completo
                      </Button>
                    </Grid>
                  </Grid>
                  {index < noticiasFiltradas.slice(0, visibles).length - 1 && (
                    <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 4 }} />
                  )}
                </Box>
              ))}

              {visibles < noticiasFiltradas.length && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                  <Button
                    variant="outlined"
                    onClick={cargarMas}
                    disabled={cargando}
                    sx={{
                      borderColor: "#d4af37",
                      color: "#d4af37",
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        borderColor: "#d4af37",
                        backgroundColor: "rgba(212, 175, 55, 0.1)",
                      },
                    }}
                  >
                    {cargando ? "Cargando..." : "Cargar Más Noticias"}
                  </Button>
                </Box>
              )}

              {cargando && visibles > 6 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <CircularProgress sx={{ color: "#d4af37" }} size={30} />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>

      {/* Suscripción a Noticias */}
      <Box
        sx={{
          py: 10,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/news-subscription-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 3,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Mantente Informado
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}>
            Suscríbete a nuestro boletín de noticias para recibir las últimas novedades sobre museos, exposiciones y
            eventos culturales en España.
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
            Suscribirse al Boletín
          </Button>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
