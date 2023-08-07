import { ProductCard } from "./ProductCard"
import "./index.scss"

export const ProductList = ({ productList }) => {
   return (
      <ul className="ul">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   )
}
