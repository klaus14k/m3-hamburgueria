import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import "./index.scss"

export const CartModal = ({ cartList, setIsOpen, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   const clearAll = () => {
      localStorage.clear()
      setCartList([])
   }

   return (
      <div role="dialog" id="modalController">
         <div id="modalContainer">
            <div className="modalHeader">
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className="modalList">
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className="modalEnd">
               <div>
                  <span className="headline">Total</span>
                  <span className="body">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="button default" onClick={clearAll}>Remover todos</button>
            </div>
         </div>
      </div>
   )
}
