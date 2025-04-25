"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageModal from "@/components/image-modal"
import GalleryCarousel from "@/components/gallery-carousel"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

// Datos de las imágenes de la galería
const galleryData = [
  {
    id: 1,
    src: "/Prado-Museum-Artifact.png",
    alt: "Las Meninas de Velázquez",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Una de las obras maestras más importantes de la historia del arte occidental, pintada en 1656.",
  },
  {
    id: 2,
    src: "/abstract-forms-reina-sofia.png",
    alt: "Guernica de Picasso",
    category: "Arte",
    museum: "Museo Reina Sofía",
    description:
      "Obra emblemática de Pablo Picasso que representa el bombardeo de Guernica durante la Guerra Civil Española.",
  },
  {
    id: 3,
    src: "/barcelona-champions-league-display.png",
    alt: "Trofeos del FC Barcelona",
    category: "Deporte",
    museum: "Museo del FC Barcelona",
    description: "Colección de trofeos ganados por el FC Barcelona a lo largo de su historia.",
  },
  {
    id: 4,
    src: "/flamenco-2.png",
    alt: "Bailaora de Flamenco",
    category: "Cultura",
    museum: "Museo del Baile Flamenco",
    description: "Representación del arte del flamenco, declarado Patrimonio Cultural Inmaterial de la Humanidad.",
  },
  {
    id: 5,
    src: "/el-greco-museum-display.png",
    alt: "El caballero de la mano en el pecho",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Obra maestra de El Greco, pintada entre 1578 y 1580.",
  },
  {
    id: 6,
    src: "/tennis-trophy-display.png",
    alt: "Trofeos de Grand Slam",
    category: "Deporte",
    museum: "Museo Rafael Nadal",
    description: "Colección de trofeos de Grand Slam ganados por Rafael Nadal a lo largo de su carrera.",
  },
  {
    id: 7,
    src: "/spanish-museum-portrait.png",
    alt: "La maja desnuda",
    category: "Arte",
    museum: "Museo del Prado",
    description: "Obra de Francisco de Goya pintada entre 1795 y 1800.",
  },
  {
    id: 8,
    src: "/vintage-bullfight-poster.png",
    alt: "Cartel taurino histórico",
    category: "Historia",
    museum: "Museo Taurino de Madrid",
    description: "Cartel histórico de una corrida de toros celebrada en Madrid en 1922.",
  },
  {
    id: 9,
    src: "/surreal-still-life.png",
    alt: "La persistencia de la memoria",
    category: "Arte",
    museum: "Teatro-Museo Dalí",
    description: "Famosa obra de Salvador Dalí, también conocida como 'Los relojes blandos'.",
  },
  {
    id: 10,
    src: "/barcelona-jersey-wall.png",
    alt: "Muro de camisetas históricas",
    category: "Deporte",
    museum: "Museo del FC Barcelona",
    description: "Exposición de camisetas históricas del FC Barcelona a lo largo de diferentes épocas.",
  },
  {
    id: 11,
    src: "/abstract-shapes-museum.png",
    alt: "Constelaciones",
    category: "Arte",
    museum: "Museo Reina Sofía",
    description: "Serie de pinturas de Joan Miró realizadas entre 1939 y 1941.",
  },
  {
    id: 12,
    src: "/roman-bust-museum.png",
    alt: "Estatua romana de Augusto",
    category: "Historia",
    museum: "Museo Nacional de Arte Romano",
    description: "Estatua de mármol del emperador Augusto, siglo I d.C.",
  },
  {
    id: 13,
    src: "/sorolla-museum-hall.png",
    alt: "Paseo a orillas del mar",
    category: "Arte",
    museum: "Museo Sorolla",
    description: "Obra de Joaquín Sorolla pintada en 1909, que refleja la luz mediterránea.",
  },
  {
    id: 14,
    src: "/flamenco-2.png",
    alt: "Trajes de flamenca",
    category: "Cultura",
    museum: "Museo del Baile Flamenco",
    description: "Colección de trajes tradicionales de flamenca con sus característicos volantes y colores vivos.",
  },
  {
    id: 15,
    src: "/thu.jpg",
    alt: "Mujer con sombrilla",
    category: "Arte",
    museum: "Museo Thyssen-Bornemisza",
    description: "Obra impresionista de Claude Monet, pintada en 1875.",
  },
  {
    id: 16,
    src: "/nadal-olympic-triumph.png",
    alt: "Medalla olímpica de Nadal",
    category: "Deporte",
    museum: "Museo Rafael Nadal",
    description: "Medalla de oro ganada por Rafael Nadal en los Juegos Olímpicos de Pekín 2008.",
  },
]

