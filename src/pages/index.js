
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { ShareIcon } from '@heroicons/react/outline'
import HeroImageTitleLeft from "../components/Hero"
import Story from "../components/Story"


const IndexPage = () => (
  <Layout>
    <Seo title="Wedding Invitation" />

    <HeroImageTitleLeft />



    <main className="mt-6 sm:mt-10 md:mt-16 px-4 container md:container mx-auto md:mx-auto">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Replace with your content */}

        {/* -- GREETING -- */}
        <section id="openingContent" className="space-y-6">
          <h1 className="text-2xl md:text-4xl text-center capitalize font-playfairdisplay font-semibold">Assalamu’alaikum Warahmatullaahi Wabarakaatuh</h1>
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


        <section id="eventTime" className="space-y-4 sm:space-y-8 text-center lg:text-center">
          <p className="text-base md:text-2xl text-center">
            Acara Pernikahan kami Insya Allah akan dilaksanakan pada :
          </p>


          <div className="flex-none md:flex sm:justify-around gap-6 space-y-6 md:space-y-0 sm:mx-6 items-center">


            <div className="md:p-8 p-5 text-center space-y-4 md:space-y-8 border border-gray-200 rounded-2xl">
              <p className="text-2xl md:text-4xl text-center font-playfairdisplay font-semibold">
                Akad Nikah
              </p>
              <div className="space-y-2 md:space-y-4">
                <p className="text-base md:text-xl text-gray-500">Jumat, 24 Mar 2021</p>
                <p className="text-base md:text-xl text-gray-500">Jam 08:00 - 10:00 WIB</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Gedung+Sasana+Budaya" target="_blank" rel="noreferrer" className="text-base md:text-xl text-gray-500 underline">Gedung Sasana Budaya. Jl. Cipto Mangunkusumo No.12, Yogyakarta </a>
              </div>
              <iframe
                className="w-full h-40"
                title="Event Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.185187536794!2d110.37567331530165!3d-7.770177794400028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584b387308b7%3A0xea2ce4460a11afdb!2sGrha%20Sabha%20Pramana%20(GSP)%20UGM!5e0!3m2!1sid!2sid!4v1630478630328!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>

            <div className="md:p-8 p-5 text-center space-y-4 md:space-y-8 border border-gray-200 rounded-2xl">
              <p className="text-2xl md:text-4xl text-center font-playfairdisplay font-semibold">
                Resepsi Nikah
              </p>
              <div className="space-y-2 md:space-y-4">
                <p className="text-base md:text-xl text-gray-500">Sabtu, 25 Mar 2021</p>
                <p className="text-base md:text-xl text-gray-500">Jam 19:00 - 22:00 WIB</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Gedung+Sasana+Budaya" target="_blank" rel="noreferrer" className="text-base md:text-xl text-gray-500 underline">Gedung Sasana Budaya. Jl. Cipto Mangunkusumo No.12, Yogyakarta </a>
              </div>
              <iframe
                className="w-full h-40"
                title="Event Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.185187536794!2d110.37567331530165!3d-7.770177794400028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584b387308b7%3A0xea2ce4460a11afdb!2sGrha%20Sabha%20Pramana%20(GSP)%20UGM!5e0!3m2!1sid!2sid!4v1630478630328!5m2!1sid!2sid"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>


          </div>


          <div className="items-center">

            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Pernikahan+Ovia+dan+Bisma&dates=20210707T120000Z/20210707T130000Z&location=D+I+Yogyakarta&details=Jangan+Lupa+datang+ya+&ctz=Asia/Jakarta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 md:px-5 md:py-3 border border-black text-base font-medium rounded-full text-black bg-white hover:bg-gray-300">
              Save to Calendar
            </a>
          </div>

        </section>

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
