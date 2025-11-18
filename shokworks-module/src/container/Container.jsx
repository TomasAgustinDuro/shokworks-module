import Card from "../Card/CardTemp";
import { useEffect, useState, useRef } from "react";
import { getInfo } from "../service";
import styles from "./container.module.css";

function Container() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getInfo();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>
        What's the <span>Speciality Of Us?</span>
      </h2>
      <div className={styles.containerCard} ref={containerRef}>
        {loading
          ? "loading..."
          : data.length > 0
          ? data.map((info, i) => (
              <Card
                key={i}
                img={info.img}
                title={info.title}
                text={info.text}
              />
            ))
          : error}
      </div>
      <div className={styles.buttons}>
        <button onClick={scrollPrev}>&#8249;</button>
        <button onClick={scrollNext}>&#8250;</button>
      </div>
    </div>
  );
}

export default Container;
