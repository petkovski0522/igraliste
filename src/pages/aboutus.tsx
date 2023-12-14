// pages/about.tsx
import { GetStaticProps } from "next";
import { useState } from "react";
import Image from "next/image";

interface AboutData {
  id: number;
  title: string;
  story_btn: string;
  story_Title: string;
  story_Image: string;
  story_Text: string;
  work_Title: string;
  work_btn: string;
  work_Image: string;
  work_Text: string;
}

interface AboutProps {
  aboutData: AboutData[];
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  const [showStory, setShowStory] = useState<boolean>(true);
  const [showWork, setShowWork] = useState<boolean>(false);

  const showStoryContent = () => {
    setShowStory(true);
    setShowWork(false);
  };

  const showWorkContent = () => {
    setShowStory(false);
    setShowWork(true);
  };

  return (
    <div>
      <h2>{aboutData[0]?.title}</h2>
      <button onClick={showStoryContent}>{aboutData[0]?.story_btn}</button>
      <button onClick={showWorkContent}>{aboutData[0]?.work_btn}</button>

      {showStory ? (
        <>
          <img
            src={aboutData[0]?.story_Image}
            alt="About Story"
            width={200}
            height={300}
          />
          <h3>{aboutData[0]?.story_Title}</h3>
          <p>{aboutData[0]?.story_Text}</p>
        </>
      ) : (
        <>
          <img
            src={aboutData[0]?.work_Image}
            alt="About Work"
            width={200}
            height={300}
          />
          <h3>{aboutData[0]?.work_Title}</h3>
          <p>{aboutData[0]?.work_Text}</p>
        </>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  // Fetch data from your API or JSON file
  const response = await fetch("http://localhost:3001/aboutus");
  const data: AboutData[] = await response.json();

  return {
    props: {
      aboutData: data,
    },
  };
};

export default About;
