import React, { useEffect, useState } from 'react'
import GradientText from '../components/GradientText'
import { Link, useLocation } from 'react-router-dom'
import About from './About';
import { useNavigate } from 'react-router-dom';
import Responsibilities from './Responsibilities';
import Benifities from '../components/Benifities';
import FAQ from '../components/FAQ';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        // Clear state after scrolling
        navigate("/", { replace: true, state: null });
      }
    }
  }, [location.state, navigate]);


   useEffect(() => {
      const Data = JSON.parse(localStorage.getItem("CompositSaData"));
      setIsLoggedIn(false)
      if (Data && Data.message) {
        setIsLoggedIn(true);
      }
      console.log("User is logged in")
    }, []);
  
  return (
    <div className='pt-24 mt-10 text-white' style={{marginTop:"30px"}}>
        <GradientText
colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
animationSpeed={8}
showBorder={false}
className="custom-class"
>
    <h1 className='font-bold text-7xl'> <span className='mb-10px pb-3'>
            CAMPUS</span> <br /> AMBASSADOR </h1>
</GradientText>

        <p className='text-2xl w-2/4 m-auto mt-16 leading-relaxed'>COMPOSIT, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.</p>
        {!isLoggedIn && <button className='mt-10 px-10 py-3 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium text-sm text-center hover:shadow-yellow-100 hover:shadow-sm mr-2 mb-2'> <Link to="/signup">Register for CA Program</Link> </button>}

        {/* <About/> */}

        <Responsibilities/>
        <Benifities/>
        <FAQ/>
    </div>
  )
}

export default Home
