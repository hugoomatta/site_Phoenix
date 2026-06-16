import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Differentials from '../components/Differentials'
import About from '../components/About'
import Trainings from '../components/Trainings'
import Videos from '../components/Videos'
import GoogleReviews from '../components/GoogleReviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MobileWhatsAppBar from '../components/MobileWhatsAppBar'
import { getReviews } from '../services/googleReviews'
import { getYoutubeVideos } from '../services/youtubeVideos'
import type { ReviewsResponse } from '../types/review'
import type { YoutubeVideosResponse } from '../types/youtube'

type Props = {
  reviewsResponse: ReviewsResponse
  youtubeVideosResponse: YoutubeVideosResponse
}

const SEO_TITLE = 'Phoenix Imports & Imports | Mecatrônica e Transmissão Automática Curitiba'
const SEO_DESCRIPTION = 'Especialistas em reparo de mecatrônicas, módulos DSG, Powershift, GM 6T30 e transmissões automáticas nacionais, importadas e premium.'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.phoeniximportseimports.com.br'
const OG_IMAGE = `${SITE_URL}/phoenix-logo-v2.png`
const KEYWORDS = [
  'Reparo câmbio automático Curitiba',
  'Mecatrônica DSG',
  'DQ200 DQ250',
  'Powershift',
  'Mercedes câmbio travado no P',
  'Reparo módulo transmissão',
  'Mecatrônica automotiva',
  'Transmissão automática premium',
  'Módulo GM 6T30',
  'Reparo de módulos automotivos',
].join(', ')

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Phoenix Imports & Imports',
  description: 'Centro técnico especializado em mecatrônicas, módulos eletrônicos e transmissões automáticas.',
  telephone: '+55 41 99265-6337',
  url: SITE_URL,
  image: OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Isaías Régis de Miranda, 1760 - Boqueirão',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '81670-070',
    addressCountry: 'BR',
  },
  areaServed: 'BR',
  makesOffer: [
    'Reparo de mecatrônicas automotivas',
    'Reparo de módulos eletrônicos',
    'Transmissões automáticas',
    'Módulos DSG DQ200 e DQ250',
    'Powershift',
    'GM 6T30',
    'Diagnóstico eletrônico avançado',
  ].map((name) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name,
    },
  })),
}

export default function Home({ reviewsResponse, youtubeVideosResponse }: Props) {
  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="container py-12">
          <Services />
        </section>
        <section className="container py-8">
          <Brands />
        </section>
        <section className="container py-8">
          <Differentials />
        </section>
        <section className="container py-8">
          <About />
        </section>
        <section className="container py-8">
          <Trainings />
        </section>
        <section className="container py-8">
          <Videos response={youtubeVideosResponse} />
        </section>
        <section id="reviews" className="container py-8 scroll-mt-24">
          <GoogleReviews response={reviewsResponse} />
        </section>
        <section className="container py-12">
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  )
}

export async function getStaticProps(){
  const reviewsResponse = await getReviews()
  const youtubeVideosResponse = await getYoutubeVideos()
  return {
    props: { reviewsResponse, youtubeVideosResponse },
    revalidate: 1800
  }
}
