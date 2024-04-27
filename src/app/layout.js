import { Providers } from './providers'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leadlly.in",
  description: "Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
        {children}
        <Footer/>
      </Providers>
        </body>
    </html>
  );
}
