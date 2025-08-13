import { IProduct } from "@/types/product";
import { getProducts } from "@/utils/api";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IUserProductsResult {
  products: IProduct[];
  loading: boolean;
  error: any;
}

export const useProducts = (): IUserProductsResult => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err: any) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
