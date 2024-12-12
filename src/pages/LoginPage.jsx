import "./Pages.css"
import Img from "../assets/web-img/INDIAN MASALA DUBBA.jpg"
import Img2 from "../assets/web-img/download.jpg"
import Login from "../components/loginPage/Login"


const LoginPage = () => { 
  
  return (
    <div className="h-[100dvh] relative">
       <picture className="relative h-[100dvh] w-[100dvw]">
          <source srcSet={Img} media="(min-width: 420px)" />
          <source srcSet={Img2} media="(min-width: 0px)" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-transparent to-black opacity-50"></div> {/* Gradient overlay */}
          
          <img 
            src={Img} 
            alt="Responsive" 
            className="login-background h-full w-full object-cover "
          />
      </picture>
      <span className="absolute top-0 text-[#55c5f9] p-[8px] text-[13px] ">Marked</span>
      
      <Login />
      
    </div>
  
  )
}

export default LoginPage
