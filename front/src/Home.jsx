import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home =()=>{

const [amount, setAmount] = useState(null);
const navigate = useNavigate();

const checkouthandler = async () => {
    const { data: { key },} = await axios.get("http://localhost:8000/api/getkey");
    const {data: { order },} = await axios.post("http://localhost:8000/order", { amount });
    console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Donation",
      description: "Razorpay Donation",
      image: "",
      order_id: order.id,
      callback_url: "http://localhost:8000/paymentverification",
      prefill: {
        name: "Rohit",
        email: "rohitpandey.8477@gmail.com",
        contact: "6397434342",
      },
      notes: {
        address: "razorapy official",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
    razor.on("payment.failed",()=>{
      razor.close();
      navigate("/failure")    })
  };

  const handleChange = (e) => {
    const  value =Number(e.target.value);
    if (typeof value !== "number") {
      alert("Please enter number");
      return;
    }
    setAmount(value);
  };

  return (
    <div >
    <input name="amount" onChange={handleChange} value={amount} type="number" min="0"/>
    {amount>0?(<button onClick={checkouthandler}>Pay {amount}</button>):(<button disabled>Pay {amount}</button>)}
    </div>
        );
  };

export default Home;
