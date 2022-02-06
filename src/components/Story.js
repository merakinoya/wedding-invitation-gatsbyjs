import React from "react"

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


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://images.pexels.com/photos/3347413/pexels-photo-3347413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://images.pexels.com/photos/3347411/pexels-photo-3347411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://images.pexels.com/photos/3347415/pexels-photo-3347415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Model wearing plain gray basic tee.',
    },

    {
      src: 'https://images.pexels.com/photos/3347414/pexels-photo-3347414.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt: 'Model wearing plain black basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function Story() {
  return (
    <section className="bg-white max-w-7xl mx-auto lg:max-w-none space-y-8">

      <h2 className="text-4xl font-semibold text-center font-playfairdisplay capitalize">
        Our Story
      </h2>

      <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {stories.map((callout) => (
          <div key={callout.name} className="group relative space-y-6">

            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img
                src={callout.imageSrc}
                alt={callout.imageAlt}
                className="w-full h-full object-top object-cover"
              />
            </div>
            <div id="desc-stories" className="text-center space-y-4">
              <p className="text-2xl sm:text-xl font-bold">{callout.name}</p>
              <p className="text-base sm:text-base text-gray-700">{callout.description}</p>
            </div>

          </div>
        ))}
      </div>

      <hr></hr>

      {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="w-full h-full object-right object-cover"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>


    </section>
  )
}

export default Story;