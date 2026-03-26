
type Params = {
    params: Promise<{ name: string }>
}

const issue = {theme: "Launch"}

export default async function IssuePage({params} : Params) {
    const { name } = await params
    return (
        <main className="issue-page">
            <header>
                <p>Spring 2026</p>
                <h1>{issue.theme}</h1>
            </header>
        </main>
    );
}