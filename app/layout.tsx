import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ToastContext from './context/toast-context'
import ActiveSectionContextProvider from './context/section-context'

const inter = Inter({ subsets: ['latin'] })

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Muahmmad Hussain Shamim',
  description: 'Hello! I m Muhammad Hussain Shamim, A Professional React.js & Next.js Developer with expertise in HTML, CSS, JavaScript, Tailwind, and Firebase. View my projects and contact for modern web solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient !bg-slate-900 scroll-smooth"

    >
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
        <title>Muhammad Hussain Shamim</title>
      </head>
      <body
        className={`${outfit.className} min-h-screen text-gray-50 flex flex-col items-center justify-center w-full`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          <ToastContext />
          <main className="w-full max-w-[1000px] px-4 mt-40 mb-40 flex flex-col gap-32">
            {children}
          </main>
          <Footer />
        </ActiveSectionContextProvider>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"></script>
        <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore-compat.js"></script>
      </body>
    </html>
  )
}
