import Link from "next/link"
import { Container, Typography, Box, Breadcrumbs, Paper } from "@mui/material"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PoliticaCookiesPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          height: "30vh",
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
              'url("/surreal-still-life.png")',
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
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Política de Cookies
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
            <Typography color="white">Política de Cookies</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white" }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
              Política de Cookies de ArteViva
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              1. ¿Qué son las Cookies?
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
              cuando visita un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web funcionen de
              manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              2. Tipos de Cookies que Utilizamos
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              En nuestro sitio web utilizamos los siguientes tipos de cookies:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio web. Permiten
              navegar por el sitio y utilizar sus funciones.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Cookies de Preferencias:</strong> Permiten recordar información que cambia el aspecto o el
              comportamiento del sitio, como su idioma preferido o la región en la que se encuentra.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Cookies Estadísticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio,
              recopilando y reportando información de forma anónima.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              <strong>Cookies de Marketing:</strong> Se utilizan para rastrear a los visitantes en los sitios web. La
              intención es mostrar anuncios relevantes y atractivos para el usuario individual.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              3. Control de Cookies
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una
              cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no
              funcionen correctamente.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              La mayoría de los navegadores le permiten:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Ver las cookies que tiene y eliminarlas individualmente.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Bloquear cookies de terceros.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Bloquear cookies de sitios específicos.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Bloquear todas las cookies.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              • Eliminar todas las cookies cuando cierre su navegador.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              4. Cookies de Terceros
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. Utilizamos
              servicios de terceros para:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Analítica web (Google Analytics)
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Mapas interactivos (Google Maps)
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              • Botones para compartir en redes sociales (Facebook, Twitter, Instagram)
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              5. Cambios en nuestra Política de Cookies
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta
              página. Por favor, compruebe con frecuencia para ver cualquier actualización o cambio en nuestra política
              de cookies.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              6. Contacto
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Si tiene alguna pregunta sobre nuestra política de cookies, por favor contáctenos en:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Email: info@artevivaespana.com
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Teléfono: +34 915 135 516
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Dirección: Calle de Alcalá, 123, 28009 Madrid, España
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
