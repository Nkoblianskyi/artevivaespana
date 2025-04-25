"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container, Typography, Box, Button, Breadcrumbs, Tabs, Tab, CircularProgress } from "@mui/material"
import Grid from "@mui/material/Grid"
import { ArrowForward } from "@mui/icons-material"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageModal from "@/components/image-modal"
import GalleryCarousel from "@/components/gallery-carousel"

// Datos de las imágenes de la galería
const galleryData = [
  {
    id: 1,
    src: "/Prado-Museum-Artifact.png",
    alt: "Las Meninas de Velázquez",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Una de las obras maestras más importantes de la historia del arte occidental, pintada en 1656.",
  },
  {
    id: 2,
    src: "/abstract-forms-reina-sofia.png",
    alt: "Guernica de Picasso",
    category: "Arte",
    museum: "Museo Reina Sofía",
    description:
      "Obra emblemática de Pablo Picasso que representa el bombardeo de Guernica durante la Guerra Civil Española.",
  },
  {
    id: 3,
    src: "/barcelona-champions-league-display.png",
    alt: "Trofeos del FC Barcelona",
    category: "Deporte",
    museum: "Museo del FC Barcelona",
    description: "Colección de trofeos ganados por el FC Barcelona a lo largo de su historia.",
  },
  {
    id: 4,
    src: "/flamenco.png",
    alt: "Bailaora de Flamenco",
    category: "Cultura",
    museum: "Museo del Baile Flamenco",
    description: "Representación del arte del flamenco, declarado Patrimonio Cultural Inmaterial de la Humanidad.",
  },
  {
    id: 5,
    src: "/el-greco-museum-display.png",
    alt: "El caballero de la mano en el pecho",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Obra maestra de El Greco, pintada entre 1578 y 1580.",
  },
  {
    id: 6,
    src: "/tennis-trophy-display.png",
    alt: "Trofeos de Grand Slam",
    category: "Deporte",
    museum: "Museo Rafael Nadal",
    description: "Colección de trofeos de Grand Slam ganados por Rafael Nadal a lo largo de su carrera.",
  },
  {
    id: 7,
    src: "/spanish-museum-portrait.png",
    alt: "La maja desnuda",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Obra de Francisco de Goya pintada entre 1795 y 1800.",
  },
  {
    id: 8,
    src: "/vintage-bullfight-poster.png",
    alt: "Cartel taurino histórico",
    category: "Historia",
    museum: "Museo Taurino de Madrid",
    description: "Cartel histórico de una corrida de toros celebrada en Madrid en 1922.",
  },
  {
    id: 9,
    src: "/surreal-still-life.png",
    alt: "La persistencia de la memoria",
    category: "Arte",
    museum: "Teatro-Museo Dalí",
    description: "Famosa obra de Salvador Dalí, también conocida como 'Los relojes blandos'.",
  },
  {
    id: 10,
    src: "/barcelona-jersey-wall.png",
    alt: "Muro de camisetas históricas",
    category: "Deporte",
    museum: "Museo del FC Barcelona",
    description: "Exposición de camisetas históricas del FC Barcelona a lo largo de diferentes épocas.",
  },
  {
    id: 11,
    src: "/abstract-shapes-museum.png",
    alt: "Constelaciones",
    category: "Arte",
    museum: "Museo Reina Sofía",
    description: "Serie de pinturas de Joan Miró realizadas entre 1939 y 1941.",
  },
  {
    id: 12,
    src: "public/roman-bust-museum.png",
    alt: "Estatua romana de Augusto",
    category: "Historia",
    museum: "Museo Nacional de Arte Romano",
    description: "Estatua de mármol del emperador Augusto, siglo I d.C.",
  },
  {
    id: 13,
    src: "/sorolla-museum-hall.png",
    alt: "Paseo a orillas del mar",
    category: "Arte",
    museum: "Museo Sorolla",
    description: "Obra de Joaquín Sorolla pintada en 1909, que refleja la luz mediterránea.",
  },
  {
    id: 14,
    src: "/flamenco-2.png",
    alt: "Trajes de flamenca",
    category: "Cultura",
    museum: "Museo del Baile Flamenco",
    description: "Colección de trajes tradicionales de flamenca con sus característicos volantes y colores vivos.",
  },
  {
    id: 15,
    src: "/thu.jpg",
    alt: "Mujer con sombrilla",
    category: "Arte",
    museum: "Museo Thyssen-Bornemisza",
    description: "Obra impresionista de Claude Monet, pintada en 1875.",
  },
  {
    id: 16,
    src: "/nadal-olympic-triumph.png",
    alt: "Medalla olímpica de Nadal",
    category: "Deporte",
    museum: "Museo Rafael Nadal",
    description: "Medalla de oro ganada por Rafael Nadal en los Juegos Olímpicos de Pekín 2008.",
  },
]

