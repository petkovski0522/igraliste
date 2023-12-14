// pages/about.tsx
import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

interface AboutData {
  id: number;
  storyTitle: string;
  storyImage: string;
  storyText: string;
  workTitle: string;
  workImage: string;
  workText: string;
}

interface AboutProps {
  aboutData: AboutData;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  const [showStory, setShowStory] = useState<boolean>(true);

  const toggleContent = () => {
    setShowStory((prev) => !prev);
  };

  return (
    <div>
      <h2>About Us</h2>
      <button onClick={toggleContent}>About Story</button>
      <button onClick={toggleContent}>About Work</button>

      {showStory ? (
        <>
          <Image
            src={aboutData.storyImage}
            alt="About Story"
            width={200}
            height={300}
          />
          <h3>{aboutData.storyTitle}</h3>
          <p>{aboutData.storyText}</p>
        </>
      ) : (
        <>
          <Image
            src={aboutData.workImage}
            alt="About Work"
            width={200}
            height={300}
          />
          <h3>{aboutData.workTitle}</h3>
          <p>{aboutData.workText}</p>
        </>
      )}
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: AboutProps }> {
  // Fetch data from db.json or an API
  const response = await fetch("http://localhost:3001/aboutus");
  const data: AboutData = await response.json();

  return {
    props: {
      aboutData: data,
    },
  };
}

export default About;
