'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      text: 'الرياض، حي السليمانية، شارع الملك فهد'
    },
    {
      icon: 'fas fa-phone',
      text: '0552260912'
    },
    {
      icon: 'fas fa-mobile-alt',
      text: '0552260912'
    },
    {
      icon: 'fas fa-envelope',
      text: 'info@riyadh-mattress.com'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-whatsapp', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-twitter', href: '#' }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:right-0 after:w-16 after:h-1 after:bg-primary after:rounded-full">
          تواصل معنا
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-primary mb-6">معلومات الاتصال</h3>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                    <i className={info.icon}></i>
                  </div>
                  <p>{info.text}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">
              وسائل التواصل الاجتماعي
            </h3>
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

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-6">أرسل رسالة</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="name"
                  placeholder="اسمك الكريم"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="بريدك الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم هاتفك"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="رسالتك"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-40"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primaryDark text-white py-3 px-6 rounded-full font-medium transition-colors duration-300"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.735881798176!2d46.67278231500072!3d24.81357098407585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3e9b4f8e2cd%3A0x8a7a5a9b0d0b5b1e!2z2KfZhNmF2LnZhdiv2Kkg2KfZhNij2YrYqNin2YQ!5e0!3m2!1sar!2ssa!4v1620000000000!5m2!1sar!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
} 