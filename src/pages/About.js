import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import about from '../images/about.png'
import Footer from "./Footer";

function About(){
    return(
<div className="about bg-[#101115]">
    <Navbar/>
      <div className="flex justify-between items-center flex-wrap">
        <div className="about-info text-white">
          <h2 className="text-4xl pb-5">Diverse, Educative experiences from your Favourite books</h2>
          <p className="text-lg text-slate-200 font-light pb-5">We have a lots of <span className="font-medium">"Top Rated Books"</span> to you. We also provide a <span className="font-medium">"Bookmark"</span> option to save your Favourite Books for future reads.</p>
          <p className="text-slate-200 font-light text-md pb-3">Ready to Read? Select Sign In or Join Now </p>
          <div className="btns flex gap-5 text-slate-200 text-lg pt-2">
           <Link to='/signin'><button className="border border-[#673EDE] rounded-xl">Sign In</button></Link>
           <Link to='/signout'><button className="btn-active">Join Now</button></Link>
           </div>
        </div>
        <div className="about-image">
           <img src={about} className="img" alt="about"></img>
        </div>
      </div>
      <Footer/>
    </div>
    )
    
}

export default About;