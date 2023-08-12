import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { CartModal } from "../../components/CartModal"
import { api } from "../../data/axios"
import { toast } from "react-toastify"
import "../../styles/index.scss"

export const HomePage = () => {
   const localCartList = localStorage.getItem("@CartList")

   const [search, setSearch] = useState("")
   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : [])
   const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
      const getProducts = async () => {
         try {
            const { data } = await api.get("/products")
            setProductList(data)
         } catch (error) {
            throw new Error(error)
         }
      }
      getProducts()
   }, [])

   useEffect(() => {
      localStorage.setItem("@CartList", JSON.stringify(cartList))
   }, [cartList])

   const addProduct = (newProduct) => {
      if (cartList.includes(newProduct)){
         toast.error("Esse item já foi adicionado ao carrinho")
      }
      else {
         setCartList([...cartList, newProduct])
         toast.success("Item adicionado ao carrinho")
      }
   }

   const removeProduct = (removeId) => {
      const newList = cartList.filter(item => item.id !== removeId)
      setCartList(newList)
   }

   return (
      <>
         <Header cartList={cartList} setIsOpen={setIsOpen} setSearch={setSearch} />
         <main>
            <ProductList productList={productList} addProduct={addProduct} search={search} />
            {isOpen ? <CartModal cartList={cartList} setCartList={setCartList} removeProduct={removeProduct} setIsOpen={setIsOpen}/> : null}
         </main>
      </>
   )
}
