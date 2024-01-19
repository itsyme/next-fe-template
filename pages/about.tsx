import Hero from "@/components/hero";
import DefaultTemplate from "@/components/templates/default-template"

const About = () => {
    return (
        <>
            <Hero title={<text className="text-6xl">About <text className="font-semibold">Project Title</text></text>}/>
        </>
    )
}

export default About;