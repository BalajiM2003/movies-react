import { useEffect } from 'react';
import { useState } from 'react'
export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const key = "b512a324be1e24352e57d97016323cef";
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
    useEffect(() => {
        async function fetchMovies() {
            fetch(url)
                .then((res) => res.json())
                .then((jsonData) => setData(jsonData.results))

        }
        fetchMovies();
    }, [url]);
    return { data };
}


