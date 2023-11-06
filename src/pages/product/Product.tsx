import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {

// Fetch Data and Send to Single Component

  return (
    <div className="product">
        <Single {...singleProduct}/>
    </div>
  )
}

export default Product;