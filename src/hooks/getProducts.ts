import { IProduct } from "@/types/product";
import { getProducts } from "@/utils/api";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUserProductsResult {
  products: IProduct[];
  loading: boolean;
}

export const useProducts = (): IUserProductsResult => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
