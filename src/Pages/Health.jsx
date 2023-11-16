import Header from "../Component/Header";
import Sidebar_Left from "../Component/Sidebar_Left";
import Sidebar_Right from "../Component/Sidebar_Right";
import {health_news } from "../Component/trending-news";
import { useState } from "react";

const Health=()=>{

    const [scrollY,setScrollY] = useState(0);
    window.onscroll=(e)=>{
        setScrollY(window.scrollY);
    }

    return <>
    <Header />

    <div className="flex flex-row justify-between">
        <Sidebar_Left className={"w-1/5"} scrollY={scrollY}/>
        <div className="flex flex-col gap-2 m-2 px-4 items-center relative max-w-5xl">
        <div className="w-full text-left px-2 text-md text-gray-500 m-4">
        <a href="/" className="text-md">Home </a>
        <span>/</span>
        <a href="/business" className="text-red-600 text-xl font-semibold"> Health</a>
    </div>
    {health_news.articles.map(news=>{
        return <>
        <div className="flex flex-row gap-2 my-2 border-b-4  w-full relative">
       <div className="w-[70%]">
       <div className=" px-4 py-1 text-red-500 text-xl font-semibold text-left"><a href={news.url} target="blank">{news.title}</a></div>
        <div className="text-sm px-4 py-1 text-left">{news.description} <a href={news.url} target="blank" className="text-red-500 font-bold  py-1 my-3">Read More</a></div>
       </div>
       <div className="w-[30%] bg-cover h-24" style={{backgroundImage:`url("${news.urlToImage}")`}}></div>
        </div>
        </>
    })}
    </div>
        <Sidebar_Right className={"w-1/5"} scrollY={scrollY}/>
    </div>
    </>
}

export default Health;