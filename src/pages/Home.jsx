import axios from 'axios';
import {  useEffect, useState } from 'react';

const Home = () => {
 
  const [data,setData] = useState([]);
  
  

  useEffect(()=>{
    const fetchData =async () =>{
      try{
        const response = await axios.get('https://backend-6r7l.onrender.com/api')

        setData(response.data);
      }
      catch(err){
        console.log({message:err.message});
        
      }
    }
    fetchData();
  },[])

  
  const handleClick = () =>{
    console.log(data);
  }


  return (
    <div>
      <button 
          onClick={handleClick}
          className='bg-[red] p-3 text-[20px]'
      >Render</button>

      {  
        data.length > 0 &&
        data.map((item,index)=>(
          <div  
             key={index}>
             <div className='m-2 bg-[teal]'>
              <div>username: {item.username}</div>
              <div>password: {item.password}</div>
             </div>
          </div>
        ))
      }
     
    </div>
  );
};

export default Home;
