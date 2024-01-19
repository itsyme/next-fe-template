import { ReactElement } from "react";


const Hero = ({title, subtitle, imageUrl, videoUrl}: {title: ReactElement, subtitle?: ReactElement, imageUrl?: string, videoUrl?: string}) => {
    return (
        <div className="flex justify-center p-12">
            <div className="flex flex-col items-start gap-5">
                <div>
                   {title}
                </div>
                <div>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

export default Hero;