import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFail from "./pages/PaymentFail"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/failure' element={<PaymentFail/>}/>
      </Routes>
    </Router>
  )
}

export default App