import { Link, useNavigate } from "react-router-dom";
import hero from '../images/hero-image.png'
import Footer from "../pages/Footer";
import { useContext } from "react";
import { bookContext } from "../ContextProvider";
import axios from "axios";
import { baseUrl } from "../Urls";

function Signout(){
    const {username, setUsername, password, setPassword, confrimPass, setConfrimPass, handleUsername, handlePassword, checkValue, setcheckValue, setcheckPass} = useContext(bookContext)

    const navigate = useNavigate();
    const addUser = () => {
        var login = axios.post(`${baseUrl}/signup`, { username, password})
      
        login.then(result => {
            console.log(result)
            if(result.data == 'success'){
             alert('User is already register, Please go to sign in page for login')
             navigate('/signout')
             setUsername('')
             setPassword('')
             setConfrimPass('')
            }else{
                alert('Register Successfully')
                navigate("/dashboard")

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


//   const addUser = () => {
   
//     setloginDetail([...loginDetail, {username:username, password:password}]);
      
//         if(username !== '' && password !== ''){
//             console.log('value entered')
//             if(password == confrimPass){
//                 console.log('matched')
//                 setcheckPass(true)
//                 navigate("/signin")
//             }
//             else{
//                 console.log('not matched')
//                 setcheckPass(false)
//                 navigate("/signout")
//             }
//             setcheckValue(true)
//           }
//           else{
//             console.log('value not enetered')
//             setcheckValue(false)
//           }
     
//     }
    return(
       <div className="account">
        <div className="logo text-white text-3xl font-semibold pb-5">
           <Link to='/'><p><span className="border-[#673EDE] border-b-2">Book</span>shelf</p></Link>
           </div>
           <div className=" text-white flex items-center justify-between gap-6 flex-wrap">
            <div className="signin-info">
                <h2 className="text-3xl font-light pb-4">Create an Account</h2>
                <p className="font-light text-slate-200 pb-4">Kindly fill your details for <span className="border-[#673EDE] border-b-2 font-medium">Join Now</span> here :)</p>
                <div className="form flex flex-col gap-5 py-4">
                    <input placeholder="Enter your username" className='bg-transparent border border-[#673EDE] px-3 py-2 rounded-lg placeholder:text-slate-200 outline-none' onChange={handleUsername} value={username}/>
                    <input type='password' placeholder="Enter your password" className='bg-transparent border border-[#673EDE] px-3 py-2 rounded-lg placeholder:text-slate-200 outline-none' onChange={handlePassword} value={password}/>
                    {/* <input type="password" placeholder="Enter your confrim password" className='bg-transparent border border-[#673EDE] px-3 py-2 rounded-lg placeholder:text-slate-200 outline-none' onChange={handleConfrimpPass} value={confrimPass}/> */}
                    {/* {checkPass?'': <p className="text-red-500">Password mismatched</p>} */}
                {checkValue?'':<p className="text-red-500">Please enter sign up details</p>}
                    <div className="btns pt-4">
                    <button className="bg-[#673EDE] rounded-xl" onClick={addUser}>Join Now</button>
                    </div>
                    
                </div>
                <p className="font-light pb-3">Don't have an account? <span className="underline"><Link to='/signin'>Sign In</Link></span></p>
            </div>
            <div className="signin-image">
                <img src={hero} className="img" alt="hero"></img>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}

export default Signout;