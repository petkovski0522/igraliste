import style from "./style.module.css";
import Link from "next/link";

export default function BannerBottom() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img
            src="./assets/images/ova131.png"
            alt=""
            className={style.image}
          />
          <Link href={"/gift"}>
            <div className={`${style.circle} ${style.circleBottom}`}>
              <div className={style.textContainer}>
                <h3>GIFT CARDS</h3>
                <p>
                  Избери уникатен подарок за твоите најблиски со нашиот избор на
                  ultra fancy картички за подарок.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
