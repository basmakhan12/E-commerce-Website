'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./Productcard";
import { Product } from "@/pages/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://heathermangieri.com/wp-content/uploads/2020/04/Looking-for-a-fun-family-activity-that-even-teenagers-will-enjoy-Take-to-the-kitchen-and-challenge-your-crew-to-a-friendly-pizza-competition.-Heather-Mangieri-Nutrition-1080x675.jpg')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Pizza In Our Menu
          </h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering pizzas to order now!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
