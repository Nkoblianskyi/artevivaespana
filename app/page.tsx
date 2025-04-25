import Image from "next/image"
import Link from "next/link"
import { Container, Typography, Box, Button, Card, CardContent, CardMedia } from "@mui/material"
import Grid from "@mui/material/Grid"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const featuredMuseums = [
    {
      id: 1,
      name: "Museo del Prado",
      image: "/prado-facade.png",
      description: "Una de las pinacotecas más importantes del mundo",
      link: "/museos/prado",
    },
    {
      id: 2,
      name: "Museo Nacional de Arte Reina Sofía",
      image: "/reina-sofia-interior.png",
      description: "Arte contemporáneo español e internacional",
      link: "/museos/reina-sofia",
    },
    {
      id: 3,
      name: "Museo del Fútbol Club Barcelona",
      image: "/placeholder.svg?key=dtgsc",
      description: "Historia y trofeos del club más laureado de España",
      link: "/museos/fcb",
    },
    {
      id: 4,
      name: "Museo del Baile Flamenco",
      image: "/flamenco-essence.png",
      description: "La esencia del arte flamenco en Sevilla",
      link: "/museos/flamenco",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
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
            backgroundImage: 'url("/museo-elegancia-oscura.png")',
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
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Preservamos la Historia
            <br />
            para Construir el Futuro
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", my: 4 }} />

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Descubre la riqueza cultural y artística de España a través de nuestros museos
          </Typography>

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
        </Container>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ py: 10, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}>
                Los Mejores Museos de España
              </Typography>

              <Box sx={{ width: "80px", height: "2px", bgcolor: "#d4af37", mb: 3 }} />

              <Typography variant="body1" sx={{ mb: 4 }}>
                España alberga algunos de los museos más importantes del mundo, desde arte clásico hasta moderno, desde
                historia hasta deportes. ArteViva te invita a descubrir la riqueza cultural española a través de una
                selección de los mejores museos del país.
              </Typography>

              <Button
                component={Link}
                href="/sobre-nosotros"
                variant="text"
                sx={{
                  color: "#d4af37",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Hacer un Descubrimiento →
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: "300px", md: "400px" } }}>
                <Image
                  src="/placeholder.svg?height=800&width=600&query=Spanish museum gallery, statues"
                  alt="Galería de museo español"
                  fill
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Museums */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Museos Destacados
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", mb: 6 }} />

          <Grid container spacing={4}>
            {featuredMuseums.map((museum) => (
              <Grid item xs={12} sm={6} md={3} key={museum.id}>
                <Card
                  sx={{
                    bgcolor: "rgba(26, 26, 26, 0.8)",
                    color: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardMedia component="img" height="200" image={museum.image} alt={museum.name} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {museum.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
                      {museum.description}
                    </Typography>
                    <Button
                      component={Link}
                      href={museum.link}
                      sx={{
                        color: "#d4af37",
                        p: 0,
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Saber Más →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
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
              Ver Todos los Museos
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Gallery Preview */}
      <Box sx={{ py: 10, bgcolor: "#1a1a1a" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Galería de Imágenes
          </Typography>

          <Box sx={{ width: "100px", height: "2px", bgcolor: "#d4af37", mx: "auto", mb: 6 }} />

          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={6} md={4} key={item}>
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "75%",
                    borderRadius: "4px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=600&query=Spanish museum artifact ${item}`}
                    alt={`Galería imagen ${item}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              href="/galeria"
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
              Ver Galería Completa
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
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
            backgroundImage:
              'url("/placeholder.svg?height=800&width=1600&query=Spanish museum architecture, dark elegant")',
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
            component="h3"
            sx={{
              mb: 3,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Descubre la Historia y Cultura de España
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}>
            Contacta con nosotros para obtener más información sobre visitas guiadas, eventos especiales y exposiciones
            temporales.
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
            Contactar Ahora
          </Button>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
