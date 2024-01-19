import Header from "../header"


const DefaultTemplate = ({ children }: {children: any}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default DefaultTemplate