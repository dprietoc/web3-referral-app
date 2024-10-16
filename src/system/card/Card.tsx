import styles from "./Card.module.scss";

export interface CardProps {
  buttonText: string;
  category: string;
  editions: string;
  imageSrc: string;
  title: string;
  disabled?: boolean;
  key?: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  buttonText,
  category,
  editions,
  imageSrc,
  title,
  disabled,
  key,
  onButtonClick,
}) => {
  return (
    <div className={styles.card} key={key}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.data}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.category}>{category}</p>
          <p className={styles.editions}>Ediciones: {editions}</p>
        </div>
        <button className={styles.button} onClick={onButtonClick} disabled={disabled}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
