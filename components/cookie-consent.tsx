"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Button, Paper } from "@mui/material"
import { useRouter } from "next/navigation"

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado las cookies
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setOpen(false)
  }

  const handleDecline = () => {
    // Redirigir a la página de política de cookies
    router.push("/politica-de-cookies")
  }

  if (!open) return null

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        p: 2,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2">
          Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de
          cookies.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleDecline}
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Rechazar
          </Button>
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{
              backgroundColor: "#d4af37",
              color: "black",
              "&:hover": {
                backgroundColor: "#b8971f",
              },
            }}
          >
            Aceptar
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
