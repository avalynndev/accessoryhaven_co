"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight,Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Products are out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Where timeless{" "}
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {" "}
                beauty {""}
              </span>
              comes alive 💗
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <div className="flex justify-center space-y-0 space-x-4">
            <div className="w-1/2 md:w-1/4">
              <Button className="w-full font-bold group/arrow">
                Explore Products
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="w-1/2 md:w-1/4">
              <Button
                asChild
                variant="secondary"
                className="w-full font-bold group/instagram"
              >
                <Link
                  href="https://www.instagram.com/accessoryhaven_co/"
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <Instagram className="size-5 mr-2 group-hover/instagram:translate-x-1 transition-transform" />
                  Instagram page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
