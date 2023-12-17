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
            <div className={`${style.circle} ${style.circleBottom}`}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
