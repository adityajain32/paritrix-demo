import { Button } from "./Button";
import { Badge } from "./Badge";
import styles from "./ProductCard.module.css";

export type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  onSale?: boolean;
  layout?: "vertical" | "horizontal";
};

export function ProductCard({ name, price, image, onSale = false, layout = "vertical" }: ProductCardProps) {
  return (
    <article className={`${styles.card} ${styles[layout]}`}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.body}>
        {onSale ? <Badge>Sale</Badge> : null}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
        <Button size="small">Add to cart</Button>
      </div>
    </article>
  );
}
