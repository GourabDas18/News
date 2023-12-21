import { useCallback, useState ,useContext, useEffect } from "react";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import Sidebar_Right from "../Component/Sidebar_Right";
import Footer from "../Component/Footer";
import { MyContext } from "../Context";
const Search_page = (props) =>{

    const [scrollY,setScrollY] = useState(0);
    window.onscroll=(e)=>{
        setScrollY(window.scrollY);
    }

    let {q}  = useParams();
    const[search,setSearch]=useState({"articles":[]})
    const {homeNews,setHomeNews} = useContext(MyContext)
    const searching=useCallback((data)=>{
       var Timer = setTimeout(()=>{
        var url = `https://gnews.io/api/v4/search?q=${data}&lang=en&country=us&max=10&apikey=${process.env.REACT_APP_API_KEY}`;
        try {
            fetch(url,{
                method: "GET",
            }).then(value=> value.text()).then(data=> {setSearch(JSON.parse(data))})
        } catch (error) {
            
        }
       },1200)
    },[setSearch])

    useEffect(()=>{
        if(homeNews===null){
            fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${process.env.REACT_APP_API_KEY}`,{
                method:"GET",  
            }).then(val=>val.text()).then(data=>{
                if(data.status==="error"){
                    alert("Have some issue. Please contact with dev.");
                    if(search.articles.length===0){
                        searching(q);
                    }
                }else{
                    setHomeNews(JSON.parse(data));
                    if(search.articles.length===0){
                        searching(q);
                    }
                }
               
            }).catch(error=>alert("Check Your Internet Connection and Refresh The Page."))
        }
    },[])



    return <div className="relative pb-44 min-h-screen">
         <Header headline={homeNews}/>
    <div className=" flex flex-row items-end">

    <div>
        
        {search.articles.length>0? <span className="text-lg m-4 p-4">
            
        Searched for : {q}
        </span>:<span className="text-lg m-4 p-4">
        Searching for : {q} , Please Wait ...
         
        </span>}
        
        <hr />
        <div className="flex flex-row md:flex-col">
            <div className="w-[75%] md:w-[98%]">
            {search.articles.map(news=>{
            return <>
        <div className="flex flex-row md:flex-col-reverse md:items-center md:gap-1 md:my-6 gap-2 my-2 border-b-4  w-full relative">
       <div className="w-[65%] md:w-[95%]">
       <div className=" px-4 py-1 text-red-500 text-xl md:text-md font-semibold text-left"><a href={news.url} target="blank">{news.title}</a></div>
        <div className="text-sm px-4 py-1 text-left">{news.description} <a href={news.url} target="blank" className="text-red-500 font-bold  py-1 my-3">Read More</a></div>
       </div>
       <div className="w-[35%] bg-cover h-32 md:w-[95%] md:h-48" style={{backgroundImage:`url("${news.image}")`}}></div>
        </div>
            </>
        })}
            </div>
        {search.articles.length>0?<Sidebar_Right className={"w-1/5 md:w-[100%]"} scrollY={scrollY} />:<></>}
           
        </div>

    </div>
    </div>
    <Footer />
    </div>
}

export default Search_page;