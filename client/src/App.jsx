import Login from "./components/Login"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { Route,Routes } from "react-router-dom"
import Protected from "./components/Protected"


const App = () => {
  
  return (
    <div>
    <Routes>
    <Route path='/login' element={<Login/>}/>

    <Route path="/" element={<Protected Component={Home}/>}/>
    <Route path="/cart" element={<Cart/>}/>
  



    </Routes>
 
    </div>
  )
}

export default App