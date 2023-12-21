import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Sidebar_Left from "../Component/Sidebar_Left";
import Sidebar_Right from "../Component/Sidebar_Right";
import { technology_news } from "../Component/trending-news";
import { useState,useEffect,useContext } from "react";
import { MyContext } from "../Context";
const Technology=()=>{
       
const [scrollY,setScrollY] = useState(0);
window.onscroll=(e)=>{
    setScrollY(window.scrollY);
}
const {homeNews,setHomeNews} = useContext(MyContext);
useEffect(()=>{
    if(homeNews===null){
        fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${process.env.REACT_APP_API_KEY}`,{
            method:"GET",  
        }).then(val=>val.text()).then(data=>{
            if(data.status==="error"){
                alert("Have some issue. Please contact with dev.");
            }else{
                setHomeNews(JSON.parse(data));
            }
           
        }).catch(error=>alert("Check Your Internet Connection and Refresh The Page."))
    }
},[])
return <div className="relative pb-44 min-h-screen">
     <Header headline={homeNews}/>
<div className="flex flex-row md:flex-col-reverse md:items-center justify-between">
            <Sidebar_Left className={"w-1/5 md:w-[100%] md:m-4 md:px-2 md:bg-gray-300 self-start"} scrollY={scrollY} />
            <div className="flex flex-col gap-2 m-2 px-4 items-center relative max-w-5xl h-max">
                <div className="w-full text-left px-2 text-md text-gray-500 m-4">
                    <a href="/" className="text-md">Home </a>
                    <span>/</span>
                    <a href="/technology" className="text-red-600 text-xl font-semibold"> Technology</a>
                </div>
                {technology_news.articles.map(news => {
                    return <>
                        <div className="flex flex-row md:flex-col-reverse gap-2 my-2 border-b-4 w-[100%] md:w-[92vw] relative">
                            <div className="w-[70%] md:w-full md:absolute md:bg-[#141515a6]">
                                <div className=" px-4 py-1 text-red-500 text-xl md:text-sm font-semibold text-left">
                                    <a href={news.url} target="blank">{news.title}</a>
                                </div>
                                <div className="text-sm md:text-xs md:text-white px-4 py-1 text-left">{news.description} <a href={news.url} target="blank" className="text-red-500 font-bold  py-1 my-3">Read More</a></div>
                            </div>
                            <div className="w-[30%] md:w-full bg-cover h-32 md:h-80" style={{ backgroundImage: `url("${news.urlToImage}")` }}></div>
                        </div>
                    </>
                })}
            </div>
            <Sidebar_Right className={"w-1/5 md:w-[100%] self-start"} scrollY={scrollY} />
        </div>
        <Footer />
</div>
}

export default Technology;