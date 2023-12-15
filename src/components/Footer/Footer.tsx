import style from "./style.module.css";
import React, { useState } from "react";
import Link from "next/link";
import GoldButton from "../GoldButton/GoldButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const [memberValue, setEmailValue] = useState("");

  const handleJoin = () => {
    console.log("mail submitted");
    if (memberValue) {
      localStorage.setItem("userEmail", memberValue);
      setEmailValue("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <input type="text" value={memberValue} onChange={handleEmailChange} />
          <div className={style.button}>
            <GoldButton
              className={style.buttonWidth90}
              label={"Зачлени се"}
              onClick={handleJoin}
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
              href={"https://maps.app.goo.gl/ixMmnQzZETyvH7y87"}
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
          <div>
            <FontAwesomeIcon icon={faInstagram} />
            <Link
              href={"https://www.instagram.com/igraliste.sk/"}
              target="_blank"
            >
              <span>igralishte.sk</span>
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faTiktok} />
            <Link href={""} target="_blank">
              <span>igralishte.sk</span>
            </Link>
          </div>
        </div>
        <div>
          <p>Сите права задржани © 2023 igralishtesk.mk</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
