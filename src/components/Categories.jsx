import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const db = getFirestore();

        const categoriesCollection = collection(db, 'categories');

        getDocs(categoriesCollection).then((snapshot) => {
            setCategory(snapshot.docs.map((doc) => doc.data().name));
        });
    }, []);
    return (
        <>
            {category.map((el) => (
                <li className="nav-item text-reset">
                    <Link to={"/category/" + el} className=" a ">
                        {el}
                    </Link>
                </li>
            ))}
        </>
    )
}
