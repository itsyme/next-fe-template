import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import DefaultTemplate from "@/components/templates/default-template";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <DefaultTemplate>
        <Hero
            title={
                <text className="text-6xl">
                    Welcome to <text className="font-semibold">Project Title</text>
                </text>
            }
            subtitle={
                <text className="text-2xl">
                    This is a starter template for <text className="font-semibold">Next.js</text> projects.
                </text>
            }
        />
    </DefaultTemplate>
  );
}

export default Home;
