import Header from "./Header";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero h-screen min-h-[700px] bg-gradient-to-r from-black/50 to-black/50 bg-cover bg-center flex items-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <Header/>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
          متجر الرياض للمراتب والمفروشات الفاخرة
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-fadeInUp animation-delay-200">
          نوفر لكم أفضل أنواع المراتب والمفروشات التي تضمن لكم الراحة والنوم الهانئ
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInUp animation-delay-400">
          <a
            href="#products"
            className="bg-primary hover:bg-transparent border-2 border-primary text-white hover:text-primary py-3 px-8 rounded-full font-medium transition-colors duration-300"
          >
            استكشف منتجاتنا
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-primary border-2 border-primary text-primary hover:text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
          >
            تواصل معنا
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce"
      >
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  )
} 