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
import { getReviews } from '../services/googleReviews'
import { getYoutubeVideos } from '../services/youtubeVideos'
import type { ReviewsResponse } from '../types/review'
import type { YoutubeVideosResponse } from '../types/youtube'

type Props = {
  reviewsResponse: ReviewsResponse
  youtubeVideosResponse: YoutubeVideosResponse
}

export default function Home({ reviewsResponse, youtubeVideosResponse }: Props) {
  return (
    <>
      <Head>
        <title>Phoenix Imports & Imports — Transmissões Automáticas</title>
        <meta name="description" content="Especialistas em transmissões automáticas, mecatrônica repair e treinamentos técnicos." />
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
