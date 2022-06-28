import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer22 = ({ greeting }) => {
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(res => setPersonajes(res.results))
            .catch(error => console.error("Error:", error))

    }, [])

    // console.log(personajes)


    return (
        <div>
        </div>
    )
}
