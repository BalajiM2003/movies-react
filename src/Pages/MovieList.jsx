import { useEffect } from "react"
import { Card } from "../Components/Card"
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

export const MovieList = ({ title, apiPath }) => {
    const { data: movies } = useFetch(apiPath);
    useEffect(() => {
        document.title = title;
    });
    const navigator = useNavigate();
    return (
        <div>
            <main className="container mt-5">
                <div className=" info bg-body-tertiary p-4 border  mb-3 py-5">
                    <h3 className="text-primary">Welcome Movie Hunt</h3>
                    <p className="lead">Discover movies you'll love with personalized suggestions,curated collections, and quick searches - your guidebto finding great films</p>
                    <button className="btn btn-primary" onClick={() => { navigator("/movies/upcoming") }}>Explore Now</button>
                </div>
                <div className='container'>
                    <h2 className="para text-primary">Your great Movie searching site </h2>

                    <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-5 py-5  w-60 '>
                        {movies && movies.map && movies.map((movie) => {
                            return <Card key={movie.id} movie={movie} />;
                        })}
                    </div>
                </div>
            </main>
        </div>
    )

}
