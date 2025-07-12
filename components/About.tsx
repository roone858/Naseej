import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: 'fas fa-bed',
      title: 'مراتب عالية الجودة',
      description: 'نقدم تشكيلة واسعة من المراتب الصحية والمريحة'
    },
    {
      icon: 'fas fa-star',
      title: 'ضمان الجودة',
      description: 'جميع منتجاتنا ذات جودة عالية وضمان طويل الأمد'
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
          من نحن
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg mb-6">
              <strong className="font-bold">متجر الرياض</strong> هو الوجهة المثالية
              لشراء المراتب والمفروشات في العاصمة، حيث نقدم منذ عام 2010 تشكيلة
              مميزة من المنتجات التي تجمع بين الجودة العالية والراحة المثالية.
            </p>

            <h3 className="text-xl font-bold text-primary mb-3">رؤيتنا</h3>
            <p className="mb-8">
              أن نكون الخيار الأول لكل من يبحث عن الراحة والنوم الصحي من خلال
              توفير أفضل أنواع المراتب والمفروشات التي تلبي جميع الاحتياجات.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <i className={`${feature.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              alt="عن متجر الرياض"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 