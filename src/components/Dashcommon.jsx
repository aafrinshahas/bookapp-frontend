import { useContext } from "react";
import { bookContext } from "../ContextProvider";
import axios from "axios";
function Dashcommon(){
 const {search, setSearch, setBookList, bookList, username} = useContext(bookContext);
 console.log(username)
 const handleSearchValue = (e) => {
    setSearch(e.target.value)
    
 }
 const handleSearch = () => {
axios.get(`https://example-data.draftbit.com/books?authors=${search}`)
.then((res)=>{
    var newBookList = res.data
    
    console.log(newBookList)
    if (search !== ''){
        setBookList(newBookList)
        setSearch('')
    }else{
        alert('search value is empty')
        setBookList(bookList)
    }
})
 }
    return(
        <div>
<div className="user text-lg pb-5">
        <p ><i class="fa-solid fa-user border border-[#673EDE] rounded-full p-2 mr-2"></i> Hi <span className="text-[#673EDE] font-semibold">{username}</span></p>
    </div>
    <div className="search-bar bg-[#ECF0F3] py-2 px-4 rounded-md my-3 flex justify-between items-center">
        <input placeholder="Search by authors with casing..." value={search} onChange={handleSearchValue} className="bg-transparent outline-none w-[100%]"/>
        <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass text-[#673EDE]"></i></button>
    </div>
        </div>
    )
}

export default Dashcommon;