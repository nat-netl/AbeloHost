"use client";

import { useProducts } from "@/hooks/getProducts";
import classNames from "classnames";

import { Loader } from "../Contact/Loader";
import { ProductCard } from "../ProductCard";
import styles from "./styles.module.scss";

const Products = () => {
  const { products, loading } = useProducts();

  return (
    <div className={styles.box}>
      <div className={classNames("container", styles.wrapper)}>
        <h1 className={styles.title}>Products</h1>

        {loading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <div className={styles.products}>
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
