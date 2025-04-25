"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Box, Typography, Button, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

interface GalleryItem {
  image: string
  title: string
  description: string
  link: string
  museumId?: string
}

interface GalleryCarouselProps {
  items: GalleryItem[]
}

export default function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  if (!items.length) return null

  const currentItem = items[currentIndex]

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "400px", md: "500px" },
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {/* Imagen de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
            zIndex: 2,
          },
        }}
      >
        <Image
          src={currentItem.image || "/placeholder.svg"}
          alt={currentItem.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: { xs: 3, md: 5 },
          zIndex: 3,
          color: "white",
        }}
      >
        <Typography variant="h4" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
          {currentItem.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: "800px" }}>
          {currentItem.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            href={currentItem.museumId ? `/museos/${currentItem.museumId}` : currentItem.link}
            variant="contained"
            sx={{
              backgroundColor: "#d4af37",
              color: "black",
              "&:hover": {
                backgroundColor: "#b8971f",
              },
            }}
          >
            Saber Más
          </Button>
          <Button
            component={Link}
            href="/contacto"
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": {
                borderColor: "#d4af37",
                color: "#d4af37",
                backgroundColor: "transparent",
              },
            }}
          >
            Hacer un Descubrimiento
          </Button>
        </Box>
      </Box>

      {/* Controles */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: 10, md: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 10, md: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <ChevronRight />
      </IconButton>

      {/* Indicadores */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 4,
          display: "flex",
          gap: 1,
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#d4af37" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  )
}
