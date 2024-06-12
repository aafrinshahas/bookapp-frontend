import { useContext } from "react";
import { bookContext } from "../ContextProvider";

function Loadbutton(){
const {setLoadMore} = useContext(bookContext)

const handleLoad = () => {
    setLoadMore((prev) => prev + 12)
}

return(
<div className="text-center pt-5">
<button className="bg-[#673EDE] text-white py-3 px-5 rounded-xl" onClick={handleLoad}>Load More</button>
</div>
)
}

export default Loadbutton;