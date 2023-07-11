


function ShopCart({data=[],addToCart,isAdded,removeFromCart}){
   
   
    
    return(
        <div className="col mb-5">
        <div className="card h-100">
            
            <img className="card-img-top" src={data.Productimage} alt="..."/>
            
            <div className="card-body p-0">
                <div className="text-center">
                    
                    <h5 className="fw-bolder">{data.Productname}</h5>
                    
                    <p className="Descb">{data.Productdescription}</p>
                   
                    <h6 className="fw-bolder">{data.Productprice}</h6>
                </div>
            </div>
             
             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">{ isAdded ?<button onClick={()=> removeFromCart(data.id)} className="btn btn-outline-dark mt-auto" >RemoveFromCart</button>:<button onClick={()=> addToCart(data)} className="btn btn-outline-dark mt-auto" >AddToCart</button>}</div>
            </div>
        </div>
        </div>
    );
}
export default ShopCart;
