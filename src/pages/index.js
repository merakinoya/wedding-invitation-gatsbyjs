
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { ShareIcon } from '@heroicons/react/outline'
import HeroImageTitleLeft from "../components/Hero"
import Story from "../components/Story"
import Schedule from "../components/Schedule"


const IndexPage = () => (
  <Layout>
    <Seo title="Ovia & Bisma" />

    {/* -- HERO HEADER -- */}
    <HeroImageTitleLeft />

    {/* -- BODY CONTENT -- */}
    <main className="mt-6 sm:mt-10 md:mt-16 px-4 container md:container mx-auto md:mx-auto">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* -- GREETING -- */}
        <section id="openingContent" className="space-y-6">
          <h1 className="text-2xl md:text-4xl text-center capitalize font-playfairdisplay font-semibold">
            Assalamu’alaikum Warahmatullaahi Wabarakaatuh
          </h1>
          <p className="text-base md:text-2xl text-center">
            Dengan memohon rahmat dan ridho-Mu Ya Allah, Kami bermaksud mengadakan acara resepsi pernikahan putra dan putri kami
          </p>
        </section>


        {/* -- BRIDE PROFILE -- */}
        <section className="flex sm:justify-around gap-6 sm:mx-6 items-center">

          <figure className="text-center space-y-4 md:mx-24">
            <img className="w-32 h-32 rounded-full mx-auto" srcSet="https://source.unsplash.com/QZRAaYfmvA8/320x320" alt="Person" />
            <figcaption className="space-y-2 md:space-y-4">
              <p className="text-lg md:text-3xl font-semibold capitalize">
                Ovira Syifa Azahra
              </p>
              <p className="text-base md:text-xl text-gray-500">
                Putri dari Bapak Nana Supriatna & Ibu Esih
              </p>
            </figcaption>
          </figure>

          <div className="text-2xl sm:text-4xl font-bold font-playfairdisplay capitalize">
            &
          </div>

          <figure className="text-center space-y-4 md:mx-24">
            <img className="w-32 h-32 rounded-full mx-auto" srcSet="https://source.unsplash.com/BFxyTaw3PsM/320x320" alt="Person" />
            <figcaption className="space-y-2 md:space-y-4">
              <p className="text-lg md:text-3xl font-semibold capitalize">
                Bisma Kharisma
              </p>
              <p className="text-base md:text-xl text-gray-500">
                Putra dari Bapak Saefudin & Ibu Nurhayati
              </p>
            </figcaption>
          </figure>

        </section>

        <Schedule />
        <hr></hr>

        <Story />

        <hr></hr>


        <section id="shareUcapan" className="space-y-4 px-0 sm:px-8 lg:px-32">
          <h1 className="text-4xl font-semibold text-center font-playfairdisplay capitalize"> Bagikan Kartu Ucapan </h1>
          <form action="" className="">
            <div className="pb-4 space-y-1">
              <label htmlFor="username" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full py-2 px-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:shadow-outline focus:border-gray-900 focus:ring-gray-900"
                placeholder="Masukkan nama lengkap kamu" />
            </div>

            <div className="pb-4 space-y-1">
              <label htmlFor="story" className="block font-medium text-gray-700">
                Ucapan & Doa
              </label>
              <textarea
                name="story"
                id="story"
                rows="3" cols="33"
                className="w-full py-2 px-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:shadow-outline focus:border-gray-900 focus:ring-gray-900"
                placeholder="Masukkan ucapan dan doa untuk mempelai" />
            </div>

            <button className="inline-flex w-full items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-transparent text-base font-semibold rounded-full text-white bg-black hover:bg-gray-800">
              Kirim
            </button>

          </form>

          <p className="text-center">
            Atau bagikan melalui
          </p>

          <button className="inline-flex w-full items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-black text-base font-semibold rounded-full text-black bg-white hover:bg-gray-200">
            <ShareIcon className="w-6 h-6 -ml-1 mr-2" aria-hidden="true" />  Social Mediia
          </button>


        </section>

        <hr></hr>

        {/* -- CLOSING STATEMENT -- */}
        <section id="closingStatement" className="space-y-6">
          <p className="text-base md:text-lg text-center">
            Suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudra/Saudari berkenan hadir dan memberikan do’a restu kepada kedua mempelai.
          </p>
          <p className="text-base md:text-lg text-center">
            Wassalamu’alaikum Warahmatullahi Wabarakaatuh.
          </p>
        </section>


        {/* /End replace */}
      </div>
    </main>

  </Layout>
)

export default IndexPage
