import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { CartModal } from "../../components/CartModal"
import { api } from "../../data/axios"
import "../../styles/index.scss"

export const HomePage = () => {
   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState([])
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

   // useEffect(() => {
   //    const saveProducts = () => {
   //       localStorage.setItem(`@${product.name}`)
   //    }
   //    saveProducts()
   // }, [cartList])

   // const addProduct = (newProduct) => {
   //    setCartList([...cartList, newProduct])
   // }

   //   const removeCard = (removeId) => {
   //       const newList = cartList.filter(item => item.id !== removeId)
   //       setCartList(newList)
   //   }

   return (
      <>
         <Header setIsOpen={setIsOpen}/>
         <main>
            <ProductList productList={productList} />
            {isOpen ? <CartModal cartList={cartList} setCartList={setCartList} setIsOpen={setIsOpen}/> : null}
         </main>
      </>
   )
}
