import { Link } from "react-router-dom";
import '../style.css';
import { useContext } from "react";
import { bookContext } from "../ContextProvider";
function Navbar(){
   const {sideBar, displaySidemenu} = useContext(bookContext)
    return(
        <div className="navbar bg-[#101115]">
<div className="flex items-center justify-between">
           <div className="logo text-white text-3xl font-semibold">
           <Link to='/'><p><span className="border-[#673EDE] border-b-2">Book</span>shelf</p></Link>
           </div>
           
           <div className="menu flex items-center text-slate-200 text-lg w-[35%] justify-evenly">
            <Link to='/'><p>Home</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/books'><p>Books</p></Link>
           </div>
           <div className="menu-btn btns flex gap-5 text-slate-200 text-lg ">
           <Link to='/signin'><button >Sign In</button></Link>
           <Link to='/signout'><button className="btn-active">Join Now</button></Link>
           </div>
           <div className="menu-bar text-lg font-semibold cursor-pointer" onClick={displaySidemenu}>
            <i class="fa-solid fa-bars bg-[#673EDE] px-3 py-2 rounded-md text-white"></i>
            </div>
        </div>
        <div className={sideBar? 'side active' : 'side'}>
          <div className="close text-lg font-semibold cursor-pointer text-right mx-4 mt-4" onClick={displaySidemenu}>
           <i class="fa-solid fa-xmark bg-[#673EDE] p-2 rounded-md text-white"></i>
           </div>
          <div className="side-menu text-lg  text-black mt-2 mx-4" onClick={displaySidemenu}>
          <Link to='/'><p className='pb-3'>Home</p></Link>
          <Link to='/about'><p className='pb-3'>About</p></Link>
          <Link to='/books'><p className='pb-3'>Books</p></Link>
            
         </div>
         <div className="side-btns flex flex-col text-black text-lg mt-2 mx-4">
         <Link to='/signin'><button className="border border-[#673EDE] rounded-xl mb-3">Sign In</button></Link>
         <Link to='/signout'><button className="btn-active mt-2">Join Now</button></Link>
           </div>
         
          </div>
        </div>
        
    )
}

export default Navbar;