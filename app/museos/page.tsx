import Link from "next/link"
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Breadcrumbs } from "@mui/material"
import Grid from "@mui/material/Grid"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MuseosPage() {
  const museos = [
    {
      id: 1,
      name: "Museo del Prado",
      image: "/prado-facade.png",
      description:
        "Una de las pinacotecas más importantes del mundo, con obras maestras de Velázquez, Goya y El Bosco.",
      category: "Arte",
      location: "Madrid",
      link: "/museos/prado",
    },
    {
      id: 2,
      name: "Museo Nacional de Arte Reina Sofía",
      image: "/reina-sofia-interior.png",
      description: "Dedicado al arte contemporáneo español e internacional, alberga el Guernica de Picasso.",
      category: "Arte Contemporáneo",
      location: "Madrid",
      link: "/museos/reina-sofia",
    },
    {
      id: 3,
      name: "Museo del Fútbol Club Barcelona",
      image: "/barcelona-museum.png",
      description: "Recorre la historia del club blaugrana y admira sus numerosos trofeos y recuerdos históricos.",
      category: "Deporte",
      location: "Barcelona",
      link: "/museos/fcb",
    },
    {
      id: 4,
      name: "Museo del Baile Flamenco",
      image: "/flamenco-essence.png",
      description: "Un espacio dedicado al arte del flamenco, con exposiciones, espectáculos y talleres.",
      category: "Danza",
      location: "Sevilla",
      link: "/museos/flamenco",
    },
    {
      id: 5,
      name: "Museo Taurino de Madrid",
      image: "/museum-madrid.png",
      description: "Colección de trajes, carteles y enseres relacionados con la tauromaquia española.",
      category: "Tauromaquia",
      location: "Madrid",
      link: "/museos/taurino",
    },
    {
      id: 6,
      name: "Museo del Tenis Rafael Nadal",
      image: "/museum-rafal.png",
      description: "Dedicado a la carrera del tenista español más laureado de la historia.",
      category: "Deporte",
      location: "Mallorca",
      link: "/museos/nadal",
    },
    {
      id: 7,
      name: "Museo Thyssen-Bornemisza",
      image: "/placeholder.svg?height=400&width=600&query=Museo Thyssen, Madrid",
      description: "Una de las colecciones de arte privadas más importantes del mundo, ahora de propiedad pública.",
      category: "Arte",
      location: "Madrid",
      link: "/museos/thyssen",
    },
    {
      id: 8,
      name: "Museo Guggenheim",
      image: "/placeholder.svg?height=400&width=600&query=Museo Guggenheim, Bilbao",
      description: "Icono arquitectónico que alberga importantes exposiciones de arte contemporáneo.",
      category: "Arte Contemporáneo",
      location: "Bilbao",
      link: "/museos/guggenheim",
    },
  ]

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
              'url("/placeholder.svg?height=800&width=1600&query=Spanish museums collection, dark elegant")',
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
            Museos de España
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
            Descubre nuestra selección de los mejores museos de arte, historia, cultura y deporte
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
            <Typography color="white">Museos</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Museums List */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {museos.map((museo) => (
              <Grid item xs={12} sm={6} md={4} key={museo.id}>
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
                  <CardMedia component="img" height="200" image={museo.image} alt={museo.name} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="caption" sx={{ color: "#d4af37" }}>
                        {museo.category}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        {museo.location}
                      </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                      {museo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}>
                      {museo.description}
                    </Typography>
                    <Button
                      component={Link}
                      href={museo.link}
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
            ¿Necesitas Más Información?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px", mx: "auto" }}>
            Contacta con nuestro equipo para obtener información detallada sobre horarios, exposiciones especiales y
            visitas guiadas.
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
