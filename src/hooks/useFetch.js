import { useEffect, useState } from 'react';

const useFetch = () => {
    const url = 'https://api.npoint.io/f20a7309a7a019a15269'
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data)
            )
    }, [])
    return [foods]
}

export default useFetch
