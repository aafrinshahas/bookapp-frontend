import { useContext } from "react";
import { bookContext } from "../ContextProvider";


function Dashcount(){
const {listLength, filteredArr ,fav} = useContext(bookContext)

    return(
        <div>
<div className="info-card flex flex-wrap gap-5 justify-between py-5">
        <div className="card rounded-md text-white text-center p-3 text-lg shadow-md shadow-slate-600 flex-grow">
            <p>{listLength}</p>
            <p className='text-slate-200 font-light'>Total no.of Books</p>
        </div>
        <div className="card rounded-md text-white text-center p-3 text-lg shadow-md shadow-slate-600 flex-grow">
            <p>{filteredArr.length}</p>
            <p className='text-slate-200 font-light'>Total no.of Authors</p>
        </div>
        <div className="card rounded-md text-white text-center p-3 text-lg shadow-md shadow-slate-600 flex-grow">
            <p>{fav.length}</p>
            <p className='text-slate-200 font-light'>Total no.of Favourites</p>
        </div>
    </div>
        </div>
    )
}

export default Dashcount;