import Link from "next/link"
import { Container, Typography, Box, Button } from "@mui/material"
import Grid from "@mui/material/Grid"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          height: "70vh",
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
            backgroundImage: 'url("/empty-spanish-gallery.png")',
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
              fontSize: { xs: "4rem", md: "8rem" },
              fontWeight: 700,
              mb: 2,
              color: "#d4af37",
            }}
          >
            404
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 500,
              mb: 4,
            }}
          >
            Página No Encontrada
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", my: 4 }} />

          <Typography
            variant="body1"
            component="p"
            sx={{
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Lo sentimos, la página que estás buscando no existe o ha sido trasladada. Te invitamos a explorar nuestras
            otras secciones o volver a la página de inicio.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
            <Button
              component={Link}
              href="/"
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
              Volver al Inicio
            </Button>
            <Button
              component={Link}
              href="/museos"
              variant="outlined"
              size="large"
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
              Explorar Museos
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Sugerencias */}
      <Box sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Quizás te interese visitar
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "rgba(26, 26, 26, 0.8)",
                  p: 3,
                  borderRadius: "4px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#d4af37" }}>
                  Museos Destacados
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "rgba(255,255,255,0.7)", flexGrow: 1 }}>
                  Descubre nuestra selección de los mejores museos de España, desde arte clásico hasta deportes.
                </Typography>
                <Button
                  component={Link}
                  href="/museos"
                  sx={{
                    color: "#d4af37",
                    p: 0,
                    alignSelf: "flex-start",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Ver Museos →
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "rgba(26, 26, 26, 0.8)",
                  p: 3,
                  borderRadius: "4px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#d4af37" }}>
                  Galería de Imágenes
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "rgba(255,255,255,0.7)", flexGrow: 1 }}>
                  Explora nuestra colección de imágenes de los mejores museos y obras de arte de España.
                </Typography>
                <Button
                  component={Link}
                  href="/galeria"
                  sx={{
                    color: "#d4af37",
                    p: 0,
                    alignSelf: "flex-start",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Ver Galería →
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "rgba(26, 26, 26, 0.8)",
                  p: 3,
                  borderRadius: "4px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Typography variant="h5" component="h4" sx={{ mb: 2, color: "#d4af37" }}>
                  Contacto
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "rgba(255,255,255,0.7)", flexGrow: 1 }}>
                  ¿Necesitas ayuda para encontrar algo? Ponte en contacto con nuestro equipo y te ayudaremos.
                </Typography>
                <Button
                  component={Link}
                  href="/contacto"
                  sx={{
                    color: "#d4af37",
                    p: 0,
                    alignSelf: "flex-start",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Contactar →
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
