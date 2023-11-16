import Header from "../Component/Header";
import Sidebar_Right from "../Component/Sidebar_Right";
import Sidebar_Left from "../Component/Sidebar_Left";
import Main_news from "../Component/Main_news";


const Health = () =>{

    return <>
    <div>
        <Header />
        <div className="flex flex-row justify-between">
        <Sidebar_Left className={"w-1/5"} />
        <Main_news className={"w-[59%]"} />
        <Sidebar_Right className={"w-1/5"}/>
        </div>
    </div>
    </>

}

export default Health;