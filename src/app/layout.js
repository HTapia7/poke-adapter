import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Poke Nav",
  description: "Pokemon Information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100 dark:bg-gray-800">
      <head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-white shadow-md dark:bg-gray-900">
          <div className="container p-4 mx-auto">
            <Navbar />
          </div>
        </header>

        <main className="container flex-grow p-4 mx-auto">{children}</main>

        <footer className="py-4 text-center bg-gray-200 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
