import { useContext } from "react";
import { bookContext } from "../ContextProvider";

function Bookdesc(){
const {bookDes, dispalyModel, openModel} = useContext(bookContext)

return(
    <div>
<div className={openModel? 'model active' : 'model'}>
<div className="close text-lg font-semibold cursor-pointer text-right mx-4 mt-4" onClick={dispalyModel}>
           <i class="fa-solid fa-xmark bg-[#673EDE] p-2 rounded-md text-white"></i>
           </div>
{bookDes.map((book)=>{
    return(
        <div className="flex justify-center gap-8 flex-wrap text-white">
            <div className="bookdesc__image-container flex-grow">
                <img src={book.image_url} alt={book.title} className="img object-contain"></img>
            </div>
            <div className="bookdesc_info flex-grow">
                 <h3 className="text-3xl font-medium">{book.title}</h3>
                 <h4 className="text-lg font-medium pb-4">{book.authors}</h4>
                 <p className="text-md font-light pb-2 text-slate-200">{book.Quote1}</p>
                 <p className="text-md font-light pb-2 text-slate-200"><span className="font-medium text-white">Genres:</span> {book.genres}</p>
                 <p className="font-medium text-lg pb-2">Description</p>
                 <p className="pb-4 text-slate-200">{book.description}</p>
                 <p className="text-lg font-light"><span className="font-medium">Rating:</span> {book.rating}/5</p>
            </div>
          
            </div>   
    )
})}
</div>
    </div>


)
}

export default Bookdesc;