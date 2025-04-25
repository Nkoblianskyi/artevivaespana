"use client"

import type React from "react"

import { useState } from "react"
import { TextField, Button, Box, Alert, Collapse } from "@mui/material"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Aquí iría la lógica para enviar el email a un servicio
      setSuccess(true)
      setEmail("")
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            color: "white",
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
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
            opacity: 1,
          },
        }}
      />
      <Button
        type="submit"
        variant="outlined"
        fullWidth
        sx={{
          borderColor: "#d4af37",
          color: "#d4af37",
          "&:hover": {
            borderColor: "#d4af37",
            backgroundColor: "rgba(212, 175, 55, 0.1)",
          },
        }}
      >
        Suscribirse
      </Button>

      <Collapse in={success}>
        <Alert severity="success" sx={{ mt: 2, backgroundColor: "rgba(46, 125, 50, 0.1)", color: "#4caf50" }}>
          ¡Gracias por suscribirte a nuestro boletín!
        </Alert>
      </Collapse>
    </Box>
  )
}
