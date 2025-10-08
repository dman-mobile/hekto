import ProductDetail from "../components/ProductDetails/ProductDetail";
import { useParams } from "react-router-dom";
import { ProductData } from "@/types/Product";
import { useEffect, useState } from "react";
import ProductDetailSkeleton from "@/components/ProductDetails/ProductDetailSkeleton";
import Related from "@/components/ProductDetails/Related";
import ProductDescriptionTabs from "@/components/ProductDetails/ProductDescriptionTabs";

export default function ProductDetailPage() {
  const params = useParams();
  const { productId } = params; 

  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      if (!productId) return;

      setLoading(true);
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        
        const foundProduct = data.all.find(
          (p: ProductData) => p.id === Number(productId) 
        );

        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <ProductDetail product={product} />
      <ProductDescriptionTabs product={product} />
      <Related />
    </>
  );
}