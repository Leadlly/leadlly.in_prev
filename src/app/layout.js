"use client"
import { Providers } from './providers'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import Image from 'next/image';
import grid from "../imgs/gridwhole.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leadlly",
  description: "Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
        <Image src={grid} alt="Background Grid" layout="fill" objectFit="cover" className='opacity-[50%]' />
        <Navbar/>
        {children}
        <Footer/>
      </Providers>
        </body>
    </html>
  );
}
