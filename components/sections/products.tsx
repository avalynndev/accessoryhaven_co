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
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448311551_796266262569286_3372917492360803892_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NRN3fHp9GD0Q7kNvgG-09dT&_nc_ht=scontent.xx&oh=03_Q7cD1QHepugS26DvgIh1Wb2GodVB-xc_96NrvfuZHMOQsewBVA&oe=666E0CA5",
    title: "Tinted Red Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448322962_1434006670816399_576771067582134662_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BJvsfsT-jf0Q7kNvgGOw3FD&_nc_ht=scontent.xx&oh=03_Q7cD1QGYb6ngutf1BIWCCV7W52MhA4dXhFRGwDQWgdBQgpewdA&oe=666E3824,
    title: "Tinted purple bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 3,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448277977_195845506957586_2281739624671715658_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yXheTvScjp4Q7kNvgHPmNSN&_nc_ht=scontent.xx&oh=03_Q7cD1QGR9UJdZP_KxGMs04Yk2scKAZnWEg-V7CT4iGI8EZ9G_w&oe=666E2E8E",
    title: "Tinted Orange Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 4,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448395217_478972598135897_6007743532773814209_n.?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aDNesBfvUQMQ7kNvgEqnc74&_nc_ht=scontent.xx&oh=03_Q7cD1QGQjncxhIm82ABc7B6UxUetJ8G6PSzxWBNOWFSsklxLXQ&oe=666E315D",
    title: "Tinted Blue Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 5,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448390392_999780931876084_7337356023028465861_n.?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QFGoVCEOiOkQ7kNvgFvsyKS&_nc_ht=scontent.xx&oh=03_Q7cD1QFUnQDe2qUOl6GFwbG_-Nw1hr2Wenxn3OEhgEdn_YMs5Q&oe=666E195A",
    title: "Tinted Green Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 6,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448360484_403996739306180_837451128373318465_n.?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qndXSv09vYsQ7kNvgH_o2_1&_nc_ht=scontent.xx&oh=03_Q7cD1QFNS2AhlvpCQ8RQxt0UH-Qi7qBzw0_EIfuv8r0qcLodSA&oe=666E4B0B",
    title: "Tinted Pink Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 7,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448387760_809546137908849_898771647936327366_n.?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=izUKFxEIHpYQ7kNvgEXIlq-&_nc_ht=scontent.xx&oh=03_Q7cD1QGlUAsRYGBD_FnKtpnssOlcW3Xu5YSuQ91Z-u7IlvuboQ&oe=666E31B0",
    title: "Tinted Black Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  {
    id: 8,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/444760757_844431954408238_6594840944773875241_n.?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OzIHlo86avUQ7kNvgGuSS7m&_nc_ht=scontent.xx&oh=03_Q7cD1QEoK_9c2LmgSf4N-KmfS9QZXtG7104oqklac8xSTCeB2w&oe=666E435D,
    title: "Tinted Pink Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 60,
  },
  { 
    id: 9,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448307338_1402175897154259_7778591086699078487_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-ALOXomrlr0Q7kNvgHSwPCL&_nc_ht=scontent.xx&oh=03_Q7cD1QGM2-YM72FM6Un-53JYjoc85m6tsILQu2FaQcUrf81rDQ&oe=666E3B62",
    title: "Silver Heart Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 100,
  },
  {
    id: 10,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448395217_1231347108056749_7856246538123009955_n.?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U94Dj6M24i4Q7kNvgHfMA6A&_nc_ht=scontent.xx&oh=03_Q7cD1QHty7B8JyP82MikaTFxUoxSHukM4y5ZxlXi7SK7GqTtGg&oe=666E46E9",
    title: "Silver Cube Bracelet",
    stock: true,
    description:
      "Customizable bracelet",
    price: 100,
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
