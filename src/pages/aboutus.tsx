// pages/about.tsx
import { GetStaticProps } from "next";
import { useState } from "react";
import Image from "next/image";
import AboutSection from "../components/About/AboutSection";
import styles from "../styles/About.module.css";
import AnnouncementBar from "@/components/Cyhron/AnnouncementBar";

interface AboutData {
  id: number;
  title: string;
  story_btn: string;
  story_Title: string;
  story_Image: string[];
  story_Text: string;
  work_Title: string;
  work_btn: string;
  work_Image: string[];
  work_Text: string;
}

interface AboutProps {
  aboutData: AboutData[];
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  const [showStory, setShowStory] = useState<boolean>(true);

  const showContent = (isStory: boolean) => {
    setShowStory(isStory);
  };

  const contentData = aboutData[0];
  const announcementContent = {
    text: "Нова колекција ",
    additionalText: "Valentines Winter Collection 2023   ",
    imgSrc: "/assets/imagesAbout/emojione-monotone_eight-pointed-star.png",
  };

  return (
    <>
      <AnnouncementBar {...announcementContent} />
      <AboutSection
        title={contentData.title}
        storyBtn={contentData.story_btn}
        workBtn={contentData.work_btn}
        storyImage={contentData.story_Image[0]}
        storyTitle={contentData.story_Title}
        storyText={contentData.story_Text}
        workImage={contentData.work_Image[0]}
        workTitle={contentData.work_Title}
        workText={contentData.work_Text}
        showStory={showStory}
        onShowContent={showContent}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const response = await fetch("http://localhost:3001/aboutus");
  const data: AboutData[] = await response.json();

  return {
    props: {
      aboutData: data,
    },
  };
};

export default About;
