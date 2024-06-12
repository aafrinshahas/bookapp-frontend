
import { useContext, useEffect } from "react";
import { bookContext } from "../ContextProvider";
import Bookdesc from "./Bookdesc";
function Favbook(){
    const {fav, loadMore, removeFromFav, isLoad, setIsLoad, handleShow, setFav} = useContext(bookContext);
useEffect(()=>{
    if(fav.length != 0){
        setIsLoad(false)
     }else{
        setIsLoad(true)
     }
   
}, [])
    return(
        <div>
             <Bookdesc/>
     {isLoad? <p>There is no Favourite books</p>:
         <div className="books-container flex flex-wrap gap-8 mb-7">
         {fav.slice(0, loadMore).map((item, index)=>
             (
                 <div className="card text-center rounded-md shadow-lg shadow-slate-700" key={item.id}>
                 <img  src={item.image_url} className="img rounded-md mb-3" alt={item.title}></img>
                 <div className="py-1">
 
                 <button onClick={()=>{removeFromFav(item.id)}}><i class="fa-solid fa-heart border border-[#673EDE] rounded-full p-2 cursor-pointer mr-1 text-red-600"></i></button>
              
                 
                 <button onClick={()=>{handleShow(item)}}><i class="fa-brands fa-readme border border-[#673EDE] rounded-full p-2 cursor-pointer ml-1"></i></button>
                 </div>
                 <h3 className="text-lg font-medium text-[#673EDE]">{item.title}</h3>
                 <h4 className="font-medium">{item.authors}</h4>
             </div>
                 
             )
            
         )}
  </div>
     }
    

       
 </div> 
    )
}

export default Favbook;