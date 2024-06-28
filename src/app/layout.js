import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
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
          <div className="fixed bottom-0 right-0 z-10">
            <Chatbot />
          </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
