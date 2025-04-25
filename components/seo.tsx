"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export default function SEO({
  title = "ArteViva - Museos de España",
  description = "Descubre los mejores museos de España con ArteViva. Arte, cultura, historia y deporte en un solo lugar.",
  image = "/vintage-bullfight-poster.png",
  type = "website",
  date,
}: SEOProps) {
  const router = useRouter()
  const url = `https://artevivaespana.com${router.asPath}`
  const fullTitle = title !== "ArteViva - Museos de España" ? `${title} | ArteViva` : title

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://artevivaespana.com${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://artevivaespana.com${image}`} />

      {/* Fecha de publicación para artículos */}
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  )
}