// Categorías para filtrar
const categorias = ["Todos", "Arte", "Deporte", "Historia", "Cultura"]

// Función para obtener las imágenes destacadas para el carrusel
const getCarouselItems = () => {
  return [
    {
      image: "/Prado-Museum-Artifact.png",
      title: "Las Meninas de Velázquez",
      description: "Una de las obras maestras más importantes de la historia del arte occidental, pintada en 1656.",
      link: "/galeria",
    },
    {
      image: "/flamenco-2.png",
      title: "Arte del Flamenco",
      description: "Representación del arte del flamenco, declarado Patrimonio Cultural Inmaterial de la Humanidad.",
      link: "/galeria",
    },
    {
      image: "/tennis-trophy-display.png",
      title: "Trofeos de Grand Slam",
      description: "Colección de trofeos de Grand Slam ganados por Rafael Nadal a lo largo de su carrera.",
      link: "/galeria",
    },
  ]
}

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredImages, setFilteredImages] = useState<typeof galleryData>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  // Efecto para filtrar las imágenes por categoría
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (selectedCategory === "Todos") {
        // Para cada categoría, mostrar solo 2 imágenes
        const limitedImages: typeof galleryData = []
        const categories = ["Arte", "Deporte", "Historia", "Cultura"]

        categories.forEach((category) => {
          const categoryImages = galleryData.filter((item) => item.category === category).slice(0, 2)
          limitedImages.push(...categoryImages)
        })

        setFilteredImages(limitedImages)
      } else {
        // Para la categoría seleccionada, mostrar solo 2 imágenes
        const categoryImages = galleryData.filter((item) => item.category === selectedCategory).slice(0, 2)
        setFilteredImages(categoryImages)
      }
      setLoading(false)
    }, 500)
  }, [selectedCategory])

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue)
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const handleViewAllCategory = (category: string) => {
    // Aquí podrías implementar la lógica para ver todas las imágenes de una categoría
    console.log(`Ver todas las imágenes de la categoría: ${category}`)
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
            backgroundImage: 'url("/museo-madrid-gallery.png")',
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
            Galería
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
            Explora nuestra colección de imágenes de los mejores museos de España
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
            <Typography color="white">Galería</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Carrusel destacado */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 4,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              textAlign: "center",
            }}
          >
            Obras Destacadas
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", mb: 6 }} />

          <GalleryCarousel items={getCarouselItems()} />
        </Container>
      </Box>

      {/* Categorías y Galería */}
      <Box sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              sx={{
                ".MuiTabs-indicator": {
                  backgroundColor: "#d4af37",
                },
                ".MuiTab-root": {
                  color: "rgba(255,255,255,0.7)",
                  "&.Mui-selected": {
                    color: "#d4af37",
                  },
                },
              }}
            >
              {categorias.map((categoria) => (
                <Tab key={categoria} label={categoria} value={categoria} />
              ))}
            </Tabs>
          </Box>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
              <CircularProgress sx={{ color: "#d4af37" }} />
            </Box>
          ) : filteredImages.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                No se encontraron imágenes en esta categoría
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Por favor, selecciona otra categoría o vuelve a "Todos"
              </Typography>
            </Box>
          ) : (
            <>
              {/* Mostrar imágenes por categoría */}
              {selectedCategory === "Todos" ? (
                // Mostrar todas las categorías con máximo 2 imágenes por categoría
                categorias
                  .slice(1)
                  .map((categoria) => {
                    const categoryImages = filteredImages.filter((item) => item.category === categoria)
                    if (categoryImages.length === 0) return null

                    return (
                      <Box key={categoria} sx={{ mb: 8 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                          <Typography variant="h4" component="h3">
                            {categoria}
                          </Typography>
                          <Button
                            onClick={() => handleViewAllCategory(categoria)}
                            sx={{
                              color: "#d4af37",
                              "&:hover": {
                                backgroundColor: "transparent",
                                textDecoration: "underline",
                              },
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Ver todo <ArrowForward sx={{ ml: 0.5, fontSize: "1rem" }} />
                          </Button>
                        </Box>

                        <Grid container spacing={3}>
                          {categoryImages.map((item, index) => (
                            <Grid item xs={12} sm={6} md={6} key={item.id}>
                              <Box
                                sx={{
                                  position: "relative",
                                  paddingTop: "75%",
                                  borderRadius: "4px",
                                  overflow: "hidden",
                                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                  cursor: "pointer",
                                  "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                                    "& .overlay": {
                                      opacity: 1,
                                    },
                                  },
                                }}
                                onClick={() => handleImageClick(filteredImages.indexOf(item))}
                              >
                                <Image
                                  src={item.src || "/placeholder.svg"}
                                  alt={item.alt}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                />
                                <Box
                                  className="overlay"
                                  sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                    padding: 2,
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
                                  >
                                    {item.alt}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: "#d4af37", textAlign: "center", mt: 1 }}>
                                    {item.museum}
                                  </Typography>
                                  <Button
                                    sx={{
                                      color: "white",
                                      borderColor: "white",
                                      borderWidth: 1,
                                      borderStyle: "solid",
                                      mt: 2,
                                      "&:hover": {
                                        borderColor: "#d4af37",
                                        color: "#d4af37",
                                      },
                                    }}
                                    size="small"
                                  >
                                    Ver Detalle
                                  </Button>
                                </Box>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )
                  })
              ) : (
                // Mostrar solo la categoría seleccionada
                <Box>
                  <Grid container spacing={3}>
                    {filteredImages.map((item, index) => (
                      <Grid item xs={12} sm={6} md={6} key={item.id}>
                        <Box
                          sx={{
                            position: "relative",
                            paddingTop: "75%",
                            borderRadius: "4px",
                            overflow: "hidden",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "pointer",
                            "&:hover": {
                              transform: "scale(1.03)",
                              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                              "& .overlay": {
                                opacity: 1,
                              },
                            },
                          }}
                          onClick={() => handleImageClick(index)}
                        >
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                          />
                          <Box
                            className="overlay"
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundColor: "rgba(0,0,0,0.7)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              padding: 2,
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
                            >
                              {item.alt}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#d4af37", textAlign: "center", mt: 1 }}>
                              {item.museum}
                            </Typography>
                            <Button
                              sx={{
                                color: "white",
                                borderColor: "white",
                                borderWidth: 1,
                                borderStyle: "solid",
                                mt: 2,
                                "&:hover": {
                                  borderColor: "#d4af37",
                                  color: "#d4af37",
                                },
                              }}
                              size="small"
                            >
                              Ver Detalle
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleViewAllCategory(selectedCategory)}
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
                      Ver Todas las Imágenes de {selectedCategory}
                    </Button>
                  </Box>
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>

      {/* Modal para ver imágenes */}
      <ImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={filteredImages.map((item) => ({
          src: item.src,
          alt: item.alt,
          museum: item.museum,
          description: item.description,
        }))}
        currentIndex={currentImageIndex}
      />

      <Footer />
    </main>
  )
}
