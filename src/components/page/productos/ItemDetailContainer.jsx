import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from './Loader';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const productRef = doc(db, "productos", id);
        const pedido = getDoc(productRef);
        pedido
            .then((snapshot) => {
                setDetail({ ...snapshot.data(), id: snapshot.id });
            })
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className='container'>
            {loading ? <Loader loading={loading} /> :
                <>
                    <ItemDetail detail={detail} />
                </>
            }
        </div>
    )
}

export default ItemDetailContainer