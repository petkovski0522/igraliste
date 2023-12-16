import style from "./style.module.css";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import GoldButton from "../GoldButton/GoldButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [emailValue, setEmailValue] = useState("");

  const handleSubscribe = () => {
    console.log("Email submitted");
    if (emailValue) {
      try {
        localStorage.setItem("userEmail", emailValue);
        setEmailValue("");
      } catch (error) {
        console.error("Failed to save email to localStorage:", error);
      }
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.text}>
          <h2>Следете ги нашите новости!</h2>
          <p>
            Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
            нови колекции.
          </p>
        </div>
        <div className={style.email}>
          <label htmlFor="email">E-mail Адреса:</label>
          <input type="text" value={emailValue} onChange={handleEmailChange} />
          <div className={style.button}>
            <GoldButton
              className={style.buttonWidth90}
              label={"Зачлени се"}
              onClick={handleSubscribe}
            />
          </div>
        </div>
        <div className={style.list}>
          <ul>
            <Link href={"/aboutus"}>
              <li>За нас</li>
            </Link>
            <Link href={"/contact"}>
              <li>Контакт</li>
            </Link>
            <Link
              href={
                "https://www.google.com/maps/search/Igrali%C5%A1te/@41.9993664,21.4225622,21z?hl=en-US&entry=ttu"
              }
              target="_blank"
            >
              <li>Локатор на Продавницата</li>
            </Link>
            <Link href={"/faq"}>
              <li>Често поставувани Прашања(FAQ)</li>
            </Link>
            <li>
              <Link href={"/register"}>Регистрирај се</Link> /{" "}
              <Link href={"/login"}>логирај се</Link>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <span className={style.follow}>Следете не на:</span>
          <div className={style.icon}>
            <Link
              href={"https://www.instagram.com/igraliste.sk/"}
              target="_blank"
            >
              <a>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    color: "black",
                    fontSize: "24px",
                    marginRight: "8px",
                  }}
                />

                <span>igralishte.sk</span>
              </a>
            </Link>
          </div>
          <div className={style.icon}>
            <Link
              href={
                "https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40igraliste.sk%3Flang%3Den&lang=en&enter_method=mandatory"
              }
              target="_blank"
            >
              <a>
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{
                    color: "#000000",
                    fontSize: "24px",
                    marginRight: "8px",
                  }}
                />

                <span>igralishte.sk</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.copy}>
          <p>Сите права задржани © 2023 igralishtesk.mk</p>
        </div>
      </div>
    </div>
  );
}
