import style from "./style.module.css";
import Link from "next/link";

export default function BannerMid() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.imageContainerMid}>
          <img
            src="./assets/images/IMG_6142 1.png"
            alt=""
            className={style.image}
          />
          <Link href={"/product"}>
            <div className={style.circleMid}>
              <div className={style.textContainer}>
                <h3>Козметика & аксесоари</h3>
                <p>Погледни ги свежите љубовни парчиња</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
