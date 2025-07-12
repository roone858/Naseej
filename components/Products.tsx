import Image from 'next/image'

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'مراتب سرير',
      description: 'تشكيلة واسعة من المراتب الصحية بجميع المقاسات والأنواع لضمان نوم مريح',
      image: 'https://as1.ftcdn.net/jpg/04/23/47/44/1000_F_423474484_5qlnUZmvv9qvArLCue8HhkqvRL3141y0.webp',
      alt: 'مراتب سرير'
    },
    {
      id: 2,
      title: 'أطقم كنب ومجالس',
      description: 'أطقم كنب ومجالس عصرية بجودة عالية وأقمشة فاخرة تناسب جميع الأذواق',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'أطقم كنب'
    },
    {
      id: 3,
      title: 'وسائد ومراتب إضافية',
      description: 'تشكيلة متنوعة من الوسائد والمراتب الإضافية لتعزيز راحتكم في كل مكان',
      image: 'https://images.pexels.com/photos/3682238/pexels-photo-3682238.jpeg',
      alt: 'وسائد ومراتب'
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
          منتجاتنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{product.title}</h3>
                <p className="mb-4">{product.description}</p>
                <a
                  href="#"
                  className="inline-block bg-primary hover:bg-primaryDark text-white py-2 px-5 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  استكشف المزيد
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 