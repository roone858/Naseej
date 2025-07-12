import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/1.jfif', alt: 'مراتب' },
    { src: '/2.jfif', alt: 'مراتب' },
    { src: '/3.jfif', alt: 'مراتب' },
    { src: '/4.jfif', alt: 'مراتب' }
  ]

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
          معرض أعمالنا
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-72 group">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={288}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="fas fa-search-plus text-white text-3xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 