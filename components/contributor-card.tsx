import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card"


const ContributorCard = ({name, githubUrl, linkedinUrl}: {name: string, githubUrl: string, linkedinUrl: string}) => {
    const handleGithubClick = () => {
        window.open(githubUrl, "_blank");
    }
    const handleLinkedinClick = () => {
        window.open(linkedinUrl, "_blank");
    }

    return (
        <Card className="w-48 h-36 p-6">
            <CardTitle>
                <text className="text-xl font-semibold">
                    {name}
                </text>
            </CardTitle>
            <CardContent>
                <div className="flex justify-between w-full pt-8">
                    <Image src="/github-mark.svg" width="30" height="30" alt={""} className="hover:cursor-pointer" onClick={handleGithubClick}/>
                    <Image src="/LI-In-Bug.png" width="30" height="30" alt={""} className="hover:cursor-pointer" onClick={handleLinkedinClick} />
                </div>
            </CardContent>
        </Card>
    )
}

export default ContributorCard;