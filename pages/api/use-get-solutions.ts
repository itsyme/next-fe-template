import { useQuery } from "react-query";

type Solution = {
    id: number;
    title: string;
    description: string;
}

const useGetSolutions = () => {
    const dummySolutions: Solution[] = []
    for (let i = 0; i < 10; i++) {
        dummySolutions.push({
            id: i,
            title: `Solution ${i}`,
            description: `This is the description of solution ${i}`,
        })
    }
    return useQuery("solutions", async () => {
        const res = dummySolutions;
        return res;
    });
}

export default useGetSolutions;