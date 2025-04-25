"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container, Typography, Box, Button, Breadcrumbs, Tabs, Tab, CircularProgress } from "@mui/material"
import Grid from "@mui/material/Grid"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageModal from "@/components/image-modal"

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
    alt: "Trofeos de Champions League",
    category: "Deporte",
    museum: "Museo del FC Barcelona",
    description: "Colección de las cinco Copas de Europa ganadas por el FC Barcelona a lo largo de su historia.",
  },
  {
    id: 4,
    src: "/passionate-flamenco.png",
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
    src: "/roman-bust-museum.png",
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
    src: "/placeholder.svg?height=400&width=600&query=Spanish flamenco dress exhibition",
    alt: "Trajes de flamenca",
    category: "Cultura",
    museum: "Museo del Baile Flamenco",
    description: "Colección de trajes tradicionales de flamenca con sus característicos volantes y colores vivos.",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Thyssen impressionist",
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
  {
    id: 17,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Picasso blue period",
    alt: "La vida",
    category: "Arte",
    museum: "Museo Picasso Barcelona",
    description: "Obra emblemática del período azul de Pablo Picasso, pintada en 1903.",
  },
  {
    id: 18,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact medieval manuscript",
    alt: "Beato de Liébana",
    category: "Historia",
    museum: "Biblioteca Nacional de España",
    description: "Manuscrito medieval iluminado del siglo X, con comentarios al Apocalipsis.",
  },
  {
    id: 19,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Zurbaran painting",
    alt: "Bodegón con cacharros",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Naturaleza muerta de Francisco de Zurbarán, pintada hacia 1650.",
  },
  {
    id: 20,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Goya black paintings",
    alt: "Saturno devorando a su hijo",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Una de las Pinturas negras de Francisco de Goya, realizada entre 1819 y 1823.",
  },
  {
    id: 21,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Velazquez painting",
    alt: "Las hilanderas",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Obra de Diego Velázquez, también conocida como 'La fábula de Aracne', pintada hacia 1657.",
  },
  {
    id: 22,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Greco painting",
    alt: "El entierro del Conde de Orgaz",
    category: "Arte",
    museum: "Iglesia de Santo Tomé",
    description: "Obra maestra de El Greco, pintada entre 1586 y 1588.",
  },
  {
    id: 23,
    src: "/placeholder.svg?height=400&width=600&query=Spanish museum artifact Iberian sculpture",
    alt: "Dama de Elche",
    category: "Historia",
    museum: "Museo Arqueológico Nacional",
    description: "Busto íbero del siglo IV a.C., uno de los iconos de la arqueología española.",
  },
  {
    id: 24,
    src: "/barcelona-jersey-wall.png",
    alt: "Bisonte de Altamira",
    category: "Historia",
    museum: "Museo de Altamira",
    description: "Reproducción de las pinturas rupestres de la cueva de Altamira, datadas hace unos 14.000 años.",
  },
]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredImages, setFilteredImages] = useState(galleryData)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(12)

  const categories = ["Todos", "Arte", "Deporte", "Historia", "Cultura"]

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (selectedCategory === "Todos") {
        setFilteredImages(galleryData)
      } else {
        setFilteredImages(galleryData.filter((item) => item.category === selectedCategory))
      }
      setLoading(false)
    }, 500) // Simulamos una pequeña carga para mostrar el efecto
  }, [selectedCategory])

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue)
    setVisibleCount(12) // Resetear la cantidad visible al cambiar de categoría
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 8, filteredImages.length))
      setLoading(false)
    }, 500)
  }

  const visibleImages = filteredImages.slice(0, visibleCount)

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
            backgroundImage:
              'url("/placeholder.svg?height=800&width=1600&query=Spanish museum gallery, art exhibition")',
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

      {/* Gallery */}
      <Box sx={{ py: 8 }}>
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
              {categories.map((category) => (
                <Tab key={category} label={category} value={category} />
              ))}
            </Tabs>
          </Box>

          {loading && visibleCount === 12 ? (
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
            <Grid container spacing={3}>
              {visibleImages.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
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
                      sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
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
                      <Typography variant="subtitle1" sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
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
          )}

          {!loading && visibleCount < filteredImages.length && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Button
                variant="outlined"
                onClick={handleLoadMore}
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
                Cargar Más
              </Button>
            </Box>
          )}

          {loading && visibleCount > 12 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress sx={{ color: "#d4af37" }} size={30} />
            </Box>
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
