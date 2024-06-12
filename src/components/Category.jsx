import Dashnav from "./Dashnav";
import Dashcommon from "./Dashcommon";
import Categoryoption from "./Categoryoption";


function Category(){

    return(
        <div className="category flex">
            <Dashnav/>
            <div className="dashboard-info">
           <Dashcommon/>
           <Categoryoption/>
           
           </div>
        </div>
    )
}

export default Category;

