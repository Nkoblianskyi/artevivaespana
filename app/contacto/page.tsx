"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container, Typography, Box, Grid, TextField, Button, Paper, Breadcrumbs, Alert, Collapse } from "@mui/material"
import { LocationOn, Phone, Email } from "@mui/icons-material"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Interfaz para los errores del formulario
interface FormErrors {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    museo: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const [formValid, setFormValid] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Validar el formulario cuando cambian los datos
  useEffect(() => {
    validateForm()
  }, [formData])

  const validateForm = () => {
    const newErrors: FormErrors = {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    }
    let isValid = true

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
      isValid = false
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres"
      isValid = false
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un correo electrónico válido"
      isValid = false
    }

    // Validar teléfono (opcional pero si se proporciona debe ser válido)
    if (formData.telefono.trim()) {
      const phoneRegex = /^[0-9+\s()-]{9,15}$/
      if (!phoneRegex.test(formData.telefono)) {
        newErrors.telefono = "Introduce un número de teléfono válido"
        isValid = false
      }
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio"
      isValid = false
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
      isValid = false
    }

    setErrors(newErrors)
    setFormValid(isValid)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Validar una última vez antes de enviar
    validateForm()

    if (formValid) {
      // Aquí iría la lógica para enviar el formulario
      console.log(formData)
      setSuccess(true)

      // Resetear el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        museo: "",
        mensaje: "",
      })
      setSubmitted(false)

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
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
            backgroundImage: 'url("/museo-informacion.png")',
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
            Contacto
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
            Estamos aquí para responder a todas tus preguntas sobre nuestros museos
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
            <Typography color="white">Contacto</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                Envíanos un Mensaje
              </Typography>

              <Box sx={{ width: "80px", height: "2px", bgcolor: "#d4af37", mb: 4 }} />

              <Typography variant="body1" sx={{ mb: 4 }}>
                Completa el formulario a continuación para obtener más información sobre nuestros museos, exposiciones o
                eventos. Nuestro equipo te responderá lo antes posible.
              </Typography>

              <Collapse in={success}>
                <Alert severity="success" sx={{ mb: 4, backgroundColor: "rgba(46, 125, 50, 0.1)", color: "#4caf50" }}>
                  ¡Gracias por tu mensaje! Te responderemos lo antes posible.
                </Alert>
              </Collapse>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={submitted && !!errors.nombre}
                      helperText={submitted && errors.nombre}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#f44336",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "#f44336",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Correo electrónico"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      error={submitted && !!errors.email}
                      helperText={submitted && errors.email}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#f44336",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "#f44336",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      variant="outlined"
                      error={submitted && !!errors.telefono}
                      helperText={submitted && errors.telefono}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#f44336",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "#f44336",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Museo de interés"
                      name="museo"
                      value={formData.museo}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      error={submitted && !!errors.mensaje}
                      helperText={submitted && errors.mensaje}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-error fieldset": {
                            borderColor: "#f44336",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "#f44336",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: "#d4af37",
                        color: "black",
                        py: 1.5,
                        "&:hover": {
                          backgroundColor: "#b8971f",
                        },
                        "&.Mui-disabled": {
                          backgroundColor: "rgba(212, 175, 55, 0.5)",
                          color: "rgba(0, 0, 0, 0.5)",
                        },
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, bgcolor: "rgba(26, 26, 26, 0.8)", color: "white", height: "100%" }}>
                <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
                  Información de Contacto
                </Typography>

                <Box sx={{ width: "80px", height: "2px", bgcolor: "#d4af37", mb: 4 }} />

                <Box sx={{ display: "flex", mb: 4 }}>
                  <LocationOn sx={{ color: "#d4af37", fontSize: "2rem", mr: 2 }} />
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      Dirección
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      Calle de Alcalá, 123
                      <br />
                      28009 Madrid, España
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 4 }}>
                  <Phone sx={{ color: "#d4af37", fontSize: "2rem", mr: 2 }} />
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      Teléfono
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      +34 915 135 516
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 4 }}>
                  <Email sx={{ color: "#d4af37", fontSize: "2rem", mr: 2 }} />
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      Correo Electrónico
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      info@artevivaespana.com
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" component="h3" sx={{ mb: 2, mt: 6 }}>
                  Horario de Atención
                </Typography>

                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}>
                  Lunes a Viernes: 9:00 - 18:00
                </Typography>

                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Sábados: 10:00 - 14:00
                </Typography>

                <Typography variant="body2" sx={{ mt: 6 }}>
                  También puedes seguirnos en nuestras redes sociales para estar al día de todas nuestras novedades y
                  eventos.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </main>
  )
}
