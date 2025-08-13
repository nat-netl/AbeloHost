"use client";

import { useProducts } from "@/hooks/getProducts";
import classNames from "classnames";

import { ProductCard } from "../ProductCard";
import styles from "./styles.module.scss";

const Products = () => {
  const { products } = useProducts();

  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.products}>
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
