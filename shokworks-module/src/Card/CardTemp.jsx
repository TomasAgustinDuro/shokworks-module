import styles from "./card-style.module.css";

function Card({ img, title, text }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <div className={styles.textCard}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
