import Link from "next/link"
import { Container, Grid, Typography, Box, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram, Email, Phone, LocationOn } from "@mui/icons-material"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#1a1a1a", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              <span style={{ color: "#d4af37" }}>Arte</span>Viva
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Descubre la riqueza cultural y artística de España a través de nuestros museos.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2">Calle de Alcalá, 123, 28009 Madrid, Spain</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2">+34 915 135 516</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2">info@artevivaespana.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Boletín Informativo
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Suscríbete para recibir las últimas noticias y eventos de nuestros museos.
            </Typography>
            <NewsletterForm />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} ArteViva. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/politica-de-privacidad" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Política de Privacidad</Typography>
            </Link>
            <Link href="/politica-de-cookies" style={{ color: "inherit", textDecoration: "none" }}>
              <Typography variant="body2">Política de Cookies</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
