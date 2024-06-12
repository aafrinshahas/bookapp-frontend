import { useContext } from "react";
import { bookContext } from "../ContextProvider";

function Categoryoption(){
const {filteredArr} = useContext(bookContext)


console.log(filteredArr)
  return(
      <div className="pt-4">
            <p className="text-3xl pb-2 text-[#673EDE]">Authors List</p>
            <div className="option flex flex-wrap gap-5 py-5">
            
              {filteredArr.map((item)=>{
              
              return(
                <div className="list flex items-center gap-3 bg-[#101115] rounded-md text-white text-center p-3 text-lg shadow-md shadow-slate-600 flex-grow" key={item.id}>
              <i class="fa-solid fa-user-tie text-white text-xl"></i>
              <p className="font-light">{item.authors}</p>
              </div>
              )
              })}
            
          
            </div>
      </div>
  )
}

export default Categoryoption;