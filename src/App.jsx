import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import { SignUp } from "./Component/SignUp/SignUp";
import { Login } from "./Component/Login/Login";
import { Product } from "./Component/Prod/Product";
import { NestProduct } from "./NestProduct/NestProduct";
import { Payment } from "./Component/Payment/Payment";
import { Succ } from "./Component/Order/Succ";
function App() {



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/pro" element={<Product/>}/>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nestPro" element={<NestProduct/>} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/succ" element={<Succ/>}/>

    </Routes>
    </BrowserRouter>
    <ToastContainer theme="dark"/>
    
  
    </>
  )
}

export default App
