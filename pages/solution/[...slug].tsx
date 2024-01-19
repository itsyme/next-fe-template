import { useRouter } from "next/router";


const SolutionPage = () => {
    const router = useRouter();
    const id = router.query.slug;
    return (
        <div className="flex justify-center">
            <text className="text-4xl font-semibold mt-4">
                Solution {id}
            </text>
        </div>
    )
}

export default SolutionPage;