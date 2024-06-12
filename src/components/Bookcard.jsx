import { useContext } from "react";
import { bookContext } from "../ContextProvider";
import Loadbutton from "./Loadbutton";
import Bookdesc from "./Bookdesc";
function Bookcard(){
   const {bookList, loadMore, addToFav, removeFromFav, fav, handleShow} = useContext(bookContext);
console.log(bookList)
console.log(fav)
const favChecker = (id) => {
    const boolean = fav.some((book) => book.id === id)
    return boolean
}

    return(
        <div>
   <Bookdesc/>
        <div className="books-container flex flex-wrap gap-8 justify-between mb-7">
{bookList.slice(0, loadMore).map((item)=>
            (
                <div className="card text-center rounded-md shadow-lg shadow-slate-700 flex-grow" key={item.id}>
                <img  src={item.image_url} className="img rounded-md mb-3 " alt={item.title}></img>
                <div className="py-1">
                {favChecker(item.id)
                ? (<button onClick={()=>{removeFromFav(item.id)}}><i class="fa-solid fa-heart border border-[#673EDE] rounded-full p-2 cursor-pointer mr-1 text-red-600"></i></button>)
                : (<button onClick={()=>{addToFav(item)}}><i class="fa-solid fa-heart border border-[#673EDE] rounded-full p-2 cursor-pointer mr-1"></i></button>)
                }
                <button onClick={()=>{handleShow(item)}}><i class="fa-brands fa-readme border border-[#673EDE] rounded-full p-2 cursor-pointer ml-1"></i></button>

                </div>
                <h3 className="text-lg font-medium text-[#673EDE]">{item.title}</h3>
                <h4 className="font-medium">{item.authors}</h4>
            </div>
                
            )
           
        )}
 </div>
   
    <Loadbutton/>    
 </div> 
    )
}

export default Bookcard;

