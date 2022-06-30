import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export default function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [error, setError] = useState([false])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const productosCollection = collection(db, 'productos');
        let pedido;

        if (categoryId) {
            const filtro = query(productosCollection, where("category", "==", categoryId));
            pedido = getDocs(filtro);
        } else {
            pedido = getDocs(productosCollection);
        }
        pedido
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }).catch((error) => {
                setError(error)
            }
            ).finally(() => {
                setLoading(false)
            })
            ;
    }, [categoryId]);

console.log(products);
    return (
        <>
            <h2 className="my-5 text-center">Productos</h2>
            <main className='container main-container'>
                <ItemList products={products}/>
            </main>
        </>
    )
}