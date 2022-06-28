import ItemList from './ItemList'

export default function ItemListContainer() {

    // const [loading, setLoading] = useState(true)
    // const { categoryId } = useParams()

    // const getData = () => {
    //     // fetch('../../../../public/api.json')
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         if (categoryId) {
    //     //             setProducts(data.filter(products => products.category === categoryId))
    //     //         } else {
    //     //             setProducts(data)
    //     //         }
    //     //     })
    // }

    // useEffect(() => {
    //     setLoading(true)
    //     const fetch = new Promise((res, rej) => {
    //         res(getData())
    //     })
    //     fetch
    //         .finally(() => setLoading(false));
    // }, [])

    return (
        <>
            <h2 className="my-5 text-center">Productos</h2>
            <main className='container main-container'>
                <ItemList/>
                {/* {loading ? <Loader loading={loading} /> : <ItemList products={products} />} */}
            </main>
        </>
    )
}