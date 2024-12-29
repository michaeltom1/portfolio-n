import localFont from "next/font/local";
import GlobalStyles from "./styles/GlobalStyle";
import "./globals.css"

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata = {
  title: "Michael Tom",
  description: "Michael Tom portfolio",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./favicon.ico",
        href: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GlobalStyles />
      </head>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
