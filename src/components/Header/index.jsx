import { useState } from "react"
import Logo from "../../assets/Logo.svg"
import { MdSearch, MdShoppingCart } from "react-icons/md"
import "./index.scss"

export const Header = ({ setIsOpen }) => {
   const [value, setValue] = useState("")

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
            <form>
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
