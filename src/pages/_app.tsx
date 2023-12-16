import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AnnouncementBar from "@/components/Cyhron/AnnouncementBar";

export default function App({ Component, pageProps }: AppProps) {
  const announcementContent = {
    text: "Нова колекција ",
    additionalText: "Valentines Winter Collection 2023",
    imgSrc: "/assets/imagesAbout/emojione-monotone_eight-pointed-star.png",
  };

  return (
    <>
      <Header />
      <AnnouncementBar {...announcementContent} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
