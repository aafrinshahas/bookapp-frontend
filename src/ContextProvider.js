import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
const bookContext = createContext()

function ContextProvider(data){
const [bookList, setBookList] = useState([]);
const [listLength, setListlength] = useState(0);
const [loadMore, setLoadMore] = useState(12)
const [search, setSearch] = useState('');
const [searchResults, setSearchResults] = useState([])
const [fav, setFav] = useState([]);
const [isLoad, setIsLoad] = useState(true);
const [sideBar, setSidebar] = useState(false);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confrimPass, setConfrimPass] = useState('')
const [ruser, setruser] = useState(true);
const [checkValue, setcheckValue] = useState(true);
const [checkPass, setcheckPass] = useState(true)
const [loginDetail, setloginDetail] = useState([
    {
        username: 'Aafrin',
        password: 123
    }
])
const [bookDes, setBookDes] = useState([]);
const [openModel, setModel] = useState(false)

useEffect(()=>{
axios.get('https://example-data.draftbit.com/books')
.then((res)=>{
console.log(res.data)
setBookList(res.data)
setListlength(res.data.length)
let data = localStorage.getItem('fav')
console.log(data)
if(data){
   setFav(JSON.parse(data))
}

}).catch((error)=>console.log(error))

},[])

const filteredArr = bookList.reduce((acc, current) => {
const x = acc.find(item => item.authors === current.authors);
if (!x) {
return acc.concat([current]);
} else {
return acc;
}
}, []);

const addToFav = (book) =>{
    
const favList = [...fav];
const newFav = favList.concat(book);
setFav(newFav);
let data = newFav
localStorage.setItem('fav', JSON.stringify(data))
}

const removeFromFav = (id) => {
const favList = [...fav];
const newFav = favList.filter((book)=>book.id !== id)
setFav(newFav)
let data = newFav
localStorage.setItem('fav', JSON.stringify(data))
}


function displaySidemenu(){
setSidebar(!sideBar)
}

function dispalyModel(){
    setModel(!openModel)
    console.log('clicked')
    }

const handleShow = (selectedItem) => {
    console.log(selectedItem.id)
  const filterItem = bookList.filter((item)=>{
      if(item.id == selectedItem.id){
          return item
      }
  })
  console.log(filterItem)
  setBookDes(filterItem)
  setModel(!openModel)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
    
}
const handlePassword = (e) => {
    setPassword(e.target.value)
}
const handleConfrimpPass = (e) => {
    setConfrimPass(e.target.value)
}

return(
<bookContext.Provider value={{bookList, setBookList, listLength, setListlength, loadMore, setLoadMore, search, setSearch, searchResults, setSearchResults, fav, addToFav, removeFromFav, isLoad, setIsLoad, filteredArr, displaySidemenu, sideBar, username, setUsername, password, setPassword, confrimPass, checkPass, setcheckPass, loginDetail,setloginDetail,  ruser, setruser, checkValue, setcheckValue, handleShow, bookDes, dispalyModel, openModel, handleUsername, handlePassword, handleConfrimpPass}}>
{data.children}
</bookContext.Provider>
)
}

export default ContextProvider;

export {bookContext}