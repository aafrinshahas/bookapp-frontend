import { Link } from "react-router-dom";

function Dashnav(){
    return(

        <div className="dashborad-menu flex flex-col justify-between">
    <div className="flex flex-col gap-8">
    <div className="logo text-white text-3xl font-semibold">
    <Link to='/'><p><span className="border-[#673EDE] border-b-2">Book</span>shelf</p></Link>
    <Link to='/'><i class="fa-solid fa-book-open-reader"></i></Link>
    </div>
    <div className="menu-list text-slate-200 text-lg">
    <Link to='/dashboard'><p className="py-3"><i class="fa-solid fa-house text-[#673EDE] pr-2"></i> <span className="hide-menu">Home</span></p></Link>
    <Link to='/library'><p className="py-3"><i class="fa-solid fa-book text-[#673EDE] pr-2"></i> <span className="hide-menu">Book Library</span></p></Link>
    <Link to='/category'><p className="py-3"><i class="fa-solid fa-list text-[#673EDE] pr-2"></i> <span className="hide-menu">Authors</span></p></Link>
    <Link to='/favourite'><p className="py-3"><i class="fa-solid fa-heart text-[#673EDE] pr-2"></i> <span className="hide-menu">Favourites</span></p></Link>
    </div>
    </div>
    
    <div className="signout text-slate-200 text-lg">
    <Link to='/'><button><i class="fa-solid fa-right-from-bracket text-[#673EDE] pr-2"></i> <span className="hide-menu">Sign Out</span></button></Link>
    </div>


    
    </div>
    )
}

export default Dashnav;