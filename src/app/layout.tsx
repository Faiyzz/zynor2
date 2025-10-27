// app/layout.tsx
import Footer from "@/components/Footer";
import "./globals.css";
import  Navbar  from "@/components/Navbar";

export const metadata = {
  title: "Zynor - Software House",
  description: "Professional Software Development & IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
