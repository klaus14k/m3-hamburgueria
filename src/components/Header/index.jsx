import Logo from "../../assets/Logo.svg"
import { MdSearch, MdShoppingCart } from "react-icons/md"
import "./index.scss"
import { useState } from "react"

export const Header = ({ setIsOpen, cartList, setSearch }) => {

   const [value, setValue] = useState("")

   const submit = (event) => {
      event.preventDefault()
      setSearch(value)
      setValue("")
   }

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
            <form onSubmit={submit}>
               <input
                  className="input"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   )
}
