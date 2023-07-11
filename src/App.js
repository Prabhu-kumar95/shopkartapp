
import './App.css';
import ShopCart from './Components/ShoppingCart/ShopCart';
import NavBar from './NavComponents/NavItems/Nav';
import Header from './HeaderComponents/Header';
import Footer from './FooterComponents/Footer';
import { useState } from 'react';

const App = () => {
const CartDetails = [{
  id:1,
  Productimage:"./Pics/iphone 14.jpg",
  Productname:"APPLE iPhone 14 ((PRODUCT)RED, 128 GB)",
  Productdescription:"Description:iPhone 14,with superfast A15 Bionic chip and bright XDR Display",
  Productprice:"₹70000"

},
{
  id:2,
  Productimage:"./Pics/Airpods.jpg",
  Productname:"APPLE Airpods Pro Bluetooth Headset(White)",
  Productdescription:"Description:AirPods Pro have been Active Noise Cancellation for immersive sound,connect magically to your Apple devices.",
  Productprice:"₹16,990"
},
{
  id:3,
  Productimage:"./Pics/Apple ipad.jpg",
  Productname:"APPLE iPad(64GB ROM with Wi-Fi Only)(Silver)",
  Productdescription:"Description:Apple iPad.boasts an lightning-fast A14 Bionic chip,A big leap in battery life, a durable design,and a bright Super Retina XDR display.",
  Productprice:"₹43,990"
},
{
  id:4,
  Productimage:"./Pics/Apple watch.jpg",
  Productname:"APPLE Watch(SE)",
  Productdescription:"Description:Essential features to help you stay connected, active, healthy and safe.",
  Productprice:"₹24,999"
},
{
  id:5,
  Productimage:"./Pics/Apple chargingpad.jpg",
  Productname:"APPLE MHXF3ZM/A Charging Pad",
  Productdescription:"Description:Wireless Charging Case for Your Apple Devices with Rechareablebattery.",
  Productprice:"₹13,999"
},
{
  id:6,
  Productimage:"./Pics/Apple mini chip.jpg",
  Productname:"APPLE M1 Chip",
  Productdescription:"Description:8 GB RAM/integrated 8-core GPU Graphics/512 GB SSD Capacity/Mac OS Big Sur) Microtower(Mac Mini (MGNT3HN/A.",
  Productprice:"₹79,990"
},
{
  id:7,
  Productimage:"./Pics/Apple earpods.jpg",
  Productname:"APPLE EarPods",
  Productdescription:"Description:With Lightning Connector Wired Headset  (White, In the Ear).",
  Productprice:"₹1,699"
},
{
  id:8,
  Productimage:"./Pics/Homepod.jpg",
  Productname:"APPLE HomePod Mini(White)",
  Productdescription:"Description:Meet the HomePod mini whose compact size will fit perfectly wherever you place it. With the help of Siri.",
  Productprice:"₹24,999"
}];

const [cart,setCart]=useState([]);

 const findFromCart =(cart=[],item={})=>{
  return cart.some((d)=> d.id===item.id)
 }
 const addToCart = (data) => {
  setCart([...cart,{...data}])
 }
    

 const removeFromCart = (id)=> {
      setCart(oldValues => {
        return oldValues.filter(data => data.id !== id)
      })
 } 
console.log(cart)




  return (
    <div className="App">
     <NavBar count={cart.length}/>
     <Header />
     <div>

<section className="py-0">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
         
        {CartDetails.map((d,i)=>(
        <ShopCart data={d} addToCart={addToCart} removeFromCart={removeFromCart} isAdded={findFromCart(cart,d)}/> 
     ))};    
        </div>
    </div>
</section>
</div>
    <Footer />
</div>
  );
        }

export default App;

