import Layout from "@/components/layout/Layout";
import { getTopSellersData } from "./api";
import Typography from "@/components/typography/Typography";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Discount from "./components/Discount/Discount";
import Price from "./components/Price/Price";
import CardImage from "./components/CardImage/CardImage";

export default async function TopSellers() {
  const topSellers = await getTopSellersData();

  console.log("topSellers", topSellers);

  return (
    <Layout>
      <div className="bg-primary/5 relative border border-primary/30 border-solid rounded mx-auto p-2 shadow">
        <Typography text="Top Sellers" type="subtitle" />

        <div className="w-full flex flex-row justify-center items-center mt-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {topSellers?.map((topSeller) => (
                <CarouselItem
                  key={topSeller.id}
                  className="basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="border-2 border-primary/75 border-solid shadow shadow-primary overflow-hidden p-0">
                      <Link
                        href={`https://store.steampowered.com/app/${topSeller.id}`}
                        target="_blank"
                        className="ease-in-out duration-300 hover:scale-105 relative"
                      >
                        {!!topSeller.discount_percent && (
                          <Discount
                            discount_percent={topSeller.discount_percent}
                            styles="absolute top-2 left-2 z-10"
                          />
                        )}
                        <CardImage
                          src={topSeller.header_image}
                          alt={topSeller.name}
                        />
                        <Price
                          {...(topSeller.discounted && {
                            discountedPrice: topSeller.original_price,
                          })}
                          price={topSeller.final_price / 100}
                        />
                      </Link>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Layout>
  );
}
