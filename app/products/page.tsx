"use client"; 
import { useRouter } from "next/navigation";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetching products from the API
  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store",
    });
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-10 px-10">
      <div className="flex justify-between items-center py-2">
        <AddProduct />
        <button
        onClick={() => router.push("/")} 
        className="btn bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">
        Go to Home Page
      </button>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex">
                <div className="mr-1">
                  <UpdateProduct {...product} />
                </div>
                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
