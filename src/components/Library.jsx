import Dashnav from "./Dashnav";
import Dashcommon from "./Dashcommon";
import Bookcard from "./Bookcard";

function Library(){
    return(
        <div className="library flex">
           <Dashnav/>
           <div className="dashboard-info">
           <Dashcommon/>
           <div className="py-4"> 
           <p className="text-3xl pb-5 text-[#673EDE]">Book Library</p>
              <Bookcard/>
            </div>
           </div>
          
        </div>
    )
}

export default Library;