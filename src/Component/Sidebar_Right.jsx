import {trending_news} from "../Component/trending-news";
const Sidebar_Right=(props)=>{

    return <>
    <div className={props.scrollY>=180&&window.screen.availWidth>767?props.className+" self-start sticky top-0 right-0":props.className+" relative"}>
        <hr></hr>
        <span className="text-left font-semibold text-lg w-full ">Popular News</span>
        <div className="px-1">
            {trending_news.articles.map((news,i)=>{
                if(i<3){
                    return <div className="flex flex-col border-b-2 last:border-none m-4 py-1">
                    <span className="text-left font-semibold text-sm pb-1">{news.title}</span>
                    <span className="flex flex-row gap-2 text-gray-500 text-sm text-left">
                    <span className="block w-1/3 h-20 bg-cover relative" style={{backgroundImage: `url("${news.urlToImage}")`}}></span>
                        
                        {/* <img src={news.urlToImage} className="min-w-28 max-h-[4rem] h-fit relative"/> */}
                        <span className="w-2/3 text-xs">{news.description.substring(0,120)+"..."}</span>
                    </span>
                    </div>
                }else if(i===4){
                    return <button className="w-40 py-1 text-slate-100 border-2 text-sm bg-red-500 shadow-sm hover:bg-slate-100 hover:text-red-500 transition-all">See More</button>
                }else{
                    return <></>
                }
                
            })}
        </div>
        </div>
    </>
}

export default Sidebar_Right;