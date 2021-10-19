import { useEffect, useState } from 'react';

const useFetch = () => {
    const url = 'https://api.npoint.io/f20a7309a7a019a15269'
    const [products, setProducts] = useState([0])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data)
            )
    }, [])
    return [products]
}

export default useFetch;
