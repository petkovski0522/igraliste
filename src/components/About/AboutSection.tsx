// components/AboutSection.tsx
import React from "react";
import Button from "./Button";
import style from "./style.module.css";

interface AboutSectionProps {
  title: string;
  storyBtn: string;
  workBtn: string;
  storyImage: string;
  storyTitle: string;
  storyText: string;
  workImage: string;
  workTitle: string;
  workText: string;
  showStory: boolean;
  onShowContent: (isStory: boolean) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  storyBtn,
  workBtn,
  storyImage,
  storyTitle,
  storyText,
  workImage,
  workTitle,
  workText,
  showStory,
  onShowContent,
}) => (
  <div className={style.about}>
    <div className={style.top}>
      <img
        src={
          "/assets/images/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png"
        }
        alt="Image Description"
        width={50}
        height={50}
      />
      <h2>{title}</h2>
    </div>
    <div className={style.container}>
      <div className={style.one}>
        <Button
          label={storyBtn}
          onClick={() => onShowContent(true)}
          active={showStory}
        />
        <Button
          label={workBtn}
          onClick={() => onShowContent(false)}
          active={!showStory}
        />

        <div>
          <img
            src={showStory ? storyImage : workImage}
            alt="About Image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
    <h3>{showStory ? storyTitle : workTitle}</h3>
    <p className={style.font}>{showStory ? storyText : workText}</p>
  </div>
);

export default AboutSection;
