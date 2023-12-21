import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {trending_news} from "../Component/trending-news";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
const Header = () =>{
    const {homeNews}=useContext(MyContext);
    const[time,setTime]=useState("");
    const[searchItem,setSearchItem] = useState("");
    setInterval(()=>{
        setTime(new Date().toLocaleString());
    },1000)

    useEffect(()=>{
        setTime(new Date().toLocaleString());
    },[])
    
    const searchFunction=(e)=>{
        if(e.key !== "Enter"){
            setSearchItem(e.target.value);
        }else{
            window.open(window.location.origin+"/search/"+searchItem);
        }
    }

    return <>
    <div className="flex flex-col justify-center items-center min-w-full md:min-w-[98vw] relative my-3">
    <div className="flex flex-row md:flex-col justify-between items-center min-w-full relative">
    <div className="w-1/3"> </div>
    {/* HEADING */}
    <span className="flex flex-col justify-center items-center w-1/3 gap-2">
    <span className="  text-2xl font-semibold ">The Newspaper</span>
    <span className=" text-xs">{time}</span>
    </span>
    {/* Search Bar */}
    <div className=" w-1/3 md:w-full relative my-2 mx-4 flex flex-col md:items-center items-end">
        <input placeholder="Search" className=" w-1/2 md:w-[80%] md:mx-4 focus:outline-none border-2 border-gray-300 text-sm px-2 py-1" onKeyUp={(e)=>{searchFunction(e)}} />
        <div className="flex flex-row items-start w-1/2 md:w-[80%]">
            <span className="text-xs font-semibold mx-4">Trending:</span>
            <span className=" text-xs break-all text-left text-gray-500 cursor-pointer">
                #Match,#Trump,#Corona
            </span>
        </div>
    </div>
    </div>

    {/* Menu Bar */}
    <div className="flex flex-row w-3/4 gap-2 md:gap-3 md:text-sm justify-evenly my-4 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
    </div>
    {/* Menu Bar */}
    <div className="relative w-full h-8 overflow-hidden">
        <span className="absolute left-0 w-40 md:w-[7rem] bg-red-500 z-10 min-h-full">
            <p className="p-1 md:text-sm md:text-left text-white text-center flex gap-2 justify-center z-10"><i className="fi fi-ss-chart-line-up"></i>Trending</p>
            <span className="absolute w-5 h-10 block bg-red-500 rotate-[340deg] -right-2 top-0"></span>
        </span>
        <span className="min-w-full min-h-full bg-gray-300 relative flex ">
        <Marquee>
    {
    homeNews ?
    homeNews.articles.map(article=>{
        return <>
        <a href={article.url} target="blank"><span className=" text-red-500 text-xs font-semibold cursor-pointer">{article.title}</span></a>
        <span className="mx-4">|</span>
        </>
    })

    :<></>
    }
  </Marquee>
        </span>
    </div>
    </div>
    </>
}
export default Header;