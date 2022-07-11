import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loader from './Loader'

export default function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
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
            })
            .finally(() => {
                setLoading(false)
            })
            ;
    }, [categoryId]);

console.log(products);
    return (
        <>
            <h2 className="my-5 text-center">Productos</h2>
            <div className='container main-container'>
            {loading ? <Loader loading={loading} /> :
                <ItemList products={products}/>
    }
            </div>
        </>
    )
}