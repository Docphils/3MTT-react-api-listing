import React, {useEffect, useState} from "react";
import ItemsList from "./ItemsList";

export default function Home() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=20")
            .then((res) => res.json())
            .then((data) => {
                setItems(data.products);
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(`Error fetching data from API, ${error}`);
                setLoading(false);
            });
    }, []);

    return (
        <main>
            {loading && (
                <div className='loading'>
                    <i className='fa-solid fa-spinner'></i>
                    <span>Loading products....</span>
                </div>
            )}
            {errorMessage && (
                <div className='loading'>
                    <span>{errorMessage}</span>
                </div>
            )}
            {items && <ItemsList items={items} />}
        </main>
    );
}
