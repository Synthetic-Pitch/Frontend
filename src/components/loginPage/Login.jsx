import './login.css'
import { useEffect } from "react";
import { useState } from "react";
import Submit from './submit';
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaCrosshairs } from "react-icons/fa";

const Login = () => {
  
  const [userName,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [userTurned,setUserTurned] = useState(false);
  const [passTurned,setPassTurned] = useState(false);
  const [isUseractive,setUserActive] = useState(false);
  const [isPassActive,setPassActive] =useState(false);
  
  // Handle about user-input and animation
  useEffect(()=>{
    if(isUseractive){
      setUserTurned(true)
    }else if(userName.length !== 0){
      setUserTurned(true)
    }else return setUserTurned(false)
    
  },[isUseractive,userName.length])

  // Handle about password-input and animation
  useEffect(()=>{
    if(isPassActive){
      setPassTurned(true)
    }
    else if(password.length !== 0){
      setPassTurned(true)
    }else return setPassTurned(false)

  },[isPassActive,password.length])

  return (
    <form  
        className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 h-[400px] lg:h-[450px] xl:h-[500px] w-[85%] sm:w-[400px] lg:w-[450px] bg-[rgba(2,1,1,0.55)] z-5 backdrop-blur-sm rounded-[20px] p-[20px] lg:scale-[105%] xl:scale-[110%]"
        >
      <header className="text-center sm:text-xl ms:text-[17px] text-white h-[20%] flex justify-center items-center tracking-[4px]">
        L <FaCrosshairs className='circle-icon'/>&nbsp;GIN
      </header>
      
      <section className="text-center text-[white] h-[40%] w-[100%] flex flex-col items-center ">
        <div className="relative h-[50%] w-[100%] flex justify-center items-center overflow-hidden">
            <input
              onFocus={() => setUserActive(true)}
              onBlur={() => setUserActive(false)}
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              id="usernameInput"
              type="text"
              autoComplete='off'
              className="w-[80%] h-[50%] !bg-transparent !bg-opacity-0 border-b-2 border-[#00c3ff] border-r-2 text-white outline-none p-[7px] "
            />
            <label 
              htmlFor="usernameInput"
              className={userTurned ? 
                'absolute left-[10%] text-[yellowgreen] scale-[.8] translate-y-[-20px] transition-transform duration-300'
                :
                'absolute left-[10%] text-[yellowgreen] translate-y-[-5px] transition-transform duration-300'}
            >Username</label>
        </div>
        
        <div className="relative h-[50%] w-[100%] flex flex-col justify-center items-center overflow-hidden">
            <input 
              onFocus={()=>setPassActive(true)}
              onBlur={()=>setPassActive(false)}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password" 
              autoComplete='off'
              id="passwordInput"
              className="h-[50%] w-[80%] bg-transparent border-b-2 border-r-2 border-[#00c3ff] outline-none text-white p-[7px] "
            />
            <label
              htmlFor="passwordInput"
              className={passTurned? 
                'absolute text-[yellowgreen] left-[10%] scale-[.8] translate-y-[-20px] transition-transform duration-300'
                :
                'absolute text-[yellowgreen] left-[10%] translate-y-[-5px] transition-transform duration-300'}
            >Password</label>
        </div>
      </section>
      
      <Submit/>
      
      <section className='text-[white] h-[15%] flex justify-end'>
         <Link 
            className='mr-[15%] font-jockeyone' 
            to='/signin'
          >Sign in</Link>
      </section>
      <footer className='text-[white] h-[10%] flex justify-end gap-2 '>
            <FaArrowRight /> 
            <Link
              className='mr-[15%]'
              to='/home'
            >Skip</Link>
      </footer>
    </form>
  );
};

export default Login;