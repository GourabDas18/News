import {trending_news} from "../Component/trending-news";

const Sidebar_Left = (props) =>{

    return <>
        
        <div className={props.className + " p-2 border-2 max-h-[35rem] overflow-x-hidden scrollbar-thin"}>
            {trending_news.articles.map(news=>{
                return <div className="flex flex-col justify-center p-2 my-4 border-b-2 cursor-pointer">
                    <span className="block w-full h-32 bg-cover relative" style={{backgroundImage: `url("${news.urlToImage}")`}}></span>
                    <span className="flex flex-col justify-start items-center">
                    <span className="text-sm font-semibold text-left">{news.title}</span>
                    <span className="text-xs py-1 text-left">{news.description}</span>
                    <span className=" text-sm font-bold text-left w-full flex gap-2 items-end">Read Now <i class="fi fi-ss-arrow-right"></i></span>
                    </span>
                </div>
            })}
        </div>
    </>
}

export default Sidebar_Left;