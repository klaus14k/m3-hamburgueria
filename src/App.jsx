import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={2 * 1000} />
    </>
  )
}

export default App
