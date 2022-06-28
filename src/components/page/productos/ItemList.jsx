import React from 'react'
import { data } from '../../../data/api'
import Item from './Item'

const ItemList = () => {

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 mb-5">
                {data?.map(product => <Item key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ItemList