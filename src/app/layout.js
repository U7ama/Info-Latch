import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import Link from "next/link";
import Image from "next/image";
// import Aos from "aos";
// import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "InfoLatch",
  },
  description: "InfoLatch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Link
            target="_blank"
            href="https://wa.me/+923446743886?text=Hello%20there"
            className="fixed bottom-4 right-4 z-10 cursor-pointer"
          >
            <Image src="/whatsapp.png" alt="sas" width={60} height={60} />
          </Link>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
