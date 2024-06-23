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
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448320711_1264162041222669_7152866025444886225_n.?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6dp14XthikUQ7kNvgGz1QZ0&_nc_ht=scontent.xx&oh=03_Q7cD1QG2frCMlpNB6MkQiAsR_diEsubDy0AIP2kxFaW4ivoKDA&oe=666E1DCD",
    title: "Tinted Red Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 2,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448322962_1434006670816399_576771067582134662_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BJvsfsT-jf0Q7kNvgGOw3FD&_nc_ht=scontent.xx&oh=03_Q7cD1QGYb6ngutf1BIWCCV7W52MhA4dXhFRGwDQWgdBQgpewdA&oe=666E3824",
    title: "Tinted purple bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 3,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448277977_195845506957586_2281739624671715658_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yXheTvScjp4Q7kNvgHPmNSN&_nc_ht=scontent.xx&oh=03_Q7cD1QGR9UJdZP_KxGMs04Yk2scKAZnWEg-V7CT4iGI8EZ9G_w&oe=666E2E8E",
    title: "Tinted Orange Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 4,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448395217_478972598135897_6007743532773814209_n.?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aDNesBfvUQMQ7kNvgEqnc74&_nc_ht=scontent.xx&oh=03_Q7cD1QGQjncxhIm82ABc7B6UxUetJ8G6PSzxWBNOWFSsklxLXQ&oe=666E315D",
    title: "Tinted Blue Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 5,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448390392_999780931876084_7337356023028465861_n.?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QFGoVCEOiOkQ7kNvgFvsyKS&_nc_ht=scontent.xx&oh=03_Q7cD1QFUnQDe2qUOl6GFwbG_-Nw1hr2Wenxn3OEhgEdn_YMs5Q&oe=666E195A",
    title: "Tinted Green Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 6,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/414947784_1893129777775928_8733658063879343285_n.?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nUx6EiPUAAMQ7kNvgHHmYDx&_nc_ht=scontent.xx&oh=03_Q7cD1QHlLlBlKoudLNYcw9hir_avOWeRQ31LnOOyu5Qcg-lQTA&oe=666E2954",
    title: "Tinted Pink Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 7,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448387760_809546137908849_898771647936327366_n.?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=izUKFxEIHpYQ7kNvgEXIlq-&_nc_ht=scontent.xx&oh=03_Q7cD1QGlUAsRYGBD_FnKtpnssOlcW3Xu5YSuQ91Z-u7IlvuboQ&oe=666E31B0",
    title: "Tinted Black Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 8,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/444760757_844431954408238_6594840944773875241_n.?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OzIHlo86avUQ7kNvgGuSS7m&_nc_ht=scontent.xx&oh=03_Q7cD1QEoK_9c2LmgSf4N-KmfS9QZXtG7104oqklac8xSTCeB2w&oe=666E435D",
    title: "Tinted Pink Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 60,
  },
  {
    id: 9,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448307338_1402175897154259_7778591086699078487_n.?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-ALOXomrlr0Q7kNvgHSwPCL&_nc_ht=scontent.xx&oh=03_Q7cD1QGM2-YM72FM6Un-53JYjoc85m6tsILQu2FaQcUrf81rDQ&oe=666E3B62",
    title: "Silver Heart Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 10,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448395217_1231347108056749_7856246538123009955_n.?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U94Dj6M24i4Q7kNvgHfMA6A&_nc_ht=scontent.xx&oh=03_Q7cD1QHty7B8JyP82MikaTFxUoxSHukM4y5ZxlXi7SK7GqTtGg&oe=666E46E9",
    title: "Silver Cube Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 11,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448346448_849775749816607_105998749741790024_n.?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BAQftIcDMkgQ7kNvgGXSS7j&_nc_ht=scontent.xx&oh=03_Q7cD1QFLW4M8VSJaCGCACXA5s7r-ctBVOpVJMi2b6aBSKxDy0g&oe=666E2C0A",
    title: "Rose Gold Heart Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 12,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/408888455_1098255737941622_1957596412998165825_n.?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5mY96sImIdcQ7kNvgEoQS8a&_nc_ht=scontent.xx&oh=03_Q7cD1QGIx_RWm3gBfcFghHIwmBdnWeyt3-K_R2zwt6sCyNJoJw&oe=666E2A11",
    title: "Rose Gold Cube Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 13,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448336674_2420634704801646_4842316766548873522_n.?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M1J7bSizZ9IQ7kNvgGwg5AK&_nc_ht=scontent.xx&oh=03_Q7cD1QGpWBmf3TUgljmYKmg5fNGSqyn8uyepBTJRcdTsw9vM5A&oe=666E1606",
    title: "Gold Heart Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 14,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448320457_1660831638024786_5909702365419051651_n.?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zyo65EhnLfgQ7kNvgHqa4p8&_nc_ht=scontent.xx&oh=03_Q7cD1QH6EPvoC_nkGckRBLlMlIk6H1pVNg8qyNjgy_tL_toM2w&oe=666E32B1",
    title: "Silver star Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 15,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448399330_1602915593615192_5185775940645443403_n.?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=91baN8wulkgQ7kNvgFRvd_p&_nc_ht=scontent.xx&oh=03_Q7cD1QGmzbR3g-WV6RFojDeveOZ0fKY-XG-tnQkg4-WXcSklfw&oe=666E292F",
    title: "Rose Gold crown Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 16,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448406721_425748396954870_2954395167117634964_n.?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LdG7cqBNRJoQ7kNvgFda72P&_nc_ht=scontent.xx&oh=03_Q7cD1QGpIf0RFWne6ANDGCvETZihCmKcrNAoxvoYS7Qym0Cu8Q&oe=666E1D83",
    title: "Rose Gold crown Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 17,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448230685_435003212823039_1384061972709644107_n.?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PUo2F7TPGTIQ7kNvgFGPWkY&_nc_ht=scontent.xx&oh=03_Q7cD1QFXoLAWLDN3j3Q40IaATqSAPSYN--dAGewdbGc2DOOQBg&oe=666E1FAC",
    title: "Silver Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 18,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448403886_1287793848865163_7183684976363152121_n.?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0OhZgFPrnq4Q7kNvgHB2XaX&_nc_ht=scontent.xx&oh=03_Q7cD1QG9k7AchO0UwfRQJ1StLdsbThmIhCRx9EadOJI8MALP4Q&oe=666E473F",
    title: "Rose Gold Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 19,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448275838_1602203877230971_1393918490368720013_n.?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=juC8E944KBsQ7kNvgE5Gk0e&_nc_ht=scontent.xx&oh=03_Q7cD1QG-xWUTkHTaph84EfjMiLkTCp9krV1RqSbMcMW1sDE4vA&oe=666E43FD",
    title: "Gold Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 20,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448237395_481448597889422_7401887243629101157_n.?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qKpSfXCjEmMQ7kNvgG_yH9m&_nc_ht=scontent.xx&oh=03_Q7cD1QGfTFQ_rMicM8NRhCLsXtFiSfeOTVnisGzyCXvEn5lZ6g&oe=666E316E",
    title: "Triple toned heart Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 21,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448466260_734176898687954_2972362881222131257_n.?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tASF1Li6CoIQ7kNvgG2aZL_&_nc_ht=scontent.xx&oh=03_Q7cD1QHxFUcKvxqVIiDXrJ7RYrVXiv6ZEbCLoWKUK4QrgTVszw&oe=666E4455",
    title: "Cute Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 100,
  },
  {
    id: 22,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448332569_2273457042992800_5671012109164766404_n.?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=l8Quj5aE6PYQ7kNvgF7kYDN&_nc_ht=scontent.xx&oh=03_Q7cD1QF9_iUU_vg1c6H_K9tGd_fE7eo6OdoxtSx3YQXrDNnqGA&oe=666E2477",
    title: "Matching Bracelet",
    stock: true,
    description: "U can buy single pieces too...Its 300 for two.",
    price: 300,
  },
  {
    id: 22,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448248104_814578517269071_3485650768311433487_n.?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AiL9ea9iZJUQ7kNvgERNoPj&_nc_ht=scontent.xx&oh=03_Q7cD1QGu9Ls6YrleR4Ni6Z-xv79DONr3VrSHXixNrfAIXaUuQA&oe=666E383E",
    title: "B&W Bracelet",
    stock: true,
    description: "Customizable bracelet",
    price: 70,
  },
  {
    id: 23,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448412192_812969460789302_5581981158376202862_n.?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RPLPCbsebREQ7kNvgGEB6qs&_nc_ht=scontent.xx&oh=03_Q7cD1QFi4r5AYRUTVQOykLsurNr4uGwVRSSEoI44TkKB4_dpaw&oe=666E1C4D",
    title: "Ringg",
    stock: true,
    description:
      "It can come in 3 different colors...silver, gold and rosegold",
    price: 30,
  },
  {
    id: 24,
    image:
      "https://scontent.xx.fbcdn.net/v/t69.46293-2/448366360_985768089511187_234783747165497945_n.?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w9VrM-Tuii0Q7kNvgHxAWeq&_nc_ht=scontent.xx&oh=03_Q7cD1QGl6L-jQXOLG7IVeopYnrztvJSnq4Ewh7VRMXXHlzmaEg&oe=666E4036",
    title: "Make ur own!",
    stock: true,
    description: "Customizableee",
    price: 80,
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
