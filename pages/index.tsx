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

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
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
            This is a starter template for{" "}
            <text className="font-semibold">Next.js</text> projects.
          </text>
        }
      />
      <div className="flex flex-col items-center justify-center py-10">
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
      
    </>
  );
};

export default Home;
