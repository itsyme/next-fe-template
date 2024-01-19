import { useRouter } from "next/router";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"


const ClickableCard = ({id, title, description}: {id: number, title: string, description?: string}) => {
    const router = useRouter();
    return (
        <Card className="h-56 w-64 hover:cursor-pointer hover:bg-slate-100 active:bg-slate-50" onClick={() => router.push(`/solution/${id}`)}>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default ClickableCard;