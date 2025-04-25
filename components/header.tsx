"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const menuItems = [
    { text: "Inicio", href: "/" },
    { text: "Museos", href: "/museos" },
    { text: "Galería", href: "/galeria" },
    { text: "Noticias", href: "/noticias" },
    { text: "Contacto", href: "/contacto" },
  ]

  return (
    <AppBar position="fixed" sx={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#d4af37", marginRight: "8px" }}>Arte</span>Viva
          </Link>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button key={item.text} color="inherit" component={Link} href={item.href}>
              {item.text}
            </Button>
          ))}
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
