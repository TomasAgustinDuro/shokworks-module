import Card from "../Card/CardTemp";
import { useRef } from "react";
import styles from "./container.module.css";
import icon1 from "../resources/icon-1.png";
import icon2 from "../resources/icon-2.png";
import icon3 from "../resources/icon-3.png";
import icon4 from "../resources/icon-4.png";
import info from "../resources/info.json";

function Container() {
  const data = info;
  const containerRef = useRef(null);

  const images = { icon1, icon2, icon3, icon4 };

  const scrollNext = () => {
    const c = containerRef.current;

    if (c.scrollLeft + c.clientWidth >= c.scrollWidth - 10) {
      c.scrollLeft = 0;
    } else {
      c.scrollLeft += 300;
    }
  };

  const scrollPrev = () => {
    const c = containerRef.current;

    if (c.scrollLeft <= 0) {
      c.scrollLeft = c.scrollWidth;
    } else {
      c.scrollLeft -= 300;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>
        What's the <span>Speciality Of Us?</span>
      </h2>
      <div className={styles.containerCard} ref={containerRef}>
        {data.length > 0
          ? data.map((info, i) => (
              <Card
                key={i}
                title={info.title}
                text={info.text}
                img={images[info.img]}
              />
            ))
          : "Error"}
      </div>
      <div className={styles.buttons}>
        <button onClick={scrollPrev}>&#8249;</button>
        <button onClick={scrollNext}>&#8250;</button>
      </div>
    </div>
  );
}

export default Container;
