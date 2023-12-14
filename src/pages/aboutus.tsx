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
          <h3>{storyTitle}</h3>
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resAbout = await fetch("http://localhost:3001/aboutus");
    if (!resAbout.ok) {
      throw new Error(
        `Failed to fetch data: ${resAbout.status} ${resAbout.statusText}`
      );
    }

    const dataAbout: AboutData[] = await resAbout.json();

    return {
      props: {
        aboutData: dataAbout,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        aboutData: null,
      },
    };
  }
};

export default About;
