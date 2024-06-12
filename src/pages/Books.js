import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Books(){
   
    const [bookList, setBookList] = useState([]);
    
    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/books')
       .then((res)=>{
           console.log(res.data)
           setBookList(res.data)
       }).catch((error)=>console.log(error))
       
   },[])

return(
    <div className="book bg-[#101115]">
        <Navbar/>
        <div className="books pt-3">
            <div className="header flex gap-4 items-center text-white pb-10">
                <p className="text-2xl">Popular Books</p>
                <Link to='/signin'><p className="text-lg border-[#673EDE] border-b-2 font-light">View All</p></Link>
            </div>
            <div className="books-container flex flex-wrap gap-10 justify-between mb-7">
               {bookList.slice(0, 8).map((item)=>(        
            <div className="card  text-center text-white rounded-md shadow-md shadow-slate-700 bg-black flex-grow" key={item.id}>
<img  src={item.image_url} className="img rounded-md mb-3 object-contain" alt={item.title}></img>
                    <h3 className="text-lg font-light">{item.title}</h3>
                    <h4 className="font-light">{item.authors}</h4>
                </div>
                       
               ))}

            </div>
           
           
            <p className="font-light text-lg text-slate-200 py-5">To Access your Favourite Book, Please <span className="border-[#673EDE] border-b-2"><Link to='/signin'>Sign In</Link></span></p>
        </div>
        <Footer/>
    </div>
)
}

export default Books;