import { Link } from "react-router-dom";

import '../dashboard.css'
import Dashnav from "./Dashnav";
import Dashcommon from "./Dashcommon";
import Dashcount from "./Dashcount";
import Bookcard from "./Bookcard";


function Dashboard(){
    
return(
<div className="dashboard flex">
<Dashnav/>
<div className="dashboard-info">

<Dashcommon />
<Dashcount/>

<div className="py-3">
<div className="header flex gap-4 items-center pb-6">
            <p className="text-2xl">Popular Books</p>
            <Link to='/library'><p className="text-lg text-[#673EDE] font-semibold">View All</p></Link>
        </div>
       
       <Bookcard/>
      
</div>
</div>

</div>
)
}

export default Dashboard;