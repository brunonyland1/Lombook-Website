import Navbar from "./components/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Lombook",
  description: "Beautiful lava rocks",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
