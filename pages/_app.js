import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V124RWDTB3"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-V124RWDTB3');`}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2574897296071141"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
