import { Inter } from "next/font/google";
import Hero from "@/components/hero";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useGetSolutions from "./api/use-get-solutions";
import ClickableCard from "@/components/clickable-card";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { data: solutions } = useGetSolutions()
  return (
    <>
      <Hero
        title={
          <text className="text-6xl">
            Welcome to <text className="font-semibold">Project Title</text>
          </text>
        }
        subtitle={
          <text className="text-2xl">
            A starter template for{" "}
            <text className="font-semibold">Next.js</text> projects.
          </text>
        }
      />
      <div className="flex flex-col items-center justify-center py-10 mb-4">
        <Card className="py-8 px-48">
            <div className="flex items-start w-full max-w-screen-lg">
                <text className="text-4xl">
                    What <text className="font-semibold">Project Title</text> <br/> does:
                </text>
            </div>
            <Carousel className="w-full max-w-2xl py-4">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center max-w-f">
        <text className="text-3xl font-semibold mb-5">
          Our Solutions
        </text>
        <ScrollArea className="max-w-screen-xl">
          <div className="flex gap-4 w-max mb-6">
            {solutions?.map((solution, index) => (
              <ClickableCard key={index} title={solution.title} description={solution.description}/>
            ))}
          </div>
          <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </div>
    </>
  );
};

export default Home;
