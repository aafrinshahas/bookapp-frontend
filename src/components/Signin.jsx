import { Link, useNavigate } from "react-router-dom";
import hero from '../images/hero-image.png'
import Footer from "../pages/Footer";
import { useContext } from "react";
import { bookContext } from "../ContextProvider";
import axios from "axios";
import { baseUrl } from "../Urls";

function Signin(){

    const {username,setUsername, password, setPassword, handleUsername, handlePassword, ruser, setruser, checkValue, setcheckValue} = useContext(bookContext)
   
     const navigate = useNavigate();
const handleSignIn = () => {
  var login = axios.post(`${baseUrl}/signin`, { username, password})

login.then(result => {
  console.log(result)
  if(result.data == 'success' ){
    navigate("/dashboard")
    // setUsername('')
    // setPassword('')
    
  }
  else if(result.data == 'data not found'){
//  setruser(false)
 alert(result.data)
  }else if(result.data == 'the password is incorrect'){
    
        alert(result.data)
  }
  

}).catch(err => console.log(err))
     if(username !== '' && password !== ''){
          console.log('value entered')
          setcheckValue(true)
        }
        else{
          console.log('value not enetered')
          setcheckValue(false)
        }
}
    // const handleSignIn = () => {
    //     var userfound = false;

    //     loginDetail.forEach((item)=>{
    //       if(item.username == username && item.password == password){
    //           console.log('login succesfull')
    //           userfound = true
    //           navigate("/dashboard",{state:{username:username}})
    //           setUsername('')
    //           setPassword('')
    //       }
    //     })
       
    //     if(username !== '' && password !== ''){
    //       console.log('value entered')
    //       if(userfound === false){
    //         console.log('login failed')
    //         setruser(false)
    //       }
    //       setcheckValue(true)
    //     }
    //     else{
    //       console.log('value not enetered')
    //       setcheckValue(false)
    //     }
    //     }

    return(
    <div className="account">
      <div className="logo text-white text-3xl font-semibold pb-6">
           <Link to='/'><p><span className="border-[#673EDE] border-b-2">Book</span>shelf</p></Link>
           </div>
        <div className="text-white flex items-center justify-between gap-6 flex-wrap">
            <div className="signin-info">
                <h2 className="text-3xl font-light pb-4 leading-snug">Ready to Read from <span className="border-[#673EDE] border-b-2 font-medium">Book</span>self, Please <span className="font-medium">L<span className="border-[#673EDE] border-b-2">og</span>in</span> into your account</h2>
                {ruser? <p className="font-light text-slate-200 pb-4">I help you to manage your reading habit from Bookself after you login :) </p> : <p className="text-red-500">Please sign up before login</p>}
                
                
                <div className="form flex flex-col gap-5 py-4">
                    <input placeholder="Enter your username" className='bg-transparent border border-[#673EDE] px-3 py-2 rounded-lg placeholder:text-slate-200 outline-none' onChange={handleUsername} value={username} name="username"/>
                    <input type='password' placeholder="Enter your password" className='bg-transparent border border-[#673EDE] px-3 py-2 rounded-lg placeholder:text-slate-200 outline-none' onChange={handlePassword} value={password} name="password"/>
                    {checkValue?'':<p className="text-red-500">Please enter login details</p>}
                    <div className="btns pt-4">
                    <button className="bg-[#673EDE] rounded-xl" onClick={handleSignIn}>Sign In</button>
                    </div>
                    
                </div>
                <p className="font-light pb-3">Don't have an account? <span className="underline"><Link to='/signout'>Join Now</Link></span></p>
            </div>
            <div className="signin-image">
                <img src={hero} className="img" alt="signin"></img>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}

export default Signin;