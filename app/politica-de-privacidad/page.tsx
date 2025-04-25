import Link from "next/link"
import { Container, Typography, Box, Breadcrumbs, Paper } from "@mui/material"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PoliticaPrivacidadPage() {
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
              'url("/placeholder.svg?height=600&width=1200&query=privacy policy document, dark elegant")',
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
            Política de Privacidad
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
            <Typography color="white">Política de Privacidad</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 4, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white" }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
              Política de Privacidad de ArteViva
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              1. Introducción
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              ArteViva ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los usuarios de
              nuestro sitio web. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y
              protegemos su información cuando visita nuestro sitio web artevivaespana.com (el "Sitio").
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              2. Información que Recopilamos
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Podemos recopilar los siguientes tipos de información:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y otra
              información de contacto que usted proporcione voluntariamente a través de formularios de contacto o
              suscripción.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Información de Uso:</strong> Datos sobre cómo interactúa con nuestro Sitio, incluyendo páginas
              visitadas, tiempo de permanencia y patrones de navegación.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              <strong>Información del Dispositivo:</strong> Datos sobre el dispositivo que utiliza para acceder a
              nuestro Sitio, incluyendo tipo de dispositivo, sistema operativo y navegador.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              3. Cómo Utilizamos su Información
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Utilizamos la información recopilada para:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Proporcionar, mantener y mejorar nuestro Sitio y servicios.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Responder a sus consultas, comentarios o solicitudes.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Enviar información sobre nuestros museos, eventos y exposiciones.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Analizar tendencias de uso y mejorar la experiencia del usuario.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              • Proteger la seguridad e integridad de nuestro Sitio.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              4. Divulgación de su Información
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              No vendemos, comercializamos ni alquilamos su información personal a terceros. Podemos compartir su
              información en las siguientes circunstancias:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Con proveedores de servicios que nos ayudan a operar nuestro Sitio.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Para cumplir con obligaciones legales o responder a solicitudes legales.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              • Para proteger los derechos, la propiedad o la seguridad de ArteViva, nuestros usuarios o el público.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              5. Sus Derechos
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              De acuerdo con la legislación aplicable, usted puede tener derecho a:
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Acceder a la información personal que tenemos sobre usted.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Corregir datos inexactos o incompletos.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Solicitar la eliminación de su información personal.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              • Oponerse al procesamiento de sus datos personales.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              • Retirar su consentimiento en cualquier momento.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              6. Seguridad de los Datos
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
              personal contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ninguna transmisión por
              Internet o método de almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su
              seguridad absoluta.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              7. Enlaces a Sitios de Terceros
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Nuestro Sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de
              privacidad o el contenido de estos sitios. Le recomendamos revisar las políticas de privacidad de
              cualquier sitio que visite.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              8. Cambios a esta Política
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre
              disponible en nuestro Sitio con la fecha de la última actualización. Le recomendamos revisar esta política
              regularmente.
            </Typography>

            <Typography variant="h5" component="h3" sx={{ mb: 2, mt: 4 }}>
              9. Contacto
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Si tiene preguntas o inquietudes sobre esta Política de Privacidad, por favor contáctenos en:
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
