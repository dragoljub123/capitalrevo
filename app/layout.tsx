import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FooterHome } from "./components/FooterHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CapitalRevo - Trade Online with a Leading Trading Broker",
  description:
    "Discover the leading online trading platform at CapitalRevo. Trade forex, stocks, commodities, and more with a trusted and regulated broker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cr.ico" />
        <meta property="og:image" content="/Capitalrevo.png" />
        <meta
          name="google-site-verification"
          content="LacVDWR8EcIov_giDxPejNwywj5UFL4DwWeTU4IYU1c"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7ZV9VZB4PK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7ZV9VZB4PK');
            `,
          }}
        />
        <link rel="canonical" href="https://capitalrevo.com" />
      </head>
      <body className={inter.className}>
        {children}
        <FooterHome />
        {/* Start of Tawk.to Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66f159314cbc4814f7dd8316/1i8fc8q96';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
