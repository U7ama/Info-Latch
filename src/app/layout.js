import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
// import Aos from "aos";
// import "aos/dist/aos.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"InfoLatch",
    template:"%s | Next.js 14"
  },
  description: "InfoLatch",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <Navbar />
          {children}
          <Footer />
        </div>
        
        </body>
    </html>
  )
}
