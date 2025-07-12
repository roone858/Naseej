import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'أمل أحمد',
      role: 'ربة منزل',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      rating: 5,
      text: 'اشتريت مرتبة من متجر الرياض ولقد غيرت حياتي! أصبح النوم مريحاً جداً بعد أن كنت أعاني من آلام الظهر. الجودة ممتازة والسعر مناسب.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
          آراء عملائنا
        </h2>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary ml-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-lg italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 