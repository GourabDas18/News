import {trending_news} from "../Component/trending-news";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../Context";
import Sidebar_Right from "../Component/Sidebar_Right";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Sidebar_Left from "../Component/Sidebar_Left";
const Trending = () =>{
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
    },[homeNews])

    return <div className="relative min-h-screen pb-44">
        <Header />
          <div className="flex flex-col md:flex-col w-full items-center">
            <p className="text-center m-2 text-xl font-semibold">Popular News</p>
            <div className="w-2/4 mb-6"><hr className="bg-black h-[1px] border-0"/></div>
            <div className="w-[80%] md:w-[98%]">
            {trending_news.articles.map(news=>{
            return news.title!=="[Removed]" ? <>
        <div className="flex flex-row md:flex-col-reverse md:items-center md:gap-1 md:my-6 gap-2 my-2 border-b-4  w-full relative">
       <div className="w-[65%] md:w-[95%]">
       <div className=" px-4 py-1 text-red-500 text-xl md:text-md font-semibold text-left"><a href={news.url} target="blank">{news.title}</a></div>
        <div className="text-sm px-4 py-1 text-left">{news.description} <a href={news.url} target="blank" className="text-red-500 font-bold  py-1 my-3">Read More</a></div>
       </div>
       <div className="w-[35%] bg-cover h-32 md:w-[95%] md:h-48" style={{backgroundImage:`url("${news.urlToImage}")`}}></div>
        </div>
            </>:<></>
        })}
            </div>
           
        </div>
        <Footer />
    </div>
}

export default Trending;