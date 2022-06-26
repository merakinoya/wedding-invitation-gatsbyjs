import React from "react"

const eventschedule = [
  {
    name: 'Akah Nikah',
    start_date: '2022-03-25T08:00:00Z',
    end_date: '2022-03-25T12:00:00Z',
    google_location: 'https://www.google.com/maps/dir/?api=1&destination=Gedung+Sasana+Budaya',
    embed_google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.185187536794!2d110.37567331530165!3d-7.770177794400028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584b387308b7%3A0xea2ce4460a11afdb!2sGrha%20Sabha%20Pramana%20(GSP)%20UGM!5e0!3m2!1sid!2sid!4v1630478630328!5m2!1sid!2sid',
  },
  {
    name: 'Resepsi',
    start_date: '2022-03-26T08:00:00Z',
    end_date: '2022-03-26T12:00:00Z',
    google_location: 'https://www.google.com/maps/dir/?api=1&destination=Gedung+Sasana+Budaya',
    embed_google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.185187536794!2d110.37567331530165!3d-7.770177794400028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584b387308b7%3A0xea2ce4460a11afdb!2sGrha%20Sabha%20Pramana%20(GSP)%20UGM!5e0!3m2!1sid!2sid!4v1630478630328!5m2!1sid!2sid',
  },
]

function Schedule() {
  return (
    <section id="eventTime" className="space-y-4 sm:space-y-8 text-center lg:text-center">
      <p className="text-base md:text-2xl text-center">
        Acara Pernikahan kami Insya Allah akan dilaksanakan pada :
      </p>

      <div className="flex-none md:flex sm:justify-around gap-6 space-y-6 md:space-y-0 sm:mx-6 items-center">
        {eventschedule.map((schedule) => (

          <div key={schedule.name} className="md:p-8 p-5 text-center space-y-4 md:space-y-8 border border-gray-200 rounded-2xl">
            <p className="text-2xl md:text-4xl text-center font-playfairdisplay font-semibold">
              {schedule.name}
            </p>
            <div className="space-y-2 md:space-y-4">
              <p className="text-base md:text-xl text-gray-500">{schedule.start_date}</p>
              <p className="text-base md:text-xl text-gray-500">{schedule.end_date}</p>
              <a href={schedule.google_location} target="_blank" rel="noreferrer" className="text-base md:text-xl text-gray-500 underline">Gedung Sasana Budaya. Jl. Cipto Mangunkusumo No.12, Yogyakarta </a>
            </div>
            <iframe
              className="w-full h-40"
              title="Event Location"
              src={schedule.embed_google_map}
              allowfullscreen=""
              loading="lazy"></iframe>
          </div>

        ))}

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

  )
}

export default Schedule;