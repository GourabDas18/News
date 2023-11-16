import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {trending_news} from "../Component/trending-news";
const Header = () =>{

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
    <div className="flex flex-col justify-center items-center min-w-full relative my-3">
    <div className="flex flex-row justify-between items-center min-w-full relative">
    <div className="w-1/3"> </div>
    {/* HEADING */}
    <span className="flex flex-col justify-center items-center w-1/3 gap-2">
    <span className="  text-2xl font-semibold ">The Newspaper</span>
    <span className=" text-xs">{time}</span>
    </span>
    {/* Search Bar */}
    <div className=" w-1/3 relative my-2 mx-4 flex flex-col items-end">
        <input placeholder="Search" className=" w-1/2 focus:outline-none border-2 border-gray-300 text-sm px-2 py-1" onKeyUp={(e)=>{searchFunction(e)}} />
        <div className="flex flex-row items-start w-1/2">
            <span className="text-xs font-semibold mx-4">Trending:</span>
            <span className=" text-xs break-all text-left text-gray-500 cursor-pointer">
                #Match,#Trump,#Corona
            </span>
        </div>
    </div>
    </div>

    {/* Menu Bar */}
    <div className="flex flex-row w-3/4 gap-2 justify-evenly my-4 font-semibold">
        <a href="/">Home</a>
        <a href="/business">Business</a>
        <a href="/health">Health</a>
        <a href="/sports">Sports</a>
        <a href="/technology">Technology</a>
    </div>
    {/* Menu Bar */}
    <div className="relative w-full h-8">
        <span className="absolute left-0 w-40 bg-red-500 overflow-hidden z-10">
            <p className="p-1  text-white text-center flex gap-2 justify-center"><i className="fi fi-ss-chart-line-up"></i>Trending</p>
            <span className="absolute w-12 h-7 block bg-gray-300 rotate-[60deg] -right-5 top-0"></span>
        </span>
        <span className="min-w-full min-h-full bg-gray-300 relative flex ">
        <Marquee>
    {trending_news.articles.map(article=>{
        return <>
        <span className=" text-red-500 text-xs font-semibold cursor-pointer">{article.title}</span>
        <span className="mx-4">|</span>
        </>
    })}
  </Marquee>
        </span>
    </div>
    </div>
    </>
}
export default Header;