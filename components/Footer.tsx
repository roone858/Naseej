import Image from 'next/image'

export default function Footer() {
  const quickLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#products', label: 'منتجاتنا' },
    { href: '#gallery', label: 'معرض الصور' },
    { href: '#testimonials', label: 'آراء العملاء' },
    { href: '#contact', label: 'تواصل معنا' }
  ]

  const products = [
    { href: '#', label: 'مراتب سرير' },
    { href: '#', label: 'أطقم كنب' },
    { href: '#', label: 'وسائد ومراتب إضافية' },
    { href: '#', label: 'مفروشات غرف النوم' },
    { href: '#', label: 'إكسسوارات النوم' },
    { href: '#', label: 'عروض خاصة' }
  ]

  const socialLinks = [
    { icon: 'fab fa-whatsapp', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-twitter', href: '#' }
  ]

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Company */}
          <div>
            <Image
              src="/logopng.png"
              alt="متجر الرياض"
                width={60}
            height={60}
            
              className="h-10 w-10 mb-4 mr-6 scale-125 transition-transform invert"
              style={{ transform: 'scale(2.5)' }}
            />

            <p className="mb-4">
              متجر الرياض هو وجهتكم المفضلة لشراء المراتب والمفروشات الفاخرة في
              العاصمة، حيث نقدم تشكيلة مميزة من المنتجات التي تجمع بين الجودة
              العالية والراحة المثالية.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-primary hover:bg-primaryDark text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">منتجاتنا</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.href}>
                  <a
                    href={product.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">اتصل بنا</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 ml-2"></i>
                <p>الرياض، حي السليمانية</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-primary mt-1 ml-2"></i>
                <p>0112345678</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 ml-2"></i>
                <p>info@riyadh-mattress.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center">
          <p>&copy; 2023 متجر الرياض للمراتب والمفروشات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
} 