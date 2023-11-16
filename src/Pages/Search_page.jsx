import { useState } from "react";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import Sidebar_Right from "../Component/Sidebar_Right";

const Search_page = (props) =>{

    const [scrollY,setScrollY] = useState(0);
    window.onscroll=(e)=>{
        setScrollY(window.scrollY);
    }

    let {q}  = useParams();
    const[search,setSearch]=useState({"articles":[]})

    const searching=(data)=>{
        var url = `https://newsapi.org/v2/everything?q=${data}&pageSize=25&apiKey=149faa0fd9db4b78ad5a7a4cf55d7164`
        fetch(url,{
            method: "GET",
        }).then(value=> value.text()).then(data=> {setSearch(JSON.parse(data))})
    }

    useState(()=>{
        searching(q)
    },[])



    return <>
    <Header />
    <div className=" flex flex-row items-end">

    <div>
        
        {search.articles.length>0? <span className="text-lg m-4 p-4">
            
        Searched for : {q}
        </span>:<span className="text-lg m-4 p-4">
        Searching for : {q} , Please Wait ...
         
        </span>}
        
        <hr />
        <div className="flex flex-row">
            <div className="w-[75%]">
            {search.articles.map(news=>{
            return <>
        <div className="flex flex-row gap-2 my-2 border-b-4  w-full relative">
       <div className="w-[65%]">
       <div className=" px-4 py-1 text-red-500 text-xl font-semibold text-left"><a href={news.url} target="blank">{news.title}</a></div>
        <div className="text-sm px-4 py-1 text-left">{news.description} <a href={news.url} target="blank" className="text-red-500 font-bold  py-1 my-3">Read More</a></div>
       </div>
       <div className="w-[35%] bg-cover h-32" style={{backgroundImage:`url("${news.urlToImage}")`}}></div>
        </div>
            </>
        })}
            </div>
        {search.articles.length>0?<Sidebar_Right className={"w-1/5"} scrollY={scrollY} />:<></>}
           
        </div>

    </div>
    </div>
    </>
}

export default Search_page;