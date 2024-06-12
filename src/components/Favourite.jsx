import Dashnav from "./Dashnav";
import Dashcommon from "./Dashcommon";
import Favbook from './Favbook';


function Favourite(){
  
    return(
        <div className="favourite flex">
            <Dashnav/>
            <div className="dashboard-info">
           <Dashcommon/>
           <div className="py-4"> 
           <p className="text-3xl pb-5 text-[#673EDE]">Your Favourite Collections</p>
           <Favbook/>
            </div>
           </div>
        </div>
    )
}

export default Favourite;