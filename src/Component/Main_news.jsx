
import {trending_news} from "../Component/trending-news";
const Main_news=(props)=>{
    
    return <>
    <div className={props.className+ " flex flex-col gap-2"}>
    {trending_news.articles.map(news=>{
       return news.description !== "[Removed]"?  <>
        <div className="flex flex-col justify-between bg-cover w-full relative m-2 shadow-sm h-96" style={{backgroundImage:`url("${news.urlToImage}")`}}>
            <span className="bg-red-500 text-white p-1 w-max">{new Date(news.publishedAt).getUTCFullYear()+"-"+(parseInt(new Date(news.publishedAt).getMonth())+1)+"-"+new Date(news.publishedAt).getUTCDate()}</span>
            <span className="flex flex-col gap-2 text-left bg-[#100c0c36]">
                <span className="text-xl text-white shadow-sm p-4 py-1 drop-shadow-lg bg-red-700">{news.title}</span>
                <span className=" text-gray-200 px-4 py-1 font-semibold">{news.description} <button className=" py-1 px-4 bg-white text-xs text-black">Read More</button></span>
            </span>
        </div>
        </>
        : <></>
    })}
    </div>
    </>
}

export default Main_news;