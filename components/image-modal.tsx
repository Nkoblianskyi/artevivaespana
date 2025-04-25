"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Box, Modal, IconButton, Typography } from "@mui/material"
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import Image from "next/image"

interface ImageModalProps {
  open: boolean
  onClose: () => void
  images: {
    src: string
    alt: string
    museum?: string
    description?: string
  }[]
  currentIndex: number
}

export default function ImageModal({ open, onClose, images, currentIndex }: ImageModalProps) {
  const [index, setIndex] = useState(currentIndex)

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!images.length) return null

  const currentImage = images[index]

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-image-title"
      aria-describedby="modal-image-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%",
          height: "90%",
          maxWidth: "1200px",
          bgcolor: "rgba(0, 0, 0, 0.9)",
          borderRadius: "8px",
          outline: "none",
          p: 2,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            zIndex: 10,
          }}
        >
          <Close />
        </IconButton>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "calc(100% - 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={currentImage.src || "/placeholder.svg"}
              alt={currentImage.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 1200px) 90vw, 1200px"
              priority
            />
          </Box>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 10, md: 20 },
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 10, md: 20 },
              color: "white",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>

        <Box sx={{ mt: 2, color: "white", textAlign: "center" }}>
          <Typography variant="h6" component="h3">
            {currentImage.alt}
          </Typography>
          {currentImage.museum && (
            <Typography variant="body2" sx={{ color: "#d4af37", mt: 0.5 }}>
              {currentImage.museum}
            </Typography>
          )}
          {currentImage.description && (
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 1 }}>
              {currentImage.description}
            </Typography>
          )}
          <Typography variant="caption" sx={{ display: "block", mt: 1, color: "rgba(255,255,255,0.5)" }}>
            {index + 1} / {images.length}
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}
