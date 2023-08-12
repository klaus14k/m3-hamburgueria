import { ProductCard } from "./ProductCard"
import "./index.scss"

export const ProductList = ({ productList, addProduct, search }) => {
   
   const filteredList = productList.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) )

   return (
      <ul className="ul">
         {filteredList.map((product) => (
            <ProductCard key={product.id} product={product} addProduct={addProduct} />
         ))}
      </ul>
   )
}