"use client";
import Link from 'next/link'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  id: number;
  image: string;
  title: string;
  stock: boolean;
  description: string;
  price: number;
}

const product: Props[] = [
  {
    id: 1,
    image:
      "https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/6a1e6112-0fed-465a-62bf-a8c4ae185100/624x624",
    title: "Accessibility",
    stock: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    price: 19.99,
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/6a1e6112-0fed-465a-62bf-a8c4ae185100/624x624",
    title: "Community",
    stock: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    price: 19.99,
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/6a1e6112-0fed-465a-62bf-a8c4ae185100/624x624",
    title: "Scalability",
    stock: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    price: 19.99,
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/6a1e6112-0fed-465a-62bf-a8c4ae185100/624x624",
    title: "Gamification",
    stock: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    price: 19.99,
  },
];

export const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Props | null>(null);

  const handleProductClick = (product: Props) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Products
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {product.map((prod) => (
          <div
            key={prod.id}
            className="bg-muted/50 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleProductClick(prod)}
          >
            <div className="rounded-lg overflow-hidden p-4 aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <img
                src={prod.image}
                alt={prod.title}
                width={400}
                height={300}
                className="w-full h-full object-center object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{prod.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {prod.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-gray-50 font-bold">
                  {prod.price}
                </span>
                <Button disabled={!prod.stock} size="sm">
                  {prod.stock ? "In Stock" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Dialog open onOpenChange={handleCloseModal}>
          <DialogContent className="max-w-[600px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{selectedProduct.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-gray-50 font-bold text-2xl">
                    ${selectedProduct.price}
                  </span>{" "}
                  <Link href="/contact">
                    <Button disabled={!selectedProduct.stock} size="lg">
                      {selectedProduct.stock ? "Contact" : "Out of Stock"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
