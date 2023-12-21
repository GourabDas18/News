import Header from "../Component/Header";
import Sidebar_Right from "../Component/Sidebar_Right";
import Sidebar_Left from "../Component/Sidebar_Left";
import Main_news from "../Component/Main_news";
import Footer from "../Component/Footer";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";

const Home = () =>{

    const [scrollY, setScrollY] = useState(0);
    window.onscroll = (e) => {
        setScrollY(window.scrollY);
    }

    const {homeNews,setHomeNews} = useContext(MyContext)
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
    <div>
        <Header headline={homeNews}/>
        <div className="flex flex-row md:flex-col-reverse justify-between">
        <Sidebar_Left className={"w-1/5 md:w-[100%] md:px-2 md:bg-gray-300"} scrollY={scrollY}/>
        <Main_news className={"w-[59%] md:w-[90%] md:m-4"} />
        <Sidebar_Right className={"w-1/5 md:w-[100%]"} scrollY={scrollY}/>
        </div>
        <Footer />
    </div>
    </div>

}

export default Home;