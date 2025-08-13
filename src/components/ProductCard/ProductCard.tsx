import useAuthStore from "@/store/authStore";
import { IProduct } from "@/types/product";
import { DeffaultButton } from "@/ui-components/buttons/DeffaultButton";
import Image from "next/image";
import { FC } from "react";

import styles from "./style.module.scss";

const ProductCard: FC<IProduct> = ({ images, title, category, price }) => {
  const { user } = useAuthStore();

  return (
    <div className={styles.card}>
      <Image className={styles.image} width={250} height={300} src={images[0]} alt={title} />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.price}>{price}$</div>
      </div>
      {user && <DeffaultButton className={styles.btn}>Add to cart</DeffaultButton>}
    </div>
  );
};

export default ProductCard;
