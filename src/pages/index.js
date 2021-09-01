
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ShareIcon } from '@heroicons/react/outline'
import * as Scroll from 'react-scroll';

var LinkScrollwus = Scroll.Link;

const HeroImage = {
  backgroundImage: "url(https://source.unsplash.com/hQuQwfY8QoE/1980x900)",
  height: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
};

const IndexPage = () => (
  <Layout>
    <Seo title="Wedding Invitation" />

    <header className="relative top-0 left-0 w-full h-screen flex justify-center items-center py-12 md:py-48" style={HeroImage}>
      <div className="inline-block align-middle my-auto md:my-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center lg:text-center space-y-16">

            <h3 className="text-base text-gray-300 font-semibold tracking-wide">The Wedding of</h3>
            <div className="mb-0 md:mb-9 space-y-8">
              <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                Ovira Syifa Azahra
              </h1>
              <p className="font-bold font-playfairdisplay text-white text-4xl sm:text-6xl capitalize">
                &
              </p>
              <h1 className="text-4xl font-bold font-playfairdisplay text-white sm:text-7xl capitalize">
                Bisma Kharisma
              </h1>
            </div>

            <LinkScrollwus
              className="inline-flex cursor-pointer items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-300"
              to="openingContent"
              spy={true}
              smooth={true}
              duration={500}>
              Read Invitation
            </LinkScrollwus>
          </div>
        </div>
      </div>
    </header>

    <main className="mt-6 sm:mt-8 md:mt-12 px-4 container md:container mx-auto md:mx-auto">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Replace with your content */}


        <section id="openingContent" className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-center capitalize">Assalamu’alaikum Warahmatullaahi Wabarakaatuh</h1>
          <p className="text-lg md:text-xl text-center capitalize">
            Dengan memohon rahmat dan ridho-Mu Ya Allah, Kami bermaksud mengadakan acara resepsi pernikahan putra dan putri kami
          </p>
        </section>

        <section className="flex sm:justify-around gap-6 sm:mx-6 items-center">
          <figure class="rounded-xl sm:p-8 ">
            <img class="w-32 h-32 rounded-full mx-auto" srcSet="https://source.unsplash.com/QZRAaYfmvA8/320x320" alt="Person" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <p class="text-lg font-semibold capitalize">
                Ovira Syifa Azahra
              </p>
              <figcaption class="font-medium">
                <div class="text-cyan-600">
                  Sarah Dayan
                </div>
                <div class="text-gray-500">
                  Putri dari Bapak Nana Supriatna & Ibu Esih
                </div>
              </figcaption>
            </div>
          </figure>

          <div className="text-2xl font-bold font-playfairdisplay sm:text-4xl capitalize">
            &
          </div>


          <figure class="rounded-xl sm:p-8 ">
            <img class="w-32 h-32 rounded-full mx-auto" srcSet="https://source.unsplash.com/BFxyTaw3PsM/320x320" alt="Person" width="384" height="512" />
            <div class="pt-6 text-center space-y-4">
              <p class="text-lg font-semibold capitalize">
                Ovira Syifa Azahra
              </p>
              <figcaption class="font-medium">
                <div class="text-cyan-600">
                  Sarah Dayan
                </div>
                <div class="text-gray-500">
                  Putri dari Bapak Nana Supriatna & Ibu Esih
                </div>
              </figcaption>
            </div>
          </figure>

        </section>


        <section id="eventTime" className="space-y-4 sm:space-y-8 text-center lg:text-center">
          <p className="text-lg md:text-xl">
            Acara Pernikahan Insya Allah akan dilaksanakan pada :
          </p>

          <p className="text-3xl md:text-5xl font-semibold capitalize">
            Selasa, 24 Mar 2021
          </p>

          <p className="text-xl md:text-4xl font-semibold capitalize">
            Pukul 13:00 - 16:00 WIB
          </p>

          <p className="font-medium text-gray-700 capitalize">
            Gedung Sasana Budaya <br></br>
            Jl. Cipto Mangunkusumo No.12, Yogyakarta
          </p>

          <iframe
            className="w-full h-80"
            title="Event Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.185187536794!2d110.37567331530165!3d-7.770177794400028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584b387308b7%3A0xea2ce4460a11afdb!2sGrha%20Sabha%20Pramana%20(GSP)%20UGM!5e0!3m2!1sid!2sid!4v1630478630328!5m2!1sid!2sid"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"></iframe>

          <div className="items-center">

            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Pernikahan+Ovia+dan+Bisma&dates=20210707T120000Z/20210707T130000Z&location=D+I+Yogyakarta&details=Jangan+Lupa+datang+ya+&ctz=Asia/Jakarta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 md:px-5 md:py-3 border border-black text-base font-medium rounded-full text-black bg-white hover:bg-gray-300">
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
                type="text"
                name="story"
                id="story"
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


        {/* /End replace */}
      </div>
    </main>




    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>


  </Layout>
)

export default IndexPage




const stories = [
  {
    name: '2011',
    description: 'Backgorund story ketemu dimana kapan saat moment apa. apa yang di rasakan saat bertemu',
    imageSrc: 'https://source.unsplash.com/NVBL6aulKBY/1080x1080',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: '2011-2020',
    description: 'Proses menjalani hubungan setelah bertemu. Bagaimana proses pendewasaan masing masing dan gimana cara mencapai cita masing masing',
    imageSrc: 'https://source.unsplash.com/4LMMnrJrtQw/1080x1080',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: '2021',
    description: 'Akhirnya, bagaimana memutuskan untuk komitmen dan apa yang melatar belakanginya sehingga memutusakn untuk menikah  ',
    imageSrc: 'https://source.unsplash.com/nToQmQBuOzM/1080x1080',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

function Story() {
  return (
    <section className="bg-white max-w-7xl mx-auto lg:max-w-none">

      <h2 className="text-4xl font-semibold text-center font-playfairdisplay capitalize">Our Story</h2>
      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {stories.map((callout) => (
          <div key={callout.name} className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img
                src={callout.imageSrc}
                alt={callout.imageAlt}
                className="w-full h-full object-top object-cover"
              />
            </div>
            <h3 className="mt-6 text-sm sm:text-base font-semibold text-gray-900">
              <a href={callout.href}>
                <span className="absolute inset-0" />
                {callout.name}
              </a>
            </h3>
            <p className="text-base sm:text-base text-gray-700">{callout.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

