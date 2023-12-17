import Link from "next/link";
import style from "./style.module.css";

export default function BannerTop() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src="./assets/images/coll1.png" alt="" className={style.image} />
          <Link href={"/product"}>
            <div className={`${style.circle} ${style.circleTop}`}>
              <div className={style.textContainer}>
                <h3>Valentines gal Kолекција</h3>
                <p>Погледни ги свежите љубовни парчиња</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
