// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ItemDetail from './ItemDetail';
// import Loader from './Loader';


// const ItemDetailContainer = () => {
//     const [detail, setDetail] = useState([])
//     const [loading, setLoading] = useState(true)
//     const { id } = useParams()


//     const getData = () => {
//         fetch('../../../../public/api.json')
//             .then(res => res.json())
//             .then(data => {
//                 if (id) {
//                     setDetail(data.find(products => products.id === id))
//                 }
//             })
//     }

//     useEffect(() => {
//         setLoading(true)
//         const fetch = new Promise((res, rej) => {
//             res(getData())
//         })
//         fetch
//             .then(setLoading(true))
//             .finally(() => setLoading(false))
//     }, [])

//     return (
//         <div className='container my-5'>
//             {/* {loading ? <Loader loading={loading} /> : */}
//                 <>
//                     <ItemDetail detail={detail} />
//                 </>
            
//         </div>
//     )
// }

// export default ItemDetailContainer