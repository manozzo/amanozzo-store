import React from 'react';
import Rating from '../components/rating';
import data from '../data';

export default function productscreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>Price : ${product.price}</li>
                        <li>Description :
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                   <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <div className="row">
                            <div>Status</div>
                            <div>
                                {product.countInStock>0 ? (
                                <span className="success">In Stock</span> 
                                ) : (
                                <span className="error">Unavailable</span>
                                )}
                            </div>
                        </div>
                    </ul>
                    </div> 
                </div>
            </div>
        </div>
    );
}
