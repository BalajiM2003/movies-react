import { useEffect } from "react"
import { Card } from "../Components/Card"
import { useFetch } from "../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = useFetch(apiPath, queryTerm);

    useEffect(() => {
        document.title = `Search result for ${queryTerm}`;
    })
    return (
        <>
            <main className="container">
                <h5 className=" header text-danger">
                    {movies.length == 0 ? `No Results found for ${queryTerm}` : `Result for ${queryTerm}`}
                </h5>
                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-5 py-5  w-60 '>
                    {movies && movies.map && movies.map((movie) => {
                        return <Card key={movie.id} movie={movie} />;
                    })}
                </div>

            </main>
        </>
    )
}
