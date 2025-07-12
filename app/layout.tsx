import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'متجر الرياض | مراتب ومفروشات فاخرة',
  description: 'متجر الرياض للمراتب والمفروشات الفاخرة - نوفر لكم أفضل أنواع المراتب والمفروشات التي تضمن لكم الراحة والنوم الهانئ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans text-dark bg-light">
        {children}
      </body>
    </html>
  )
} 