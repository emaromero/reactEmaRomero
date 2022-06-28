import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="container mydiv">
            <div className="row">

                <div className="col-md-4">
                    <div className="bbb_deals">
                    <Link to={"/item/" + product.id}><img src={product.images} className="card-img-top shop-img" alt="product" /></Link>
                        <div className="bbb_deals_item_name">{product.name}</div>
                        <div className="bbb_deals_slider_container">
                            <div className=" bbb_deals_item">
                                <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                                <div className="bbb_deals_content">
                                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div className="bbb_deals_item_category"><h4>{product.marca}</h4></div>
                                    </div>
                                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                        <div className="bbb_deals_title">{product.name}</div>
                                        <div className="bbb_deals_item_price ml-auto">$ {product.price}</div>
                                    </div>
                                    <div className="available">
                                        <div className="available_line d-flex flex-row justify-content-start">
                                            <div className="available_title">{product.category}</div>
                                        </div>
                                        <div className="available_bar"><span style="width:17%"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item




