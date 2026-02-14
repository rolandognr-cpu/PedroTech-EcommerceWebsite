import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"


export default function ProductCard({product}) {
    const { cartItems, addToCart } = useCart()
    const productInCart = cartItems.find((item) => item.id === product.id)
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : ""

    return (
        <div className="product-card">
            <img
                src={product.image} 
                alt={product.name}
                className="product-card-image"
            />
            <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                    <button className="btn btn-prymary" onClick={() => addToCart(product.id)}>Add to Cart {productQuantityLabel}</button>
                </div>
            </div>
        </div>
    )
}