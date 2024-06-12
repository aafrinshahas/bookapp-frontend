import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Dashboard from "./components/Dashboard";
import Library from "./components/Library";
import Category from './components/Category';
import Favourite from "./components/Favourite";
import './style.css'
import ContextProvider from "./ContextProvider";
function App() {
  return (
   <div>
    <ContextProvider>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signout" element={<Signout/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/library" element={<Library/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
       </Routes>
    </BrowserRouter>
    </ContextProvider>
   </div>
  );
}

export default App;