// Categorías para filtrar
const categorias = ["Todos", "Arte", "Deporte", "Historia", "Cultura"]

// Función para obtener las imágenes destacadas para el carrusel
const getCarouselItems = () => {
  return [
    {
      image: "/Prado-Museum-Artifact.png",
      title: "Las Meninas de Velázquez",
      description: "Una de las obras maestras más importantes de la historia del arte occidental, pintada en 1656.",
      link: "/galeria",
    },
    {
      image: "/flamenco-2.png",
      title: "Arte del Flamenco",
      description: "Representación del arte del flamenco, declarado Patrimonio Cultural Inmaterial de la Humanidad.",
      link: "/galeria",
    },
    {
      image: "/tennis-trophy-display.png",
      title: "Trofeos de Grand Slam",
      description: "Colección de trofeos de Grand Slam ganados por Rafael Nadal a lo largo de su carrera.",
      link: "/galeria",
    },
  ]
}

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredImages, setFilteredImages] = useState(galleryData)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      if (selectedCategory === "Todos") {
        const limitedImages: typeof galleryData = []
        categorias.slice(1).forEach((cat) => {
          const imgs = galleryData.filter((item) => item.category === cat).slice(0, 2)
          limitedImages.push(...imgs)
        })
        setFilteredImages(limitedImages)
      } else {
        setFilteredImages(galleryData.filter((item) => item.category === selectedCategory).slice(0, 2))
      }
      setLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [selectedCategory])

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/museum-madrid.png")',
            filter: "brightness(0.4)",
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
          <div className="w-24 h-0.5 bg-[#d4af37] mx-auto my-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Explora nuestra colección de imágenes de los mejores museos de España
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#1a1a1a] py-2">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Galería</span>
          </nav>
        </div>
      </div>

      {/* Obras Destacadas */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Obras Destacadas</h2>
          <div className="w-24 h-0.5 bg-[#d4af37] mx-auto mb-12"></div>
          <GalleryCarousel items={getCarouselItems()} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto">
          <Tabs defaultValue="Todos" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#111] border border-gray-800">
                {categorias.map((categoria) => (
                  <TabsTrigger
                    key={categoria}
                    value={categoria}
                    className="data-[state=active]:bg-transparent data-[state=active]:text-[#d4af37] data-[state=active]:border-b-2 data-[state=active]:border-[#d4af37] rounded-none px-6"
                  >
                    {categoria}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categorias.map((categoria) => (
              <TabsContent key={categoria} value={categoria} className="mt-0">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((i) => (
                      <div key={i} className="space-y-3">
                        <Skeleton className="h-[300px] w-full bg-gray-800" />
                        <Skeleton className="h-4 w-3/4 bg-gray-800" />
                        <Skeleton className="h-4 w-1/2 bg-gray-800" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredImages.map((image, index) => (
                      <Card
                        key={image.id}
                        className="bg-[#111] border-gray-800 overflow-hidden group cursor-pointer"
                        onClick={() => handleImageClick(index)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index < 4}
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                            <Badge className="bg-[#d4af37] text-black hover:bg-[#c49f32] mb-4">{image.museum}</Badge>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{image.description}</p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white text-white hover:bg-white/20 hover:text-white"
                            >
                              Ver Detalle
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold truncate">{image.alt}</h3>
                          <p className="text-sm text-[#d4af37]">{image.museum}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {selectedCategory !== "Todos" && !loading && (
                  <div className="flex justify-center mt-12">
                    <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10">
                      Ver más obras de {selectedCategory}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Modal para ver imágenes */}
      <ImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={filteredImages.map((item) => ({
          src: item.src,
          alt: item.alt,
          museum: item.museum,
          description: item.description,
        }))}
        currentIndex={currentImageIndex}
      />

      <Footer />
    </main>
  )
}
