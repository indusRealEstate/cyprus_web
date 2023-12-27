"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import { ReduxProvider } from "@/redux/provider";
import Aos from "aos";
import "aos/dist/aos.css";
import { DM_Sans, Poppins } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "../../public/scss/main.scss";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11457016227" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-11457016227');
        `}
      </Script>

      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <ReduxProvider>
          <div className="wrapper ovh">{children}</div>
        </ReduxProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
