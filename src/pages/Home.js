import Navbar from "./Navbar";
import Footer from "./Footer";
import book from '../images/book.png';
import fav from '../images/favorite.png';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="home bg-[#101115]">
            <Navbar/>
            <div className="home-info text-center text-white">
                <h1 className="text-5xl font-bold pb-5">Online Book Library for you</h1>
                <p className="text-xl text-slate-300 pb-5">Find and read your favourite Books. Wide range of books available.</p>
                <div className="btns text-lg py-3">
                    <Link to='/signin'><button className="btn-active">Get Started</button></Link>
                </div>
            </div>
            <div className="home-card p-4">
                <div className="home-card__container flex gap-6 justify-center mt-5 flex-wrap">
                    <div className="card bg-[#28292C] p-6 rounded-xl">
                        <div className="header flex items-center gap-4 pb-4">
                          <img src={book} alt="Book Icon" className='w-12 h-12'></img>
                          <h3 className="text-white text-lg font-semibold">100+ Books</h3>
                        </div>
                        <p className='text-slate-300 font-light'>100+ Books available in Bookshelf, find your favorite books and Authors here.</p>
                    </div>
                    <div className="card bg-[#28292C] p-6 rounded-xl">
                        <div className="header flex items-center gap-4 pb-4">
                          <img src={fav} alt="Book Icon" className='w-12 h-12'></img>
                          <h3 className="text-white text-lg font-semibold">Your Favourite</h3>
                        </div>
                        <p className='text-slate-300 font-light'>Bookmark your favourite books, categorize it and read it later. Highlight what inspires you in the book.</p>
                    </div>
                   
                </div>
               
            </div>
            <Footer/>
        </div>
    )
}

export default Home;