"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (!images.length) return null

  const currentImage = images[index]

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[90vw] h-[80vh] p-0 bg-black/95 border-gray-800">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 text-white hover:bg-white/20 z-50"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar</span>
        </Button>

        <div className="relative h-[calc(100%-100px)] w-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={currentImage?.src || "/placeholder.svg"}
              alt={currentImage?.alt || ""}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 rounded-full bg-black/50 hover:bg-black/70 text-white"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 rounded-full bg-black/50 hover:bg-black/70 text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-1">{currentImage?.alt}</h3>
          {currentImage?.museum && (
            <Badge className="bg-[#d4af37] text-black hover:bg-[#c49f32] mb-3">{currentImage.museum}</Badge>
          )}
          {currentImage?.description && <p className="text-gray-300 mb-2">{currentImage.description}</p>}
          <p className="text-xs text-gray-400">
            {index + 1} / {images.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
