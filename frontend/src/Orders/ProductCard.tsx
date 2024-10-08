import { formatPrice } from "./helpers";
import { Product } from "./types";

type Props = {
    product: Product;
    onSelectProduct: (product: Product)=>void;
    isSelected: boolean;
}



function ProductsCard({product, onSelectProduct, isSelected}:Props) {
    return (

        <div 
            className={`order-card-container ${isSelected ? 'selected':''}`}
            onClick={()=>onSelectProduct(product)}
        >
            <h3 className="order-card-content">
                {product.name}
            </h3>
            <img 
                src={product.imageUri}
                className="order-card-image"
                alt={product.name}
            />
            <h3 className="orders-card-price">
                {formatPrice(product.price)}
                {/* {product.price} */}
            </h3>
            <div className="order-card-description">
                <p>
                    {product.description}
                </p>
            </div>

        </div>


    )
}
export default ProductsCard;