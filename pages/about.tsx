import ContributorCard from "@/components/contributor-card";
import Hero from "@/components/hero";
import DefaultTemplate from "@/components/templates/default-template"
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { contributors } from "@/contributors";

const About = () => {
    return (
        <>
            <Hero title={<text className="text-6xl">About <text className="font-semibold">Project Title</text></text>}/>
            <div className="flex justify-center w-full">
                <div className="max-w-screen-lg">
                    <text className="text-xl font-medium">
                        About Project Title
                    </text>
                    <br/>
                    <br/>
                    <text className="text-lg">
                        "Project Title" is an innovative frontend template designed to streamline the development process for Next.js frontends. 
                        <br/>
                        <br/>
                        This project aims to provide developers with a solid foundation for building modern, responsive web applications by offering a comprehensive set of pre-configured components, styles, and utilities. 
                        With a focus on efficiency and flexibility, "Project Title" empowers developers to quickly scaffold and customize their Next.js projects, reducing the initial setup time and allowing them to concentrate on crafting unique and feature-rich user interfaces. 
                        The template incorporates best practices in web development, ensuring optimized performance, accessibility, and scalability. 
                        Whether you're a seasoned developer or just starting with Next.js, "Project Title" offers a user-friendly and extensible solution to expedite the creation of cutting-edge frontends.
                    </text>
                    <Separator className="my-8" />
                    <text className="text-xl font-medium">
                        Project Title Origins
                    </text>
                    <br/>
                    <br/>
                    <text className="text-lg">
                        "Project Title" originated from a combination of inspiration and necessity in my journey as a frontend developer. 
                        Faced with the repetitive task of setting up Next.js projects and recognizing the need for a more efficient and standardized approach, the idea for this frontend template took root. 
                        Drawing from my experiences and frustrations, I envisioned a tool that could alleviate the initial development hurdles, allowing developers to dive straight into the creative aspects of their projects. 
                        The inspiration behind "Project Title" lies in the desire to contribute to the developer community by providing a resource that simplifies the process of creating Next.js frontends, promoting consistency and saving valuable time. 
                        The project is a testament to the belief that empowering developers with a solid foundation fosters innovation and enables them to focus on building exceptional user experiences.
                    </text>
                    <div className="flex justify-center py-10">
                        <Drawer>
                            <DrawerTrigger asChild>
                              <Button>
                                View Contributors
                              </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <text className="text-2xl font-medium pl-5">
                                        Contributors
                                    </text>
                                </DrawerHeader>
                                <div className="flex flex-wrap gap-4 pb-2 w-full">
                                    {contributors.map((contributor, index) => (
                                        <ContributorCard key={index} name={contributor.name} githubUrl={contributor.githubUrl} linkedinUrl={contributor.linkedinUrl}/>
                                    ))}
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;